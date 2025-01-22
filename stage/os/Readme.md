## System V(pronounced: System Five)
* Unix System V (pronounced: "System Five") is one of the first commercial versions of the Unix operating system. It was originally developed by AT&T and first released in 1983. 

## 程序的transform
* COW: 小转变
* execve: 大转变
* 不管怎么变，其实就是指令的跳转而已

## Index
### POSIX
* Portable Operating System Interface is a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems.

### 小操作系统
* [coreos](https://github.com/kiukotsu/ucore)
* [chickadee](https://github.com/CS161/chickadee)

### Power
* 一旦断电，计算机的各种依赖电的存储立刻消失，所有未保存的内容都消失了


### 从OS的视图看计算机
* 是什么样的呢？
* 从Intel的视图看计算机是什么样子的呢



### Real Mode vs Protected Mode 
* x86架构下的两种工作模式
* 区别
  * 内存访问方式：
    * 实模式：采用分段式内存管理，使用物理地址直接访问内存。段选择子和偏移量的组合确定内存地址。
    * 保护模式：采用分段式和分页式内存管理相结合的方式。使用虚拟地址访问内存，通过分段机制和分页机制将虚拟地址转换为物理地址。
  * 内存访问权限：
    * 实模式：没有对内存的保护机制，所有的内存都可读写执行。
    * 保护模式：支持对内存的保护，通过段描述符和页表控制不同段和页面的访问权限，可以实现内存的保护和隔离。
  * 寻址能力：
    * 实模式：使用16位地址总线，最大支持64K的内存寻址。
    * 保护模式：使用32位或64位地址总线，可以寻址的内存空间更大，可以达到4GB或更大。
  * 中断和异常处理：
    * 实模式：中断处理通过中断向量表进行，没有异常处理机制。
    * 保护模式：中断和异常处理通过中断描述符表和异常描述符表进行，提供了更灵活的中断和异常处理机制。
  * 特权级别：
    * 实模式：只有实模式（Ring 0）一种特权级别，没有区分用户态和内核态。
    * 保护模式：支持多种特权级别（通常是Ring 0到Ring 3），可以实现用户态和内核态的切换。


### 内核和操作系统的区别
* 熟悉的Linux只是内核而不能称得上是操作系统，Ubuntu则可以认为是操作系统，其内核是Linux；RedHat也是操作系统，其内核同样是Linux；
* 基于同样的底盘打造出不同的车型。
* 熟悉的Windows也是操作系统，其内核是Windows NT内核。


### 抽象的力量
* 抽象是为了思维的简单，不用直面复杂的细节


### bit
* binary digit 缩写


### static discipline
* 在计算机硬件领域，"The Static Discipline"（静态规则）是一种设计原则，用于确保在多个硬件组件之间的数据传输和共享过程中的稳定性和一致性。"The Static Discipline" 的基本原理是，所有的数据传输和共享必须按照严格的顺序和规则进行，以避免冲突和数据损坏。这意味着在一个特定的时间段内，只有一个组件可以对共享资源进行读取或写入操作，其他组件必须等待。


### OS的演化
* 针对现实情形不断的迭代和变化