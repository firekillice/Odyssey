## NAT
* Network Address Translation
* 通常实现在路由器上，通过借壳进行连接到外部网络


### Connection Tracking (CT)
* 连接跟踪
  * 细节
    * 从数据包中提取元组（tuple）信息，辨别数据流（flow）和对应的连接（connection）
    * 为所有连接维护一个状态数据库（conntrack table），例如连接的创建时间、发送 包数、发送字节数等等
    * 回收过期的连接（GC）
    * 为更上层的功能（例如 NAT）提供服务
* linux下是netfilter实现的
* 应用： NAT、L4LB、有状态防火墙