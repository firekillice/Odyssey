## k0s 

### 运行时
```
/usr/local/bin/k0s controller --config=/etc/k0s/k0s.yaml
/var/lib/k0s/bin/etcd --peer-client-cert-auth=true --data-dir=/var/lib/k0s/etcd --listen-peer-urls=https
/var/lib/k0s/bin/kube-apiserver --egress-selector-config-file=/var/lib/k0s/konnectivity.conf --api-audie
/usr/local/bin/k0s api --data-dir=/var/lib/k0s
/var/lib/k0s/bin/kube-scheduler --v=1 --bind-address=127.0.0.1 --leader-elect=true --profiling=false --a
/var/lib/k0s/bin/kube-controller-manager --bind-address=127.0.0.1 --profiling=false --authorization-kube
/var/lib/k0s/bin/konnectivity-server --server-port=0 --logtostderr=true --uds-name=/run/k0s/konnectivity
```

### 运行时目录
* /var/lib/k0s/pki/admin.conf
* /etc/k0s/k0s.yaml
* ps aux >> `/var/usrlocal/bin/k0s worker --token-file=/root/token.file`

### 默认配置
* k0s default-config
```
 192.168.68.104
```

### install 
* curl -sSLf https://get.k0s.sh | sh   
* k0sctl
```
wget https://github.com/k0sproject/k0sctl/releases/download/v0.9.0/k0sctl-linux-x64
chmod +x k0sctl-linux-x64
mv k0sctl-linux-x64 /usr/local/bin/k0sctl
```

### controller 安装
* 添加controller
```
mkdir -p /etc/k0s
k0s config create > /etc/k0s/k0s.yaml
k0s install controller -c /etc/k0s/k0s.yaml
k0s start
重置
k0s reset
```
* 添加worker
```
k0s token create --role=worker
k0s token create --role=worker --expiry=100h > token-file
k0s install worker --token-file /path/to/token/file
k0s start
```
* 检查
`k0s kubectl get nodes`
```
NAME     STATUS   ROLES    AGE     VERSION
fcos01   Ready    <none>   6m12s   v1.23.5+k0s
fcos02   Ready    <none>   6m8s    v1.23.5+k0s
```
`k0s status`
```
Version: v1.23.5+k0s.0
Process ID: 567
Role: controller
Workloads: false
SingleNode: false
```

### `network open /run/flannel/subnet.env: no such file or directory` 这个问题，在安装flannel后重新使用Kube-Router出现错误，
* ls /etc/cni/net.d/ >> 
  10-flannel.conflist  87-podman.conflist  
* 推测/etc/cni/net.d/是k0s的cni读取目录，如果k0s reset没有清理完全，则可能读成了flannel作为cni，其实已经改为kube-router了


### 导入docker的image
* docker pull ghcr.io/flannel-io/flannel-cni-plugin:v1.6.2-flannel1
* docker save -o flannel-cni-plugin.tar ghcr.io/flannel-io/flannel-cni-plugin:v1.6.2-flannel1
* scp到目标地址
* k0s ctr -n k8s.io images import /tmp/flannel-cni-plugin.tar