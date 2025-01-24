## Route

### 路由协议
* 动态路由，也就是动态维护路由表，而不是静态维护
* 为什么需要路由协议呢？

### 链路状态路由协议
* 距离为时延
* 每次更新只更新变化
* 使用Dijkstra算法
#### (OSPF)Open Shortest Path First
* 主要用在数据中心内部
* 等价路由的负载均衡
* OSPF路由器通过交换链路状态数据库（Link State Database）信息，可以了解整个网络的拓扑结构。**每个OSPF路由器都有完整的链路状态数据库**，并根据这些信息进行最短路径计算。
* OSPF使用**IP协议**（通常使用IPv4或IPv6）作为底层的传输协议，它使用IP数据报来交换路由信息

### IGP(Interior Gateway Protocol) 
* 内部网关协议或者说内网网关协议
* RIP、OSPF、IS-IS、IGRP
* ![protocol-layer](./assets/route-protocol-layer.png)

### EGP(Exterior Gateway Protocol)
* 外部网关协议
* BGP

### 距离矢量协议
#### RIP 
* Routing Information Protocol,路由信息协议
* 使用“跳数”(即metric)来衡量到达目标地址的路由距离
* **在实际使用中已经较少适用**
* 若采用RIP协议，其网络内部所经过的链路数不能超过15，这使得RIP协议不适于大型网络。
* 距离就是通往目的站点所需经过的链路数，取值为0~16，数值16表示路径无限长
* RIP进程使用**UDP**的520端口来发送和接收RIP分组。
* 向邻居路由器发送**完整的路由表**
* 收敛较慢，即问题路由的后续处理比较慢
* **RIP协议本身并不提供完整的网络拓扑结构，它只了解到相邻路由器之间的连接和距离，无法了解整个网络的全貌。**

### (BGP) Border Gateway Protocol 
* 边界网关协议（英语：Border Gateway Protocol，缩写：BGP）是互联网上一个核心的去中心化自治路由协议。
* BGP是一种路径矢量协议（Path vector protocol）的实现。因此，它的工作原理也是基于路径矢量(路径适量：向某个ip地址的距离(跳数))。 
* BGP不做路由发现，路由发现的功能是IGP(interior gateway protocol，比如RIP、OSPF)完成的，BGP做的是路由控制，路由的信息需要读取IGP的数据
* BGP相当于是AS(Autonomous system)的网关,世界的网络是由BGP连接起来的AS组成的
* 路由器不可能做到全球寻址的，所以会被切割为AS，每个AS有独立的编号, AS号是一个16bit的数字，全球共用这60000多个编号。1 – 64511 是全球唯一的，而 64512 – 65535 是可以自用的，类似于私网网段。每个自治网络都需要申请自己的AS编号，联通的AS号是9800，[AS编号查询](http://www.cidr-report.org/as2.0/aggr.html)
* ![image](./assets/v2-652480a0d963f3ab49e420ec8a6181cb_720w.jpg)
* TCP层的协议，网络中竟然有tcp层的协议
* eBGP，边界路由器之间使用
* iBGP，内部网络使用; 通过iBGP内部的路由器可以找到到**达外网目的地的最好的边界路由器**
* BGP的邻居关系（或称通信对端/对等实体，peer）是通过**人工配置**实现的,对等实体之间通过**TCP端口**179建立会话交换数据
* AS在本地通信中可以任意指定，不需要申请
* 在AS边界上与其他AS交换信息的路由器被称作边界路由器（border/edge router），**边界路由器之间互为eBGP对端**。
* 所有的iBGP peer之间需要全互联
* BGP协议的重点是**可扩展性、安全性和灵活性**
* 在容器网络中多使用BGP而不是RIP或者OSPF的主要原因有
  * 可扩展性：BGP协议在大规模网络环境中具有更好的可扩展性。**BGP设计用于处理全球范围的互联网路由，能够处理大量的路由表和自治系统之间的复杂路由关系**。相比之下，RIP和OSPF在大型网络中可能会受限于其算法和数据结构的限制。
  * 灵活性：BGP协议具有更灵活的路由策略和路由选择能力。**BGP允许管理员通过策略配置来控制流量的路径选择和优先级**。这对于容器网络中的应用场景非常重要，因为需要根据实际需求和业务策略来管理流量的路由。
  * 跨自治系统的路由：**BGP协议专注于跨自治系统的路由**，而RIP和OSPF主要用于自治系统内的路由选择。在容器网络中，跨多个自治系统的通信是常见的情况，例如不同的云提供商之间的互连，因此使用BGP更适合管理跨自治系统的路由。
* 外部连接和边界路由：BGP协议通常用于连接到外部网络和边界路由器。在容器网络中，使用BGP协议可以方便地与外部网络进行连接，并通过与其他自治系统的边界路由器交换路由信息，实现容器网络与外部网络的互联和流量转发。
* **BGP构建起了基本的骨架，IBGP构建内部的，EBGP构建外部的，通过TCP强互联进行通信**
#### 为什么会有AS
* 独立管理：自治系统允许组织或网络运营商独立管理和控制自己的网络资源，包括路由策略、地址分配和网络拓扑等。这样可以更好地满足组织或运营商的特定需求，提供定制化的网络服务。
* 路由划分：自治系统将互联网划分为逻辑上的独立单元，每个自治系统内部可以使用自己的内部路由协议，自主决定内部的路由策略和路由选择算法。这样可以提高网络的灵活性和可扩展性，减少互联网路由表的复杂性。
* 安全和隔离：通过自治系统的划分，**可以实现不同组织或运营商之间的安全隔离**。每个自治系统可以在自己的边界上实施安全措施，保护自己的网络资源和用户数据。
* 路由策略控制：**自治系统允许组织或运营商自主决定自己的路由策略**。通过配置和管理自治系统之间的路由协议（如BGP），可以实现对流量的控制和优化，确保网络的可靠性和性能。
#### 查看BGP
* https://bgp.he.net/

### 理解
* AS就是类似VLAN，将internet分割为多个独立的子网，每个AS都要有独立的id才能进行区分
* 对于AS而言，**负载均衡非常重要**，充分利用网络中的设备，避免某些路径拥堵
* 路由路由：其实就是寻路，而寻路只有二层寻路和三层寻路两种模式

### 边界路由器
* 边界路由器（Border Router）是一种网络设备，位于不同网络之间的边界处，负责在不同网络之间进行数据包的转发和路由选择

### 理解
* 本质上讲是将数据使用最优路径传递到目的地
* 而整个计算机网络是个图
* 路由是将网络进一步的切分，互联也就是切分
* 不能使用交换机路由的模式，因为广播量太大了


### 模拟器
* [模拟器](https://netsim.erinn.io/)

### router
* 决定了某个数据包从哪个接口(网卡)流出去
* ip route list
* netstat -rn
* route -n

### 数据包的修改方式
* NAT 
* OVERLAY
* 修改MAC地址

### 数据包在流转的处理方式
* 被修改
* 被转发

### 路由规则
* 当执行route -n命令时，系统会遍历路由表中的每一条路由表项，并与目标IP地址进行匹配。匹配规则通常是按照最长前缀匹配原则进行的，即根据目标IP地址的最长前缀来确定最佳匹配的路由表项。
* 具体匹配规则如下：
  * 系统会从路由表的顶部开始逐条匹配，**直到找到**与目标IP地址**最匹配**的路由表项。（**不是找到第一个**）
  * 匹配规则是按照路由表项中的目标网络地址和子网掩码进行比较。系统将目标IP地址与路由表项中的目标网络地址进行按位与操作，然后将结果与路由表项中的子网掩码进行比较，如果结果相等，则表示匹配成功。
  * 如果有多个路由表项匹配了目标IP地址，系统会选择最长前缀匹配的路由表项作为最佳匹配。**最长前缀匹配是指子网掩码的位数最多的路由表项**(意思是，匹配位数越多，距离越近？)。
  * 如果**没有找到**与目标IP地址匹配的路由表项，系统会将数据包发送到**默认网关**（Default Gateway），如果有配置的话。
* 例子：
  ```
  Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
  0.0.0.0         172.17.0.1      0.0.0.0         UG    0      0        0 eth0
  172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 eth0
  ```
  * Genmask: The netmask for the destination net; 子网掩码，用于与目标IP地址进行按位与操作，确定匹配的网络范围。 '255.255.255.255' for a host destination and '0.0.0.0'(**最远距离**) for the default route.
  * Flags
    * U: up
    * H: target is a host
    * G: use gateway
    * !: reject route