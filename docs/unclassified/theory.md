# 理论
## 理发师悖论
* 有一个理发师打广告，说：“我只给本城所有不给自己刮脸的人刮脸。”问题是：理发师能不能给他自己刮脸呢？如果他不给自己刮脸，他就属于“不给自己刮脸的人”；如果他给自己刮脸，他就属于“给自己刮脸的人”，他就不该给自己刮脸。
* 理发师悖论的提出震惊了整个数学界。数学界曾认为“一切数学成果可建立在集合论的基础之上”，而理发师悖论的出现使这一在数学界引以为傲的结论被推翻。由此，引发了第三次数学危机。
* 有点像下面的停机问题，就是计算机的计算需要机器开着，如果机器关了，它的可计算能力也就失去了

## Halt Problem
* In computability theory, the halting problem is the problem of determining, from a description of an arbitrary computer program and an input, whether the program will finish running, or continue to run forever.

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


## minimalism

