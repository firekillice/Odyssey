### distribution
* 所有的路由都可能产生热点，热点商品，热点城市


### database
* 使用周期落地+Journal的方式来保证数据 Mongodb: checkpoint + Journal; Redis: RDB + AOF
* Redis使用Lua做为复杂操作的解释器；Mongodb使用JS作为复杂操作的解释器

### 自由vs理性
* 有线网络 vs 无线网络
* mysql vs nosql

### 大数据
* 感性对理性的胜利，经验主义的胜利。预测 统计 知识 数据  数据至上  数据就是上帝。你相信什么，什么就是你的上帝   


### 规则
* json、yaml的规则化
* 语法树的规则化

## 认识递归的力量
* 形式语言或者自然语言本身就是一种递归
* BNF也是一种递归
* 迭代也是递归
![image](./assets/800px-Droste_cacao_100gr_blikje,_foto_02.jpg)

## 离散数学
* 没有直接关联的数学对象
* 就像上下文无关语法，是孤立的


## 从0到∞
* HCL由与或非门组成一个大的世界，计算机由0、1组成一个巨大的世界；整数由0-9组合到无穷
* 从这个逻辑来看，世界上最复杂的事情则是由最简单的事情来组成的；通过一层一层的逻辑来实现复杂；大道至简的核心

## hierarchy
* 层级

## alias canonical
* DNS中
* CUI中
* 乳名，更容易称呼，但这带来多个id的问题

## 发展阶段
* 任何一种技术，任何一种架构，在当前当下都有存在的问题与不足，需要不停的演化



## 不完美
* 虽然计算机是理性的科学，但是还要学着接受它的不完美，不是所有的方案都是完美的，学会tradeoff
* 比如布隆过滤器，比如分布式的相关理论


## 观察计算机的视角
* 从操作系统观察
* 从cpu观察
* 从程序员观察

## 无限观
* 要有从0->∞的想法来看算法的问题，也就是动态规划的思维方式0->1->2->...->n

## 数据库
* 关系数学


## 仓库
* svn
* git 
* yum
* docker
* pip
* 上述这些都是用仓库的方式来管理资源包，上传、删除、分发等
* 分布式的资源管理方式，一般使用仓库的方式来实现

## 算法的理解
#### 排序
* 对某个数组进行排序，其实是在其他的大循环中进行的，是"楚门的世界"中；同理，某个大数组也可以划分为更小的数组进行排序，所以可以假想有个巨大的数组
* 算法只是一种思路，可以用多种方式进行实现
* 找到算法的某种趋近状态很重要
* 整体思路：划分划分再换分
* 写代码的时候，先确定大循环，然后一层层分析嵌套来思考


## 学习系统的理解
* 从mongodb的学习中理解，我们在学习一个陌生的事物的时候，应该先去了解底层的原理，然后逐步展开，不能东看一下西看一下

## 与真相的距离
* 之所以看不清事情，也许是你与问题的解之间隔着几个公式

## 什么是理解
* 就是能明确进行描述一个问题，理解其中的运行逻辑

### 停机问题
* 用计算机去判定一个给定的程序停不停机
* 理发师悖论
* 罗素悖论

### 计算机问题的思考方式
* 程序的可控与环境的不可控

### 拜占庭问题
* 如果在有坏逼的情况下进行通信
```
拜占庭将军问题(The Byzantine Generals Problem)提供了对分布式共识问题的一种情景化描述, 由Leslie Lamport等人在1982年首次发表. 论文同时提供了两种解决拜占庭将军问题的算法：

口信消息型解决方案(A solution with oral message);
签名消息型解决方案(A solution with signed message).
本文之后将详细讲述这两种算法. 事实上, 拜占庭将军问题是分布式系统领域最复杂的容错模型, 它描述了如何在存在恶意行为(如消息篡改或伪造)的情况下使分布式系统达成一致. 是我们理解分布式一致性协议和算法的重要基础.
```


### 版本问题
* 开源项目的版本重要性，如果版本不对，很多资讯都说错的，所以需要一直跟进


### 入口问题
* 这是另一个模型
* 如果在提供提供服务的地方进行数据分流，将流量顺利的进行引导到指定的Node/Pod