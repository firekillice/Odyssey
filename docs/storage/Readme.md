# 存储
## 分类
* 磁带
* Unix-style 层级文件系统(Unix-style hierachical filesystems)
* 数据库

## 观点
* 我们从使用计算机就接触文件系统，先入为主的文件系统成为了一种司空见惯，在文件系统的基础上去学习数据库，其实数据库和文件系统都是存储文件的形式


## object-graph model 对象图模型

## NAS(Network Attached Storage)
* 一种设备

## S3(Simple Storage Service) 
* AWS的存储服务
* 对象存储


## ceph

* 分布式存储
* feature
```
  Object：有原生的API，而且也兼容Swift和S3的API。
  Block：支持精简配置、快照、克隆。
  File：Posix接口，支持快照。
```


## RAID(Redundant Arrays of Independent Disks)
* 独立磁盘阵列


## queue depth 
* The number of simultaneous requests on a drive's request queue.
* 其实就是磁盘的并发