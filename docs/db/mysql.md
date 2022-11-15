## Mysql

### 隐藏字段
* MySQL 8.0.23 版本增加了一个新的功能：隐藏字段（Invisible Column），也称为不可见字段
### B+
* 指针使用6B，即2^48，能表示 2^(48-40)=256T的磁盘空间
* InnoDb的最小储存单元为Page，16KB，这个是一种顺序写的平衡，此处的16K并不是一个Record所独有


### 索引类型(在Mysql中就是Key)
* 覆盖索引（covering index）指一个查询语句的执行只用从索引（或者索引指向的主键）中就能够取得，不必从数据表中读取，索引即数据
* 主键即是PrimaryKey就是主要索引，如果DDL不指定主键，则没有主键
* 索引时效，对索引的任何操作都会导致所以时效，比如+，或者类型转换
* 索引中不能指向地址，因为数据可能会移动
* 回表
* 查询的时候，会根据实际情况来决定使用查找方式，比如主键索引、复合索引、全表扫描等等，有的时候使用索引还没有全表扫描快
* 稀疏索引，比如索引指向多个记录的开始位置；稠密索引就是为每个record建立一个索引
* 按照物理存储方式，可以分为聚簇索引（clusterd index,就是索引和数据在一起）和非聚簇索引（辅助索引、二级索引，指向主键索引）

### 命令
* SHOW CREATE TABLE t1;
* select * 不显示隐藏字段
* SELECT *, _rowid FROM t1;
* 查看事务: SELECT * FROM information_schema.INNODB_TRX;
* SELECT * FROM information_schema.PROCESSLIST WHERE command NOT IN ('Sleep', 'Connect');
* SHOW STATUS LIKE 'innodb_row_lock_%';
* SHOW OPEN TABLES WHERE In_use > 0;
* 查看隔离级别： SHOW VARIABLES LIKE 'transaction_isolation'
* SELECT @@autocommit 查看是否自动提交`SET autocommit = 1;`, `当开启自动提交之后，你的每一次sql执行都会立马作为一个事务提交` `如果为0，则insert操作在新的连接中无法查看`
*  SELECT * FROM t1 WHERE a>2 LOCK IN SHARE MODE;
* 手动查看事务
```
START TRANSACTION;
SELECT * FROM t1;
 
SELECT * FROM information_schema.INNODB_TRX;
```

### InnoDB
* 数据按照从小到大进行双向链表连接
* 在Page中也是按照从小到大排列,Page为16KB

### 快照 ReadView
* 
### 存储引擎
* 是否可以自动选择？

### command
* show index from t1;
* create table t1(a int primary key, b int, c int, d int, e varchar(20))engine=Innodb;
* create table t6(a int primary key, b int, c int, d int, e varchar(20))engine=myisam;
* create table t7(a int primary key, b int, c int, d int, e varchar(20))engine=archive;
* create table t8(a int primary key, b int, c int, d int, e varchar(20))engine=memory;
* show table status from Study;
* show index from t1;
* show GLOBAL status;
* create INDEX idx_t1_bcd on t1(b,c,d);


### ref
* [Mysql 官方文档](https://dev.mysql.com/doc/refman/5.7/en/innodb-introduction.html)
* [腾讯云MVCC介绍](https://cloud.tencent.com/developer/article/1890727)
