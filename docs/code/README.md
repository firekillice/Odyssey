### Idempotence，幂等性
* Methods can also have the property of "idempotence" in that (aside from error or expiration issues) the side-effects of N > 0 identical requests is the same as for a single request.


## struct array pipe
* 聚合数据结构意味着抽象能力的变强，对底层数据的操控能力变强，就像宗教的出现，将人的各种禁忌给集合了起来，形成了一个上层的概念
* 不同的类型是为了解决具体的问题而出现的，比如典型的cobol侧重于struct结构化的能力![image](./assets/20200914220751.png)，lisp使用大量指针来串联起来所有的数据![image](./assets/20200914220848.png), fortran的使用侧重使用数组 ![image](./assets/20200914220912.png)，磁带内存模型则使用pipe
* pipe提供的是一种单向性，对某些算法来说就足够了，比如迭代器、channel
* 不同的语言侧重使用不同的结构去解决具体的问题
* 而通用语言则尝试将所有场景都结合进来，形成通用的编程语言


## 什么是编程语言
* 将人的想法使用它所采用的的数据结构表达出来，然后交个计算机
* 不同的编程语言，提供的锅碗瓢盆是不一样的，做出来的饭是不同的，但是都可以吃，都可以入口(喂入CPU中)