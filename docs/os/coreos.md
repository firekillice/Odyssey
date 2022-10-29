## coreos
* 点火文件格式: https://coreos.github.io/butane/examples/
### 安装
```
下载ovf tool https://docs.vmware.com/en/VMware-Telco-Cloud-Operations/1.3.0/deployment-guide-130/GUID-95301A42-F6F6-4BA9-B3A0-A86A268754B6.html
sh ./VMware-ovftool-4.4.3-18663434-lin.x86_64.bundle 必须使用4.4.3版本
yum install podman
podman pull quay.io/coreos/butane:release
podman run --interactive --rm quay.io/coreos/butane:release --pretty --strict < fcos.bu > fcos.ign
```
```
--fcos.bu，注意使用ecdsa协议
passwd:
  users:
    - name: sandstone
      ssh_authorized_keys:
        - ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBFeJCK9jorBhocXaqVy+rDQnNztL+yBeP/qXqgzjNzv7gITsOs2bnmIDshXc/Wj0gqGsdflLLHb8FpiM11h0ltM= root@DESERT
      groups: [ sudo, docker ]
    - name: root
      ssh_authorized_keys:
        - ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBFeJCK9jorBhocXaqVy+rDQnNztL+yBeP/qXqgzjNzv7gITsOs2bnmIDshXc/Wj0gqGsdflLLHb8FpiM11h0ltM= root@DESERT
```
```
依赖文件`fcos.bu fedora-coreos-35.20220411.20.0-vmware.x86_64.ova  VMware-ovftool-4.4.3-18663434-lin.x86_64.bundle`
执行一下命令:

podman run --interactive --rm quay.io/coreos/butane:release --pretty --strict < fcos.bu > fcos.ign 

CONFIG_ENCODING='base64'
CONFIG_ENCODED=$(cat fcos.ign | base64 -w0 -)
VM_NAME='fcos-node04'
FCOS_OVA='fedora-coreos-35.20220411.20.0-vmware.x86_64.ova'
LIBRARY="$HOME/fcos-node04"
ovftool \
  --powerOffTarget \
  --name="${VM_NAME}" \
  --allowExtraConfig \
  --extraConfig:guestinfo.ignition.config.data.encoding="${CONFIG_ENCODING}" \
  --extraConfig:guestinfo.ignition.config.data="${CONFIG_ENCODED}" \
  "${FCOS_OVA}" "${LIBRARY}"
```
* [vmware镜像地址](https://builds.coreos.fedoraproject.org/browser)
## 扩容
* 在vmware上调节后
* 进入主机，lsblk查看
* growpart /dev/sda 4
* lsblk观察
* reboot
* `xfs_growfs: XFS_IOC_FSGROWFSDATA xfsctl failed: Read-only file system`
* unshare --mount
* mount -o remount,rw /sysroot
* xfs_growfs /sysroot

## 安装工具
* 扩容
### 使用
* 重启ssh systemctl restart sshd.service
* 使用secret登陆的时候，默认不支持RSA，使用ECDSA加密协议，所以需要使用 ssh-keygen -t ecdsa生成对应的秘钥类型
* K8要求node节点的主机名不能重，所以改名: sudo hostnamectl set-hostname fcos02
* /etc/localtime 不存在了，原来同步时间的方式不行了，coreos统一使用的UTC时间