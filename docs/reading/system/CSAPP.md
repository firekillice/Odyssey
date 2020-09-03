## 深入理解计算机系统
### 前言
* 硬件结构 ![image](./assets/20200902155349.png)
* 总线的长度，即WORD的宽度，这个相当于是一个计算机内部的一个交通标准，4个字节，8个字节，相当于是四车道还是八车道
* 主印刷电路板简称主板
* IO设备都是通过控制器或者适配器与IO总线相连，相当于村庄与公路相连一样
* 寄存器文件就是寄存器堆CPU中多个寄存器组成的阵列
* ALU 计算逻辑器的计算过程：![image](./assets/20200902183405.png) ![image](./assets/20200902184744.png) 
* 简单处理过程：![image](./assets/20200902184844.png)
* DMA：不使用中断直接拷贝数据;在实现DMA传输时，是由DMA控制器直接掌管总线，因此，存在着一个总线控制权转移问题；相当于DMA临时获取了交通使用权。
* 体系架构设计的一个主要目标就是将数据复制工作加速，由于数据的可复制性，所有让缓存成为一种可能，而不像现实中的高速路设置。
* 存储体系 ![image](./assets/20200902201219.png)，主要思想就是上一层是下一个层的高速缓存，比如内存是硬盘的高速缓存，L1是L2的高速缓存，L3是主存的高速缓存。
* 操作系统作为硬件和程序（人类意志）的中间层，是作为使用计算资源而进行处理的中间层，本质上是为了调度各种硬件资源，比如进程是为了控制CPU或者是对CPU的抽象，文件是对IO设备的抽象，虚拟存储器是对磁盘IO设备和主存的抽象。
* 文件就是字节序列而已。每个IO设备，包括磁盘、键盘、显示器、网络等都可以抽象为文件。就是所有的输出与输入都可以抽象为文件。
* 虚拟存储器的作用：(1)作为磁盘的高速缓存 (2) 将内容存储到磁盘上
* 超线程： 可以让一个CPU同时执行两个控制流，因为ALU是一个，但是寄存器文件和PC是多个，可以在一个tick中决定执行哪个控制流。(超线程的概念打破了一个CPU同时只能执行一个线程的认知)，其实是一种快速的线程切换
* L3被加入到CPU Die中，它在逻辑上是共享模式。而L2则被每个Core单独占据。这时L2也常被指做MLC（Middle Level Cache），而L3也被叫做LLC（Last Level Cache）![image](./assets/20200903102008.png)
* 并发技术：多进程、多线程、超线程
* 并行技术： 多核，指令级并行(同时处理多条指令)，单指令多数据并行(SIMD, single instruction multi data)
### 信息的表示与处理
* 通过'位'的组合，加上合适的解释，就能表示有限集合的元素
* 最小寻址单元为byte




### 边走变想
* 除了CPU，其他都是IO
* 漫游模式写书
* 计算加速技术： 多机器、多核、多进程、多线程、超线程、指令并行、单指令多数据并行；计算机发展的一个重要方向，怎样更快。
* 抽象的重要性，进程、文件、虚拟存储器，抽象的重要意义就是只要根据API，那么使用者无需担心结果的稳定性。![image](./assets/20200903103439.png)‘
* 虚拟机是对整个计算机资源的抽象
* 数据会溢出，是因为我们忽视了计算机只能表示有限集合
* 最小的计算单元是bit，最小的寻址单元为byte，最小的传输单元为word

### 引用
* GNU
```
The recursive acronym of GNU "GNU's Not Unix!" was chosen because, while GNU's design is Unix-like, it differs from it by being free software.
The original Unix was closed-source, so all of the GNU code has been entirely rewritten and does not contain any of the original Unix code.
```
* GCC: GNU compiler collection， GNU编译套装