## LSM(The `L`og-`S`tructured `M`erge-Tree)
* 预览<br> ![overview](./assets/lsm/ueqj0v1mqu.jpeg)
### 特征
#### SSTable(Sorted String Table)
`SSTable是一种拥有持久化，有序且不可变的的键值存储结构，它的key和value都是任意的字节数组，并且了提供了按指定key查找和指定范围的key区间迭代遍历的功能。SSTable内部包含了一系列可配置大小的Block块，典型的大小是64KB，关于这些Block块的index存储在SSTable的尾部，用于帮助快速查找特定的Block。当一个SSTable被打开的时候，index会被加载到内存，然后根据key在内存index里面进行一个二分查找，查到该key对应的磁盘的offset之后，然后去磁盘把响应的块数据读取出来。当然如果内存足够大的话，可以直接把SSTable直接通过MMap的技术映射到内存中，从而提供更快的查找。 `

### 理解
* 内存中为有序树，磁盘是有序数据
* 磁盘中分层保存，越是上层的数据越`热`,越靠下数据量越大
* 树的节点保存的是操作，也就是名字中的`Log`
* 使用归并排序，也就是名字中的Merge
* Log 叶子节点中存储的是对数据的操作记录
* Structed 指将日志进行结构化的组织，而SQL中的S指的是数据的机构化组织
* Merge 指合并的过程(Compaction)
* LSM只是一种实现思路或者论文，而不同的产品有不同的实现方式（一个是标准一个是实现）
* `LSM Tree 将随机写转化为顺序写，而作为代价带来了大量的重复写入`
### 实现
* LevelDB
* RocksDB
* HBase
* Cassandra
### REF
* [LSM介绍](https://zhuanlan.zhihu.com/p/415799237)