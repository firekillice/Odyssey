## Kubernets 

### cni 
##### Flannel
* 基于VXLAN
* Flannel是CoreOS团队针对Kubernetes设计的一个网络规划服务，简单来说，它的功能是让集群中的不同节点主机创建的Docker容器都具有全集群唯一的虚拟IP地址。
* ps aux >> `/opt/bin/flanneld --ip-masq --kube-subnet-mgr`
* /var/lib/k0s/bin/kube-controller-manager --allocate-node-cidrs=true --cluster-cidr=10.244.0.0/16 --kubeconfig=/var/lib/k0s/pki/admin.conf 
* kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
##### Calico 
* 基于BGP协议
* /etc/cni/net.d/10-calico.conflist
* /etc/cni/net.d/calico-kubeconfig
* 每个worker节点运行一个pod
* 能在lens中看到对应的pod
* k0s配置
```
network:
    calico:
      mode: vxlan
      vxlanPort: 4789
      vxlanVNI: 4096
      mtu: 1450
      wireguard: false
      flexVolumeDriverPath: /usr/libexec/k0s/kubelet-plugins/volume/exec/nodeagent~uds
      withWindowsNodes: false
      overlay: Always
    dualStack: {}
    kubeProxy:
      mode: iptables
    provider: calico
    podCIDR: 10.244.0.0/16
    serviceCIDR: 10.96.0.0/12
```

##### kube-router
* kube-router uses the Linux kernel's LVS/IPVS features to implement its K8s Services Proxy.
* ps aux | grep router >> `/usr/local/bin/kube-router --run-router=true --run-firewall=true --run-service-proxy=false --bgp-graceful-restart=true --metrics-port=8080`
* /etc/cni/net.d/10-kuberouter.conflist
* 每个worker节点运行一个
* k0s配置
```
network:
    calico: null
    dualStack: {}
    kubeProxy:
      mode: iptables
    kuberouter:
      autoMTU: true
      mtu: 0
      peerRouterASNs: ""
      peerRouterIPs: ""
    podCIDR: 10.244.0.0/16
    provider: kuberouter
    serviceCIDR: 10.96.0.0/12
```

### coredns
* 每个worker节点运行一个

### kube-proxy
* 每个worker节点运行一个
* ps aux >> `/usr/local/bin/kube-proxy --config=/var/lib/kube-proxy/config.conf --hostname-override=fcos01`

### konnectivity proxy
* 

### kubelet
* ps aux >> `/var/lib/k0s/bin/kubelet --root-dir=/var/lib/k0s/kubelet --config=/var/lib/k0s/kubelet-config.yaml --v=1 --containerd=/run/k0s/containerd.sock --runtime-cgroups=/system.slice/containerd.service --bootstrap-kubeconfig=/var/lib/k0s/kubelet-bootstrap.conf --kubeconfig=/var/lib/k0s/kubelet.conf --cert-dir=/var/lib/k0s/kubelet/pki --container-runtime=remote --container-runtime-endpoint=unix:///run/k0s/containerd.sock`

### envoy
* 

### kine
* Kine is not etcd
* 使用SqlLite

### flatcard 
* vmware镜像直接安装，自动登陆

### HASHICORP
* Terraform

### kube-proxy
* 每个 Node 运行一个 kube-proxy 进程。 kube-proxy 负责为 Service 实现了一种 VIP（虚拟 IP）的形式，而不是 ExternalName 的形式
* 模式: userspace(1.2之前模式模式)、iptables(1.2后默认模式)、ipvs(1.8之后支持，相对iptables效率更高)

### 网络策略
* (Network Policy)是Kubernetes 提供的一种规范，它描述里一组pod 是如何被允许相互通信的，以及和其他端点是如何通信的。
* requirement:
```
容器之间（包括同一台主机上的容器，和不同主机的容器）可以互相通信，容器和集群中所有的节点也能直接通信。
```

### L2 L3
* L2其实是指七层网络协议中的第二层数据链路层，它的传输是以mac地址为基础
* L3指网络层：是以ip地址为基础

### metalLB
* L2模式和BGP模式
* 在第 2 层模式下，服务 IP 的所有流量都将流向一个节点。从那里，将流量分散到服务的所有 Pod
* L2模式下使用ARP协议响应查询
* values.yaml
```
configInline:
  address-pools:
   - name: default
     protocol: layer2
     addresses:
     - 10.10.52.0/24
```
* install
```
kubectl create namespace metallb
helm install metallb metallb/metallb --kubeconfig=/var/lib/k0s/pki/admin.conf --namespace=metallb -f values.yaml
```

### containerd
* ps axu >> `/var/lib/k0s/bin/containerd --root=/var/lib/k0s/containerd --state=/run/k0s/containerd --address=/run/k0s/containerd.sock --log-level=info --config=/etc/k0s/containerd.toml`

### traefik
* L7 balance
* 

#### envoy

### KubeVirt
* Redhat开源的以容器方式运行虚拟机的项目，以k8s add-on方式，利用k8s CRD为增加资源类型VirtualMachineInstance（VMI）， 使用容器的image registry去创建虚拟机并提供VM生命周期管理

### memberlist 
* memberlist 是一个 Go 库，它使用基于八卦(Gossip)的协议管理集群成员资格和成员故障检测。所有分布式系统都需要成员资格，而 memberlist 是管理集群成员身份和节点故障检测的可重用解决方案。

### gossip
* Gossip 协议又称 epidemic 协议（epidemic protocol），是基于流行病传播方式的节点或者进程之间信息交换的协议，在P2P网络和分布式系统中应用广泛，它的方法论也特别简单：
```
在一个处于有界网络的集群里，如果每个节点都随机与其他节点交换特定信息，经过足够长的时间后，集群各个节点对该份信息的认知终将收敛到一致。
```
* Redis Cluster, memberlist library

### ipvs
* IPVS是LVS集群系统的核心软件，它的主要作用是：安装在Director Server上，同时在Director Server上虚拟出一个IP地址，用户必须通过这个虚拟的IP地址访问服务。这个虚拟IP一般称为LVS的VIP，即Virtual IP。访问的请求首先经过VIP到达负载调度器，然后由负载调度器从Real Server列表中选取一个服务节点响应用户的请求。
* IP Virtual Server
* kubectl edit configmap kube-proxy -n kube-system 
```
   minSyncPeriod: 0s
      scheduler: ""
      syncPeriod: 30s
    kind: KubeProxyConfiguration
    metricsBindAddress: 127.0.0.1:10249
    mode: "ipvs"              # 修改此处
    nodePortAddresses: null
```
* 三种模式: NAT, DR, TUN

### lvs
* linux virtual server
* 基于ipvs

### netfilter && iptables
* 每个进入网络系统的包（接收或发送）在经过协议栈时都会触发这些 hook，程序 可以通过注册 hook 函数的方式在一些关键路径上处理网络流量。iptables 相关的内核模 块在这些 hook 点注册了处理函数，因此可以通过配置 iptables 规则来使得网络流量符合 防火墙规则。
* iptbles提供从外围介入到数据包处理的接口

### network
* docker支持4类网络模式， host、container、none、bridge
* 在kubernetes管理模式下，网络使用bridge模式


### ingress
* 

### helm 
* helm ls --all-namespaces --kubeconfig=/var/lib/k0s/pki/admin.conf
* helm ls -A --kubeconfig=/var/lib/k0s/pki/admin.conf
* helm install metallb metallb/metallb --kubeconfig=/var/lib/k0s/pki/admin.conf --namespace=metallb -f values.yaml
* helm delete metallb --kubeconfig=/var/lib/k0s/pki/admin.conf  --namespace=metallb

### 理解
* 网桥 路由 veth iptables 共同构成了kubenetes的网络
* 同一个node同一个pod的ip <br> ![node-1pod-container-ip](./assets/k8s-container-ip.png)
* 同一个node多个pod的ip<br>![node-2pod-container-ip](./assets/k8s-pod-container-ip.png)
* 架构 ![基本结构](./assets/k8s-framework.png)
* cluster是一个内部概念
* service是与外界沟通的方式（提供给外部的内容）, 存在多种提供service的方式
* 需要用`重新组织网络`的方式去理解Kubernets的网络部分，将网络知识打碎充足，深入理解switch、router、网卡的概念; 比如所有的服务器并不保证一定可用，但是如果按照规则使用，就应该是可用的。比如使用veth来对接ns，用service来对接pod的开放端口等。
* 一点点的对外:  pod port => ClusterIP => NodePort => LoadBalance

### 术语
* OCI: Open Container Initiative，开放容器标准
* shim: "垫片"在技术上根据其定义被归类为"结构"设计模式。 计算机的起名有很多来自结构学，比如机械、木作、交通等，这就要求程序员对世界构造有基本的理解。
* CRI（Container Runtime Interface）：容器运行时接口，提供计算资源 [github-cni](https://github.com/containernetworking/cni)
* CNI（Container Network Interface）：容器网络接口，提供网络资源
* CSI（Container Storage Interface）：容器存储接口，提供存储资源
* 服务发现: 就是找到需要提供服务的机器
* provider: 供应商，谁来提供某个功能

### 控制平面
* SDN中的术语，还有数据平面，管理平面

### 生产效率
* shell自动补全
```
source <(kubectl completion bash) # 在 bash 中设置当前 shell 的自动补全，要先安装 bash-completion 包。
echo "source <(kubectl completion bash)" >> ~/.bashrc # 在您的 bash shell 中永久的添加自动补全
```

### service
* cluster ip (VIP)
* Kubernetes的Service就是一个四层负载均衡，Kubernetes对应的还有七层负载均衡Ingress
* NodePort: 原生支持, 如果使用该模式，则所有机器对应的端口都会开启
* ExternalIp: 原生支持
#### loadbalance
* Kubernetes 附带的网络负载均衡器的实现都是调用各种 IaaS 平台（GCP、AWS、Azure 等）的粘合代码。如果您未在受支持的 IaaS 平台（GCP、AWS、Azure 等）上运行，则 LoadBalancers 在创建时将无限期地保持“挂起”状态。

### label selector matchLabels matchExpressions
* 标签只不过是附加到对象的自定义键值对，用于描述和管理不同的 Kubernetes 资源
* 通过标签，Kubernetes 能够在一个资源需要关联或管理另一个资源时将资源粘合在一起
* selector是对label的选择
* matchLabels matchExpressions是selector的查询方式，可能没有
* 任何资源都可以加label
* replicaset、service通过selector查找对应的pod

### annotations
* 注释也是附加到对象的键值对，用于描述 Kubernetes 资源。与标签不同，批注不用于标识和选择资源。

### cmds
* kubectl port-forward redis-master-765d459796-258hz 7000:6379，端口转发,外部端口7000，pod的端口6379，后面就可以使用`redis-cli -p 7000`测试

### rbac 
* Role-based access control, RBAC
* 基于角色的访问控制 (Role-based access control, RBAC) 是一种安全功能，用于控制用户对通常仅限于超级用户的任务的访问。通过对进程和用户应用安全属性，RBAC 可以向多个管理员分派超级用户功能。进程权限管理通过特权实现。用户权限管理通过 RBAC 实现。
* 其他权限系统涉及模型： 从简单到复杂: DAC < MAC < RBAC < ABAC