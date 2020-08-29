### replication 的 synchronization
* redis 的主从同步和aof记录的都是操作, 而不是结果, 也就是非幂等
* Mysq=>Binlog, Mongo=>Oplog, Redis=>aof(传输的协议Steam，可以直接使用pipeline灌入)

### Failover
#### redis
```
-------------------------------------------------------------

   +-------+        +-------+
   |   A   |        |   B   |
   +-------+        +-------+

t1 insert 1 --\
      |        \
t2 insert 2 --\ \-- insert 1
      |        \
t3 insert 3 --\ \-- insert 2
      |        \
t4 insert 4     \-- insert 3
--------------------------------> A down, B is master now

t5              /-- insert 5
               /       |
t6 insert 5 --/ /-- insert 6
               /
t7 insert 6 ---

#到这里, 我们已经看到了不一致:

1,2,3,4,5,6          1,2,3,5,6
```

### Jargon
* data rebuild / data reconstruction 数据重建
