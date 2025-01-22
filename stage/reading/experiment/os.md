## OS

### 镜像格式
* IMA: Initial RAMdisk
  * IMA 是 Linux 系统启动过程中使用的一种初始内存盘（RAM disk）镜像格式。
  * IMA 镜像通常用于存储操作系统的初始根文件系统，用于启动过程中加载到内存中。
  * IMA 镜像包含了启动所需的基本文件和目录，以及必要的系统服务和驱动程序，以便在系统引导时能够正常运行。
  * IMA 镜像一般较小，因为其主要目的是提供启动时所需的最小化文件系统。
* IMG: disk image
  * IMG 是一种磁盘镜像格式，用于存储整个磁盘或分区的数据，包括文件系统和数据块。
  * IMG 镜像可以包含完整的操作系统、应用程序和文件系统，以及用户数据和配置信息。
  * IMG 镜像可以用于创建虚拟机、嵌入式系统、移动设备等，也可以用于备份和恢复文件系统或磁盘数据。



### hello.asm
```
;RatsOS
;TAB=4
[bits 16]
	org     0x7c00 				;指明程序的偏移的基地址

;boot程序
	jmp     Entry

;程序核心内容
Entry:
	mov ax,0xb800
	mov gs,ax                   ;显存段地址
	mov byte [gs:0x00],'r'      ;输出字符
	mov byte [gs:0x01],0x74     ;设置颜色(背景色蓝，前景色白)
	mov byte [gs:0x02],'a'
	mov byte [gs:0x03],0x74
	mov byte [gs:0x04],'t'
	mov byte [gs:0x05],0x74
	mov byte [gs:0x06],'s'
	mov byte [gs:0x07],0x74
	mov byte [gs:0x08],'o'
	mov byte [gs:0x09],0x74
	mov byte [gs:0x0a],'s'
	mov byte [gs:0x0b],0x74
                 	
	jmp $						;进入死循环，不再往下执行。

Fill_Sector:
	resb    510-($-$$)       	;处理当前行$至结束(1FE)的填充
	db      0x55, 0xaa
```
* 执行
```
#!/bin/bash
> nasm -f bin -o hello.ima ./hello.asm
> qemu-system-x86_64 -m 128 -rtc base=localtime -fda hello.ima
> od -t x1 -A n hello.ima
000000 eb 00 b8 00 b8 8e e8 65 c6 06 00 00 72 65 c6 06
000010 01 00 74 65 c6 06 02 00 61 65 c6 06 03 00 74 65
000020 c6 06 04 00 74 65 c6 06 05 00 74 65 c6 06 06 00
000030 73 65 c6 06 07 00 74 65 c6 06 08 00 6f 65 c6 06
000040 09 00 74 65 c6 06 0a 00 73 65 c6 06 0b 00 74 eb
000050 fe 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000060 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
* (此处表示相同的行略过)
0001f0 00 00 00 00 00 00 00 00 00 00 00 00 00 00 55 aa
000200
 >
```


### 编译内核
* dockerfile
```
FROM gcc:latest

RUN apt-get update

RUN apt-get install -y flex
RUN apt-get install -y bison
RUN apt-get install -y libssl-dev
RUN apt-get install -y libelf-dev
RUN apt-get install -y ncurses-dev
RUN apt-get install -y bc
```
* make defconfig
* make bzImage -j8
* target： linux-6.4.6/arch/x86/boot/bzImage

### 运行内核
* qemu-img create -f raw kernal.raw 512M
* mkfs -t ext4 ./kernal.raw
* emu-system-x86_64 -m 512M -kernel linux-6.4.6/arch/x86/boot/bzImage -drive format=raw,file=./kernel.raw -append "root=/dev/sda" 需要在机器上直接执行，不能在远程shell中执行
* qemu-system-x86_64 -m 512M -kernel linux-6.4.6/arch/x86/boot/bzImage -drive format=raw,file=./kernel.raw -nographic -append "root=/dev/sda console=ttyS0"
* qemu-system-x86_64 -m 512M -kernel linux-6.4.6/arch/x86/boot/bzImage -drive format=raw,file=./kernel.raw -append "root=/dev/sda init=/simple"

### 镜像文件格式
* qed: QEMU enhanced disk
* qcow2: 
  * QEMU 虚拟化软件使用的高级磁盘镜像格式。
  * 支持精简分配，它在创建时只使用必要的磁盘空间，随着虚拟机使用增长，会动态地分配更多的空间
  * 常用于 QEMU/KVM 虚拟化环境，它具有高级的特性和灵活性
  * 支持写时复制（Copy On Write，COW）技术，允许多个虚拟机共享相同的基础镜像，并在需要时创建分层的差异数据
* vdi: Virtual Disk Image
  *  VirtualBox 虚拟化软件使用的磁盘镜像格式
  *  VDI 格式支持动态分配和固定大小两种模式。动态分配模式在初始创建时占用很少的磁盘空间，然后随着虚拟机使用增长而逐渐扩展。固定大小模式会预分配所有磁盘空间，但可能会浪费一些空间。
* raw
  * Raw 格式是一种简单的磁盘映像格式，它直接将磁盘的原始内容保存到文件中，没有额外的压缩或元数据。
  * 这种格式通常很快，但可能会浪费一些磁盘空间，因为它不会对未使用的磁盘空间进行压缩或精简。
  * Raw 格式适用于需要快速访问和性能的场景，但不太适合节省存储空间。

### qemu-image 
* 


### 挂载文件系统
* mkdir img
* mount -o loop ./kernel.raw ./img
* df -T  . 查看当前目录的文件系统