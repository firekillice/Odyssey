## debian 

###  system 初始化
* 使用ip命令
```
ip link show                     # 显示网络接口信息
ip link set eth0 up             # 开启网卡
ip link set eth0 down            # 关闭网卡
ip link set eth0 promisc on      # 开启网卡的混合模式
ip link set eth0 promisc offi    # 关闭网卡的混个模式
ip link set eth0 txqueuelen 1200 # 设置网卡队列长度
ip link set eth0 mtu 1400        # 设置网卡最大传输单元
ip addr show     # 显示网卡IP信息
ip addr add 192.168.0.1/24 dev eth0 # 设置eth0网卡IP地址192.168.0.1
ip addr del 192.168.0.1/24 dev eth0 # 删除eth0网卡IP地址
```
* 修改 /etc/network/interfaces
```
auto ens33
iface ens33 inet static
address 10.10.50.118
netmask 255.255.255.0
gateway 10.10.50.1
```
* 修改/增加 /etc/resolv.conf
```
nameserver 4.4.4.4
nameserver 8.8.8.8
```
*  增加source list
```
deb http://deb.debian.org/debian bullseye main
deb-src http://deb.debian.org/debian bullseye main

deb http://mirrors.cloud.tencent.com/debian/ buster main non-free contrib
deb http://mirrors.cloud.tencent.com/debian-security buster/updates main
deb http://mirrors.cloud.tencent.com/debian/ buster-updates main non-free contrib
deb http://mirrors.cloud.tencent.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.cloud.tencent.com/debian-security buster/updates main
deb-src http://mirrors.cloud.tencent.com/debian/ buster main non-free contrib
deb-src http://mirrors.cloud.tencent.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.cloud.tencent.com/debian/ buster-backports main non-free contrib
```
* apt update
* apt install vim
* apt install net-tools
* apt install ssh
* /etc/ssh/sshd_config 添加`PermitRootLogin yes`允许root登陆



## 使用
* apt install sudo 安装sudo
* aptitude install 对于版本冲突的协商命令