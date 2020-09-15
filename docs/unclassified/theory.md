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