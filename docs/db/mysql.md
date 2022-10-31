## Mysql
### B+
* 指针使用6B，即2^48，能表示 2^(48-40)=256T的磁盘空间
* InnoDb的最小储存单元为Page，16KB，这个是一种顺序写的平衡，此处的16K并不是一个Record所独有


### 索引类型
* 

### command
* show index from t1;
* create table t1(a int primary key, b int, c int, d int, e varchar(20))engine=Innodb;
* show index from t1;
* show GLOBAL status;


### ref
* [Mysql 官方文档](https://dev.mysql.com/doc/refman/5.7/en/innodb-introduction.html)