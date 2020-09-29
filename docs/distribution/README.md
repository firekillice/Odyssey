### Issue
* 要想让数据有高可用性，就得写多份数据
* 写多份的问题会导致数据一致性的问题[复制是导致出现数据一致性问题的唯一原因]
* 数据一致性的问题又会引发性能问题

### 一致性模型
* Weak 弱一致性
* Eventually 最终一致性 ---- CRDT(Conflict-Free Replicated Data Type 免冲突的可复制的数据类型)
* Strong 强一致性
* 读写一致性
* 单调读
* 因果一致性------向量时钟(vector clock)
### Replication
* Master-Slave
* Master-Master(Multi-master)
### NWR模型
### 一致性算法
* 2PC
* Paxos
* Raft

### 一致性Hash
* 热点

## what's a distributed system 
* a collection of independent computers that appear to its users as one computer. 
* 所有的功能都可以被分布式
    * database， 分布式数据库（带有计算的分布式硬盘存储）
    * hdd， 使用HDFS
    * computation， mapReduce
    * messaging， kafka，（建立pipeline的处理模式）
## 分布式系统 VS 计算机的哲学存在基础
* 数据的[静]存在---存储
* 数据的[动]流通---通讯&计算

### 组件
* MongoShake，解决Replication同步的单向性问题
![image](./assets/04c049fc00f5b88d33b2dffec605078b062283c1.png)
![image](./assets/fb52a0a72855c9b16654029065b91f2398afe88e.png)
![image](./assets/f69c237e15ae855c7e2984b14ef5f097efdfb227.png)
![image](./assets/e002e8280c19ca13c9bc4999e90be8437c2fcf1a.png)
* RedisShake