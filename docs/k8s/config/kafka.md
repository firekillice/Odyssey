# 添加 Helm 仓库

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
```

## 检查镜像列表

```bash
helm template kafka bitnami/kafka \
    --namespace yakyu \
    --atomic \
    --create-namespace \
    --version 13.0.4 \
    --set externalAccess.enabled=true \
    --set externalAccess.autoDiscovery.enabled=true \
    --set rbac.create=true \
    --set volumePermissions.enabled=true \
    > kafka.yaml
cat kafka.yaml \
    | grep image: \
    | sed s/[[:space:]]//g \
    | sed "s|image:||g" \
    | sed 's|"||g' \
    | sed 's|docker.io/||g' \
    | sort \
    | uniq > kafka-images.txt
cat kafka-images.txt
```

## 生成模板

```bash
# install 安装
# upgrade 升级
helm template kafka bitnami/kafka \
    --namespace yakyu \
    --atomic \
    --create-namespace \
    --version 13.0.4 \
    --set global.imageRegistry="capnexus-registry.capstonedev.cn" \
    --set global.storageClass="local-path" \
    --set deleteTopicEnable=true \
    --set autoCreateTopicsEnable=true \
    --set numIoThreads=2 \
    --set numNetworkThreads=2 \
    --set extraVolumes[0].name="etclocaltime" \
    --set extraVolumes[0].hostPath.path="/etc/localtime" \
    --set extraVolumeMounts[0].name="etclocaltime" \
    --set extraVolumeMounts[0].mountPath="/etc/localtime" \
    --set extraVolumeMounts[0].readOnly=true \
    --set resources.limits.cpu="2000m" \
    --set resources.limits.memory="2Gi" \
    --set resources.requests.cpu="500m" \
    --set resources.requests.memory="512Mi" \
    --set externalAccess.enabled=true \
    --set externalAccess.autoDiscovery.enabled=true \
    --set rbac.create=true \
    --set volumePermissions.enabled=true \
    --set zookeeper.volumePermissions.enabled=true \
    --set zookeeper.extraVolumes[0].name="etclocaltime" \
    --set zookeeper.extraVolumes[0].hostPath.path="/etc/localtime" \
    --set zookeeper.extraVolumeMounts[0].name="etclocaltime" \
    --set zookeeper.extraVolumeMounts[0].mountPath="/etc/localtime" \
    --set zookeeper.extraVolumeMounts[0].readOnly=true \
    --set zookeeper.resources.limits.cpu="2000m" \
    --set zookeeper.resources.limits.memory="1Gi" \
    --set zookeeper.resources.requests.cpu="500m" \
    --set zookeeper.resources.requests.memory="512Mi" \
    > kafka.yaml
```
