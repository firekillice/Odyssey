# 磁盘和内存如何聊天

```
不做特殊说明的话，本文涉及到的内容都基于x86体系和Linux6.14内核。
```

### 说说机械磁盘
* 大体的运动与工作方式，![hdd-working](./assets/hdd2mem/hdd-working.gif)
* 磁性存储技术是一种基于磁场变化来存储和检索数据的技术。它利用磁性材料的性质，通过改变磁场的方向或强度来表示数据的0和1。
* ![Hard_drive_geometry](./assets/hdd2mem/Hard_drive_geometry.png) 图片来源wikipedia，从图中可以看出，磁盘根据柱面（Cylinder）、磁头（Header）和扇区（Sector）分成三个层次，三者简称CHS，可以使用**坐标系xyz**来理解。
* 磁盘的最小寻址单元为sector,即只要磁头运行到扇区的上方就可以把数据读取了，一般为512B或者4KB，[seagate产品参数](https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/datasheets/pdfs/barracuda-2-5-DS1907-3-2005CN-zh_CN.pdf)从这上面可以看到，物理扇区其实是4KB，但是逻辑上保持512，也就是所谓的512e，还有512n，这种就是传统的物理和逻辑上都是512n，目前比较新的是4Kn，逻辑和物理上都是4K
* 磁盘读写数据的不会停下来，而是保持一直旋转的状态，只要磁头到了扇区的上方，即使在磁盘高速转动的情况下数据也会立刻就被读取或者写入进去。
* 每个盘面只有一个磁头 所有的磁头都是连在同一个磁臂上的，并且在相同的轨道上，所有磁头只能**共进退**
* 关于不同盘面之间的写入顺序问题有不同的说法，最常见的是"同一时刻只能有一个磁头在工作，磁头的切换可以通过电路进行控制，而选择柱面则需要机械切换，所以数据的存储是优先按照柱面进行的"

### 说说SSD(Solid-State Disk)
* Flash Memory: 闪(此处的闪应该是相对于机械磁盘那种龟速来说的)存，分为NOR()闪存（BIOS中使用）和NAND(Not And与非门)闪存，一般情况NOR Flash容量较小，NAND Flash容量较大，比如U盘和SSD固态硬盘。
* 所有信息都存储在浮栅晶体管，对于不想理解硬件的程序员来说，可以记住它就是电子牢笼，里面有电子就代表0，没有电子代表1（是不是与你想的不一样，所以默认值是1），所以SSD的写其实意思就是将1变0，不会从0变为1，那个操作需要使用**擦除**，后面说到。
* 重要概念
  * **Block**: 最小擦除单位
  * **Page**: 最小读写单位
  * **Plane**: 组，提供并行读写能力
  * **Die**:  晶圆，封装多个Plane
  他们之间的关系如下
  ![ssd-inner-layout](./assets/hdd2mem/ssd-inner-layout.png)
* **关于电压**：
  * SSD的工作电压大概是3-5v，写电压大概是10-20v，而擦除电压需要比写电压更高，对比一下DRAM的充电电压才1-3v，差了相当多。
  * 也就是高电压才能让电子穿过绝缘层被囚禁起来稳定的保存10年之久，带来的影响是，如果在绝缘层上高电压的次数多了，绝缘层也就失效了，所以SSD的Block都有擦除次数上限。
  * 因为Page的电子状态是由Block的电气特性决定的。如果只擦除某一页面，会导致页面之间的 电压不一致，从而造成无法控制的读写错误。
* **GC**: 对开发人员都不陌生，SSD也有GC，就是将标记为无效的Page进行收集归拢
* **磨损均衡**: 为了防止某一个Block运气不好被反复的擦除直到累死(可擦除次数耗尽)，SSD的控制器为了防止这种情形发生而进行的操作。
* **FTL(Flash Translation Layer)**: 在进行擦除的时候需要进行数据的移动，所以数据的地址关系就发生了变化，为了保证寻址，固态磁盘使用FTL记录数据的映射关系。

### LBA(Logical Block Address)
为了应对机械磁盘配置参数的多样性以及固态硬盘的存储模式，操作系统中使用了LBA抽象了统一的、线性地址空间，不再关心具体的物理特性。
* 对于机械磁盘而言, LBA转为CHS，方式如下
```
cylinder：磁盘的柱面
head：磁盘的磁头，每张磁片有两个磁头
sector：磁盘扇区，这里指物理扇区，编号从 1 - 63，每条 track 的最大 sector 数 63
SPT（sector_per_track）：每磁道上的 sector 数
HPC（head_per_cylinder）：每个 cylinder 的 head 数量，这个数量应该是磁片数 * 2

LBA = (cylinder * HPC + head) * SPT + sector - 1

cylinder = LBA / (SPT * HPC)
head = (LBA / SPT) % HPC
sector = LBA % SPT + 1
```
* 对于SSD而言, LBA转为PBA(Physical Block Address)，使用FTL进行，这个由SSD自动完成，操作系统不用关心。
  
* 查看磁盘的IO调度策略 
```
cat /sys/block/sr0/queue/scheduler 
noop [deadline] cfq  带有[]是当前使用的
noop： 不做任何调度，将写请求放入FIFO队列
deadline：按照过期时间存储
cfq(Completely Fair Queueing): 防止IO分配的不公平，防止某些进程独占磁盘带宽
```
* 查看磁盘的块大小 blockdev --getbsz /dev/sda
* 存储的时候需要在Page(内存)、Block(文件系统)、Sector(硬件读写)之间进行单位的组织与转换，Block作为中间单元，大小上一般Page >= Block >= Sector

### Ext4文件系统
![ext4-layout](./assets/hdd2mem/ext4-layout.png)
#### 先从inode开始
* 查看文件inode number
```
> ls -i example.txt 
87664379 example.txt
```
* inode number 其实就是在inode bitmap中的编号
* dumpe2fs中的信息
  * dumpe2fs /dev/vda1 中包含了丰富的信息
  ```
  Blocks per group:         32768 每个组的Block数目
  Inodes per group:         8192  每个组的Inode数目
  Block size:               4096  Block的大小
  Inode size:               256   Inode 字段的大小
  Inodes per group:         8192  每组的Inode的数量
  ```
  * dumpe2fs /dev/vda1  | grep Group查看组的个数
  * dumpe2fs /dev/vda1  | grep superblock
  ```
  Primary superblock at 0, Group descriptors at 1-3
  Backup superblock at 32768, Group descriptors at 32769-32771
  Backup superblock at 98304, Group descriptors at 98305-98307
  超级块为了冗余在多出都有存储，但是Primary的在Block 0上
  ```
  * 针对每个组
  ```
    Block bitmap at 1025 (+1025) 组的Block bitmap 在Block 1025 
    Inode bitmap at 1041 (+1041) 组的Inode bitmap 在Block 1041
    Inode table at 1057-1568 (+1057) Inode Table 在1057-1568 
    使用这个可以算得 (1568-1057 + 1)* 4 * 1024 / 256(Inode Size) = 8192和上面的8192对应
  ```
 * 如果没有现成的ext的磁盘可以使用如下的方式生成并挂载一个
 ```
 dd if=/dev/zero of=./ext4_image.img bs=1M count=64
 mkfs.ext4 ext4_image.img
 mount -o loop ext4_image.img /root/test_ext4
 dumpe2fs ext4_image.img
 ```
### 不得不提起的MBR(Master Boot Record)和GPT(GUID Partition Table)
* 都是用于磁盘分区的标准
* MBR, 1983年开始使用
* GPT，2006年以后的标准
* 之所以必须要说这两个，是因为它们分区的时候使用LBA地址的形式记录了各个分区的起始与结束的LBA编号，**文件系统如果定位block，使用文件系统block的内部编号 和 文件系统本身的LBA偏移 计算可得**
* 添加MBR和GPT的标准链接


### 文件如何在内存和硬盘之间如何传输呢
![2000feet-view-hdd2mem](./assets/hdd2mem/2000feet-view-hdd2mem.png)


### ext4的文件组织形式
##### inline模式
* ![ext4-inline-layout](./assets/hdd2mem/ext4-inline-layout.png)

#define	EXT4_NDIR_BLOCKS		12
#define	EXT4_IND_BLOCK			EXT4_NDIR_BLOCKS
#define	EXT4_DIND_BLOCK			(EXT4_IND_BLOCK + 1)
#define	EXT4_TIND_BLOCK			(EXT4_DIND_BLOCK + 1)
#define	EXT4_N_BLOCKS			(EXT4_TIND_BLOCK + 1)

unistd.h

#defein __NR_read  63 
__SYSCALL(__NR_read, sys_read)


sys.h
ssize_t sys_read(int fd, void *buf, size_t count)
{
	# 3个参数
	return my_syscall3(__NR_read, fd, buf, count);
}

ssize_t read(int fd, void *buf, size_t count)
{
	return __sysret(sys_read(fd, buf, count));
}
ssize_t write(int fd, const void *buf, size_t count)
{
	return __sysret(sys_write(fd, buf, count));
}


read_write.c
SYSCALL_DEFINE3(read, unsigned int, fd, char __user *, buf, size_t, count)
{
	return ksys_read(fd, buf, count);
}


sys_read@syscalls.h   



write
ksys_write
vfs_write
new_sync_write
write_iter
.write_iter	= ext4_file_write_iter
ext4_file_write_iter
ext4_buffered_write_iter    		ext4_dio_write_iter 
copy_folio_from_iter_atomic返回了   iomap_dio_rw
									__iomap_dio_rw  
									(blk_start_plug, blk_finish_plug)  __blk_flush_plug



通用块处理层 屏蔽不同的设备
vfs 屏蔽不同的文件系统
 
 

系统全部写入

SYSCALL_DEFINE0(sync)
{
	ksys_sync();
	return 0;
}


ksys_sync
sync_bdevs
filemap_fdatawrite
__filemap_fdatawrite
__filemap_fdatawrite_range
filemap_fdatawrite_wbc
do_writepages
.writepages		= ext4_writepages
ext4_writepages
ext4_do_writepages
mpage_map_and_submit_extent
mpage_map_and_submit_buffers
mpage_process_folio
mpage_process_page_bufs->
mpage_submit_folio->
ext4_bio_write_folio-> 
io_submit_add_bh ->
 ext4_io_submit
submit_bio
submit_bio_noacct
submit_bio_noacct_nocheck
bio_list_add   __submit_bio_noacct

__blk_flush_plug
blk_mq_flush_plug_list
__blk_mq_flush_plug_list
queue_rqs
.queue_rqs      = virtio_queue_rqs




read
ksys_read
vfs_read
new_sync_read
.read_iter	= generic_file_read_iter,
generic_file_read_iter(generic filesystem read routine) filemap.c
filemap_read(Read data from the page cache)



page_cache_async_readahead(file readahead for marked pages)
page_cache_sync_ra
do_page_cache_ra
page_cache_ra_unbounded
read_pages
.readahead		= ext4_readahead
submit_bio
submit_bio_noacct
submit_bio_noacct_nocheck
bio_list_add   __submit_bio_noacct

__writeback_single_inode
write_inode

								blkdev_flush_mapping
.write_inode ext4_write_inode   bdev_write_inode

write_inode_now
writeback_single_inode
__writeback_single_inode  filemap_fdatawrite_wbc
do_writepages

ops->writepages

bio 包含segment
request 包含bio
### 细节
* offset -> address_space  <-  inode， 文件线性空间
* pagecache buffcache，上接文件系统，下接硬件, radix tree/xarray
* task_struct => fd => file -inode 
* page offset

### 参考
* [Linux通用块设备层](https://www.ilinuxkernel.com/files/Linux.Generic.Block.Layer.pdf)
* [Linux文件读写（BIO）波澜壮阔的一生](https://www.eet-china.com/mp/a263944.html)