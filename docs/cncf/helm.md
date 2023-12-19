## helm

### 安装
```
#从官网下载最新版本的二进制安装包到本地：https://github.com/kubernetes/helm/releases
tar -zxvf helm-2.9.0.tar.gz # 解压压缩包
# 把 helm 指令放到bin目录下
mv helm-2.9.0/helm /usr/local/bin/helm
helm help # 验证
```

### 问题
* Error: INSTALLATION FAILED: Kubernetes cluster unreachable: Get "http://localhost:8080/version?timeout=32s": dial tcp [::1]:8080: connect: connection refused
```
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```

