# 虚拟机
## types
* system virtual machines
* process virtual machines

##  system virtual machines
*  provide a substitute for a real machine

## process virtual machines
* designed to execute computer programs in a platform-independent environment.
* JIT: just-in-time compilation， 及时编译



### QEMU
* 不能在Docker中运行，windows下的ubuntu可以运行
* 条件
  * sudo apt-get install qemu
  * sudo apt-get install qemu-kvm
  * sudo apt-get install qemu-system-x86_64
* 运行
  * qemu-img create -f qcow2 Puppy.qcow 10G，创建一个虚拟硬盘或者 qemu-img create Puppy.vdi 10G，默认磁盘名称为 .qcow2、.qed、.qcow 和 .cow。
  * 从ISO引导启动，qemu-system-x86_64 -boot d -cdrom ubuntu-22.04.2-desktop-amd64.iso -m 512
  * qemu-system-x86_64 -boot d -cdrom ubuntu-22.04.2-desktop-amd64.iso -m 512 -hda Puppy.vdi，`需要在真实虚拟机上运行，不可以在远程shell中运行`
  * qemu-system-x86_64 -hda puppy.vdi `不使用启动项运行`
  * qemu-system-x86_64 -S 