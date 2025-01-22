## 交换机

### 工作
* 数据帧接收：交换机通过端口接收到数据帧（带有源MAC地址和目标MAC地址的数据包）。
* MAC地址学习：交换机会记录下每个数据帧中源设备的MAC地址，并将其与接收到的端口关联起来。这样，交换机建立了一个MAC地址表，用于跟踪每个设备的位置。
* 数据帧过滤和转发：当交换机接收到一个数据帧时，它会根据目标MAC地址查找MAC地址表，确定应该将数据帧转发到哪个端口。如果目标MAC地址在表中已知，并且不在接收端口上，则交换机会将数据帧转发到相应的端口。如果目标MAC地址不在表中，则交换机会将数据帧广播到所有其他端口上，以寻找目标设备。
* 碰撞域隔离：交换机的每个端口都处于一个独立的碰撞域中，这意味着每个端口上的数据帧不会相互碰撞。这样可以提高网络的容量和性能。
* **VLAN支持**：交换机可以支持虚拟局域网（VLAN），将不同的端口分割为不同的逻辑网络，使得不同的设备可以隔离和通信。
* 数据转发表维护：交换机会根据数据帧的传输情况和活动设备的变化来更新MAC地址表，以确保数据帧能够正确地转发到目标设备。


### 理解
* 进一步的分解了冲突域，多端口，每个端口一个冲突域
* 像一个大章鱼，将数据包在各个端口之间进行传递
* 在一个级联的交换机网络中，任何一个节点如果知道了对方IP，都应该能访问到其他节点
* ARP在遇到交换机的时候，会将**ARP广播到到来端口之外的所有端口**
* 如果交换机遇到不识别的目标MAc，**也会把数据帧转发广播到其他端口**

### 隔离
* 物理隔离，单独的交换机，单独的子网
* 虚拟隔离，共享资源中进行分割

### STP (Spanning Tree Protocol)
* 它是IEEE 802.1D标准定义的一种链路层协议，用于构建一个无环的拓扑结构，以确保数据在局域网中能够稳定地传输。
* STP的主要目标是通过选择并保留一个主干路径，将其他冗余路径阻断，从而避免数据包在局域网中产生环路和广播风暴。它通过计算出一个根桥（Root Bridge）和一组最短路径树（Spanning Tree）来实现这一目标。

### layer
* 接入层
* 汇聚层
* 核心层

### Open vSwitch(OVS)
* Open vSwitch相对于虚拟网桥具有更丰富的功能。它支持灵活的流表匹配和转发，可以实现更复杂的网络策略和路由控制。
* Open vSwitch具有可编程性，可以通过控制器（如SDN控制器）对其进行配置和管理。
*** Linux Bridge 和 Open vSwitch** 是目前 OpenStack 中使用最广泛的两种虚机交换机技术
* gre/vxlan/IPsec
#### 查看
* modinfo openvswitch >> 
```
filename:       /lib/modules/5.16.18-200.fc35.x86_64/kernel/net/openvswitch/openvswitch.ko.xz
alias:          net-pf-16-proto-16-family-ovs_ct_limit
alias:          net-pf-16-proto-16-family-ovs_meter
alias:          net-pf-16-proto-16-family-ovs_packet
alias:          net-pf-16-proto-16-family-ovs_flow
alias:          net-pf-16-proto-16-family-ovs_vport
alias:          net-pf-16-proto-16-family-ovs_datapath
license:        GPL
description:    Open vSwitch switching datapath
depends:        nf_conntrack,nf_nat,nf_conncount,nf_defrag_ipv6,nsh
retpoline:      Y
intree:         Y
name:           openvswitch
vermagic:       5.16.18-200.fc35.x86_64 SMP preempt mod_unload 
sig_id:         PKCS#7
signer:         Fedora kernel signing key
sig_key:        44:BF:89:07:00:CF:FB:7B:A6:D9:59:DD:02:99:8B:D9:35:5C:BD:D3
sig_hashalgo:   sha256
signature:      03:A9:0E:FF:31:3F:5D:E5:DB:46:F1:86:C3:87:7A:5B:A7:19:C2:B5:
   
```