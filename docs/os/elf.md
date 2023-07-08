## ELF 
* Executable and Linkable Format



### section 
* BSS: Block Started by Symbol，未初始化的数据


### segment
* elf文件中的section进入内存中会变为segment
* 为什么要用segment呢？ 空间使用问题，比如将房间分为厨房、客厅一个道理

### 加载过程
* 就是程序被激活的过程
* 加载elf文件是关键
* 加载后mmap覆盖父进程的地址空间