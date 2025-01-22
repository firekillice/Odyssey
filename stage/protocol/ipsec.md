# ipsec
* Internet Protocol Security
* 提供IP层的安全性
* 通过对IP协议的分组进行加密和认证来保护IP协议的网络传输协议族
* IPSec具有两种加密模式：隧道和传输
## AH 
* Authentication Header协议
## ESP 
* Encapsulating Security Payload
## IKE 
* Internet Key Exchange
## 隧道模式
* 隧道模式对整个IP数据包进行加密。此时，需要新产生一个IP头部，IPSec头部被放在新产生的IP头部和以前的IP数据包之间，从而组成一个新的IP头部，


## 传输模式
* 传输模式只对IP数据包的有效负载进行加密。

## vpn 
* 隧道技术来建立可通过互联网访问的专用网络。从实质上来说，隧道技术就是将整个数据包放入另一个数据包中，并将后者通过网络发送出去的过程。网络和数据包进出网络的入口点和出口点（我们称为隧道接口）都能够理解外部数据包的协议。