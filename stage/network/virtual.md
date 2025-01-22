## 虚拟化
### 各种虚拟网络设备
* Bridge
* Vlan
* tun/tap
* veth pair
* vxlan/gre

### KVM (Kernel-based Virtual Machine)
* 基于内核的虚拟机
* Linux 内核模块，它为虚拟化提供了基础支持

### QEMU（Quick EMUlator）
* 是一个用户态的虚拟机监控器(VM**M**onitor)，与KVM配合使用
* [主页](https://www.qemu.org/)
* It supports a number of hypervisors (known as accelerators) as well as a **JIT** known as the Tiny Code Generator (TCG) capable of emulating many CPUs.

### GuestOS
* Guest OS中的系统调用和中断将被KVM模块拦截并转发到QEMU，QEMU会处理这些调用或中断，并在需要时触发相应的虚拟机操作。

### 影子页表(Shadow page table)
* VMM把Guest和Host中的页表合并成一个页表，称为影子页表，来实现GVA(Guest Virtual Address)->HPA(Host Physical Address)映射。