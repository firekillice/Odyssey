## Mysql
### B+
* 指针使用6B，即2^48，能表示 2^(48-40)=256T的磁盘空间
* InnoDb的最小储存单元为Page，16KB，这个是一种顺序写的平衡，此处的16K并不是一个Record所独有


### 索引类型(在Mysql中就是Key)
* 覆盖索引（covering index）指一个查询语句的执行只用从索引中就能够取得，不必从数据表中读取，索引即数据
* 主键即是PrimaryKey就是主要索引，如果DDL不指定主键，则没有主键


### InnoDB
* 数据按照从小到大进行双向链表连接
* 在Page中也是按照从小到大排列,Page为16KB

### command
* show index from t1;
* create table t1(a int primary key, b int, c int, d int, e varchar(20))engine=Innodb;
* show index from t1;
* show GLOBAL status;
* create INDEX idx_t1_bcd on t1(b,c,d);


### ref
* [Mysql 官方文档](https://dev.mysql.com/doc/refman/5.7/en/innodb-introduction.html)