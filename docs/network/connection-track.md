## ConnectionTrack(CT)

### 事项
* 从数据包中提取**元组**（tuple）信息，辨别**数据流**（flow）和对应的**连接**（connection）
* 为所有连接维护一个**状态数据库**（**conntrack table**），例如连接的创建时间、发送 包数、发送字节数等等
* 回收过期的连接（GC）
* 为更上层的功能（例如 NAT）提供服务

### 实现
* linux的连接跟中是在netfilter中实现的
* 只要具备了 hook 能力，能拦截到进出主机的每个包，完全可以在此基础上自 己实现一套连接跟踪
* 云原生网络方案 Cilium 在 1.7.4+ 版本就实现了这样一套独立的连接跟踪和 NAT 机制 
  * 基于 BPF hook 实现数据包的拦截功能（等价于 netfilter 里面的 hook 机制）
  * 在 BPF hook 的基础上，实现一套全新的 conntrack 和 NAT

### 应用场景
* NAT，也是最重要的应用场景
* 四层负载均衡L4LB
  * 四层负载均衡是根据包的四层信息（例如 src/dst ip, src/dst port, proto）做流量分发
  * VIP（Virtual IP）是四层负载均衡的一种实现方式：
    * 多个后端真实 IP（Real IP）挂到同一个虚拟 IP（VIP）上
    * 客户端过来的流量先到达 VIP，再经负载均衡算法转发给某个特定的后端 IP
  * 如果在 VIP 和 Real IP 节点之间使用的 NAT 技术（也可以使用其他技术），那客户端访 问服务端时，L4LB 节点将做双向 NAT（Full NAT）
* 有状态防火墙
  * OpenStack 主机防火墙解决方案 —— 安全组（security group）
  * 安全组实现了虚拟机级别的安全隔离，具体实现是：在 node 上连接 VM 的 网络设备上做有状态防火墙。

### 查看
* cat /proc/net/stat/nf_conntrack