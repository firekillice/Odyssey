## 范式(Normal Form)
目前关系型数据库有六种范式：第一范式（1NF）、第二范式（2NF）、第三范式（3NF）、巴斯-科德范式（BCNF）、第四范式（4NF）和第五范式（5NF，又称完美范式）。一般来说，数据库只需要满足第三范式就行了。
### 第一范式（1NF）
* 数据表中的每一列(字段)，必须是不可拆分的最小单元，也就是确保每一列的原子性。
### 第二范式（2NF）：
* 满足1NF后要求表中的所有列，都必需依赖于主键，而不能有任何一列与主键没有关系（一个表只描述一件事情）。订单表只能描述订单相关的信息，所以所有的字段都必须与订单ID相关。产品表只能描述产品相关的信息，所以所有的字段都必须与产品ID相关。因此在同一张表中不能同时出现订单信息与产品信息。
### 第三范式（3NF）
* 满足2NF后，要求：表中的每一列都要与主键直接相关，而不是间接相关（表中的每一列只能依赖于主键）


## ACID
* In computer science, ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee validity even in the event of errors, power failures, etc. In the context of databases, a sequence of database operations that satisfies the ACID properties (and these can be perceived as a single logical operation on the data) is called a transaction.
* 原子性 - 每个事务内部所有操作要么全部完成，要么全部不完成。
* 一致性 - 任何事务都使数据库从一个有效的状态转换到另一个有效状态。
* 隔离性 - 并发执行事务的结果与顺序执行事务的结果相同。
* 持久性 - 事务提交后，对系统的影响是永久的。

### constrains

数据库中的五大约束包括：
* 主键约束（Primay Key Coustraint） 唯一性，非空性；
* 唯一约束 （Unique Counstraint）唯一性，可以空，但只能有一个；
* 默认约束 (Default Counstraint) 该数据的默认值；
* 外键约束 (Foreign Key Counstraint) 需要建立两表间的关系；
* 非空约束（Not Null Counstraint）:设置非空约束，该字段不能为空。


## SQL模型
* 多值函数(multivalued funtion) 在数学中通常被称为关系(relation)
* SQL中表示一个实体，需要表中的一行(a row in a table), 也就是关系中的一个元组(a tuple in a relation)
* SQL面向的是n-tuples集合，其中n是某个整数


## DDL DML DCL
* DML（Data Manipulation Language），即数据操纵语言，最常用的增删改查就属于DML，操作对象是数据表中的记录
* DDL（Data Definition Language），即数据定义语言，例如建数据库、建表等，都属于数据定义语言
* DCL（Data Control Language），数据控制语言，如Grant、Rollback等等，常见于数据库安全管理，多数人一般很少用


## SQL 
* struct: 一个record是一个struct
* 就是针对结构体的查询语言

## 术语
* 点查，根据Primary Key 或者唯一索引直接查询某条记录
* 范围扫描
* 全表扫描
* 过滤
* 聚合
* 投影

## 乐观锁 悲观锁
* 乐观锁是先认为自己提交的时候不会被修改，通过简单的version进行控制，只要在version在自己已经获取的version的时候才能够成功，适合于读多写少的场景， 并发量大
* 悲观锁就是无脑加锁，写多的场景


## 版本号
* 乐观锁需要一个版本号
* 事务也需要一个版本号

## MVCC (Multi-Version Concurrency Control)

## 事务隔离
* 事务、ACID、隔离级别等，这些都是数据库的概念或者说实现标准，不同的数据库有不同的实现方式
### 隔离级别
* 读未提交
* 读已提交
* 可重复度
* 串行化,事务最高的隔离级别,在该级别下，所有事务都是进行串行化顺序执行的
### 解决的问题
* 脏写（Dirty Write),如果一个事务修改了另一个未提交事务修改过的数据，那就意味着发生了脏写
* 脏读，如果一个事务读到了另一个未提交事务修改过的数据
* 幻读，如果一个事务先根据某些条件查询出一些记录，之后另一个事务又向表中插入了符合这些条件的记录，原先的事务再次按照该条件查询时，能把另一个事务插入的记录也读出来。
* 不可重复读，如果一个事务只能读到另一个已经提交的事务修改过的数据，并且其他事务每对该数据进行一次修改并提交后，该事务都能查询得到最新值
* <br>
| 隔离级别  | 脏读  | 不可重复读  | 幻读  |
|-------|-----|--------|-----|
| 读未提交  | √   | √      | √   |
| 读已提交  | ×   | √      | √   |
| 可重复读  | ×   | ×      | √   |
| 串行化   | ×   | ×      | ×   |
