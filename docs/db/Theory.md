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