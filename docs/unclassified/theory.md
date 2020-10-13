# 理论
## 理发师悖论
* 有一个理发师打广告，说：“我只给本城所有不给自己刮脸的人刮脸。”问题是：理发师能不能给他自己刮脸呢？如果他不给自己刮脸，他就属于“不给自己刮脸的人”；如果他给自己刮脸，他就属于“给自己刮脸的人”，他就不该给自己刮脸。
* 理发师悖论的提出震惊了整个数学界。数学界曾认为“一切数学成果可建立在集合论的基础之上”，而理发师悖论的出现使这一在数学界引以为傲的结论被推翻。由此，引发了第三次数学危机。
* 有点像下面的停机问题，就是计算机的计算需要机器开着，如果机器关了，它的可计算能力也就失去了

## Halt Problem
* In computability theory, the halting problem is the problem of determining, from a description of an arbitrary computer program and an input, whether the program will finish running, or continue to run forever.


## 图灵完备
* 图灵试图寻找一种世界上所有计算问题的解决方案，一篮子解决世界上所有的计算问题。
* 如果一个计算机语言具有图灵完备性（Turing Completeness），那么这个语言就是图灵完备语言（Turing-complete language）。
* 如果一门编程语言、一个指令集可实现图灵机模型里面全部的功能，或者说能够满足任意数据按照一定顺序计算出结果，我们就可称其具有图灵完备性。
* 常见的编程语言都是图灵完备语言, 而SQL也是图灵完备语言
* 而JSON、HTML都不是图灵完备语言
* 图灵机的所有可能状态的数目是有限的，并且有一个特殊的状态，称为停机状态。
* 如果一个语言是图灵完备性语言，则意味着一种语言能解决的问题，在另外一种语言中也可以计算出来。证明两个计算模型{\displaystyle A}A和{\displaystyle B}B的计算能力等价的基本思想是：用{\displaystyle A}A和{\displaystyle B}B相互模拟，若{\displaystyle A}A可模拟{\displaystyle B}B且{\displaystyle B}B可模拟{\displaystyle A}A，显然他们的计算能力等价。


## object-grath model 对象图模型
* 很多的数据组织成这种模型

## 计算机科学基石
众所周知，计算机科学得以存在的基石是两个基本理论：图灵于1936年提出的图灵机理论和丘奇同年早期发表的Lambda演算理论。这两个理论奠定了所谓**通用计算（Universal Computation）**的概念基础，描绘了具有相同计算能力（图灵完备），但形式上却南辕北辙、大相径庭的两条技术路线。

## 二进制安全
* A binary-safe function is one that treats its input as a raw stream of bytes and ignores every textual aspect it may have. 
* 对于字符串，如果使用类似strlen之类的函数，就默认数据是一种字符串形式
* 二进制安全处理方式，就是不带眼镜的处理数据
* Most programming languages let the programmer decide whether to parse the contents of a file as text, or read it as binary data. 
* 例子: PHP   use fopen($filename, "rb") 替换 fopen($filename, "r")
* The term is mainly used in the PHP programming language to describe expected behaviour when passing binary data into functions whose main responsibility is text and string manipulating, and is used widely in the official PHP documentation.
* 二进制安全就是不去窥视数据的格式，保持原本的样子
* 所以二进制是对数据的一种抽象，二进制安全就是在二进制的层面上操作数据；如果按照文本解析，则格式不固定，比如换行符win、unix-like系统是不同的


## 命名 & 小名
* 文件系统中的使用
* dns中的使用

## 直接查找 & 层级查找
* 直接查找比如哈希算法的查找
* 层级查找，比如m-way search， 二叉查找树(BST)，还有磁盘中block的管理，索引管理中的BTree和B<sup>+</sup>Tree

## cow 
* 写时复制

## 不完美
* 虽然计算机是理性的科学，但是还要学着接受它的不完美，不是所有的方案都是完美的，学会tradeoff

## minimalism

## 观察计算机的视角
* 从操作系统观察
* 从cpu观察
* 从程序员观察