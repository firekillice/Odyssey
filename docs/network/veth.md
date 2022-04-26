## VETH 
* `ip a add 192.168.80.174 dev eth0`  或者 `ifconfig eth0 add 192.168.80.174` 是在一张网卡上增加ip，并不是增加网卡
* Veth是Linux中一种虚拟出来的网络设备，veth设备总是成对出现，所以一般也叫veth-pair
* 由于veth的“网线”特性，它常常充当着一个桥梁，连接着各种虚拟网络设备。常见用途是连接两个netwok namespace。

### 命名空间
* 分类
```
Mount - isolate filesystem mount points
UTS - isolate hostname and domainname
IPC - isolate interprocess communication (IPC) resources
PID - isolate the PID number space
Network - isolate network interfaces
User - isolate UID/GID number spaces
Cgroup - isolate cgroup root directory
```
* linux列出 
```
/proc/$$/ns > 
ipc  mnt  net  pid  user  uts
```
* Mount Namespace测试
```
unshare --mount --fork /bin/bash
mkdir /tm/tmpfs
mount -t tmpfs -o size=20m tmpfs /tmp/tmpfs

df >
Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/sda4        9950188 1595060   8355128  17% /
devtmpfs            4096       0      4096   0% /dev
tmpfs            2003460       0   2003460   0% /dev/shm
tmpfs             801384    8992    792392   2% /run
tmpfs             400692       0    400692   0% /run/user/0
tmpfs            2003460       0   2003460   0% /tmp
/dev/sda3         370559   98971    247832  29% /boot
tmpfs              20480       0     20480   0% /tmp/tmpfs

exit

df >
Filesystem     1K-blocks    Used Available Use% Mounted on
devtmpfs            4096       0      4096   0% /dev
tmpfs            2003460       0   2003460   0% /dev/shm
tmpfs             801384    8992    792392   2% /run
/dev/sda4        9950188 1595060   8355128  17% /sysroot
tmpfs            2003460       0   2003460   0% /tmp
/dev/sda3         370559   98971    247832  29% /boot
tmpfs             400692       0    400692   0% /run/user/0
```
* PID  Namespace测试
```
unshare --fork --pid --mount-proc /bin/bash

ps aux >
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  1.5  0.1   5672  4856 pts/0    S    11:51   0:00 /bin/bash
root          16  0.0  0.0   7400  3356 pts/0    R+   11:51   0:00 ps aux

```
* UTS Namespace 测试
```
unshare --fork --uts /bin/bash
hostname -b newname
hostname > 
  newname
```
* IPC Namespace 测试
```
unshare --fork --ipc /bin/bash
ipcmk -Q
ipcs
```
* User Namespace 测试
```
新的命名空间中除了root，没有任何用户，并且root并没有host的root权限
unshare --user -r /bin/bash
id >
uid=0(root) gid=0(root) groups=0(root),65534(nfsnobody) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
reboot > 
  Failed to open initctl fifo: Permission denied
  Failed to talk to init daemon.
```
* Network Namespace 测试
```
见其他
```

### 实验1
* 将veth的一头在ns，一头在网卡上
```
增加命名空间
ip netns add ns01
ip netns list
增加一个link(veth)
ip link add link01 type veth peer name link02
启动网口
ifconfig link01 up
ifconfig link02 up
将link02网口放入命名空间ns01中
ip link set link02 netns ns01
ip netns exec ns01 ip link set link02 up
ip netns exec ns01 ifconfig
命名空间ns01增加回环ip
ip netns exec ns01 ip link set lo up
设置lin02的ip
ip netns exec ns01 ip addr add 172.168.1.10/24 dev link02
设置lin01的ip
ip add 172.168.1.11/24 dev link01
测试
ip netns exec ns01 ping 172.168.1.11
ping 172.168.1.10
查看对应的对端(peer_ifindex字段对应)
ip link list
ip netns exec ns0 ethtool -S link02
清理
ip link delete link01(link01在host上，所有可以直接删除，对端会同时清理)
ip netns delete ns01
```

### 实验2
* 将veth的的两头都在ns中
```
ip netns add ns01
ip netns add ns02

ip link add link01 type veth peer name link02

ip link set link01 netns ns01
ip link set link02 netns ns02

ip netns exec ns01 ip link set link01 up
ip netns exec ns02 ip link set link02 up

ip netns exec ns01 ip addr add 172.168.1.10/24 dev link01
ip netns exec ns02 ip addr add 172.168.1.11/24 dev link02

ip netns exec ns01 ping 172.168.1.11
ip netns exec ns02 ping 172.168.1.10

ip netns exec ns01 ip link delete link01

ip netns delete ns01
ip netns delete ns02
```

