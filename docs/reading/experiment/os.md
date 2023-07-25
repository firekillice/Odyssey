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

NASM=nasm
QEMU=qemu-system-x86_64

$NASM -f bin -o hello.ima ./hello.asm
$QEMU -m 128 -rtc base=localtime -fda hello.ima
```