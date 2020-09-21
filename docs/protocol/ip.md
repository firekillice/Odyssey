# Internet Protocol
* 名字听起来相当霸气

## IP fragmentation
* IP fragmentation is an Internet Protocol (IP) process that breaks packets into smaller pieces (fragments), so that the resulting pieces can pass through a link with a smaller maximum transmission unit (MTU) than the original packet size. 
* The Identification field along with the foreign and local internet address and the protocol ID, and Fragment offset field along with Don't Fragment and More Fragment flags in the IP header are used for fragmentation and reassembly of IP packets.

## Maximum Transmission Unit(MTU)
* 发现MTU的ping命令: ping -c 3 -s 1472 -M do 10.10.50.1
* 此处看到的是使用Ping命令探测到最大值为1472,因为ICMP协议头是8个字节