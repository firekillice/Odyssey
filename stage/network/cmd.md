## 网络命令集合

### ip vs ifconfig
* ifconfig已经存在很长时间了，并且仍然被许多人用于配置，显示和控制网络接口，但是现在Linux发行版上存在一种新的替代方案，它比它强大得多。这个替代方案是来自iproute2util包的命令
* vs
```
ip a => ifconfig 
ip a add 192.168.80.174 dev eth0  => ifconfig eth0 add 192.168.80.174
ip link set dev eth0 address 00:0c:29:33:4e:aa => ifconfig eth0 hw ether 00:0c:29:33:4e:aa
ip link set dev eth0 mtu 2000 => ifconfig eth0 mtu 2000
ip link set dev eth0 multicast on => ifconfig eth0 multicast
ip link set eth0 down => ifconfig eth0 down
```

### arping 
* arping -I eth0 10.10.52.0