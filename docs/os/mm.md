# 内存管理
![mem-simple](./assets/ccompilerlinker007.png)
![kernel&process&detail](./assets/1458743340-5ddbcaa6525a5_articlex.png)

## 内核栈
* 一个用户态进程/线程在内核中都是用一个task_struct的实例描述的，这个有点类似设计模式里面的桥接模式(handle-body), 用户态看到的进程PID，线程TID都是handle, task_struct是body
* C语言书里面讲的堆、栈大部分都是用户态的概念，用户态的堆、栈对应用户进程虚拟地址空间里的一个区域，栈向下增长，堆用malloc分配，向上增长。用户空间的堆栈，在task_struct->mm->vm_area里面描述，都是属于进程虚拟地址空间的一个区域。
* 内核态的栈在tsak_struct->stack里面描述，其底部是thread_info对象，thread_info可以用来快速获取task_struct对象。所以一个进程的内核栈，也是进程私有的，只是在task_struct->stack里面获取。
* 内核态没有进程堆的概念，用kmalloc()分配内存，实际上是Linux内核统一管理的，一般用slab分配器，也就是一个内存缓存池，管理所有可以kmalloc()分配的内存。所以从原理上看，在Linux内核态，kmalloc分配的所有的内存，都是可以被所有运行在Linux内核态的task访问到的。
* code
```
struct task_struct {
 volatile long state; /* -1 unrunnable, 0 runnable, >0 stopped */
 void *stack;
 atomic_t usage;
 unsigned int flags; /* per process flags, defined below */
 unsigned int ptrace;
 int lock_depth; /* BKL lock depth */ 
 /* ...... */ 
};
```
* 每个进程被创建的时候，在生成进程描述符task_struct的同时，会生成两个栈，一个是用户栈，位于用户地址空间；一个是内核栈，位于内核空间。当进程在用户地址空间中执行的时候，使用的是用户栈，CPU堆栈指针寄存器中存的是用户栈的地址；同理，当进程在内核空间执行时，CPU堆栈指针寄存器中放的是内核栈的地址。
* 当位于用户空间的进程进行系统调用时，它会陷入内核，让内核代其执行。此时，进程用户栈的地址会被存进内核栈中，CPU堆栈指针寄存器中的内容也会变为内核栈的地址。当系统调用执行完毕，进程从内核栈找到用户栈的地址，继续在用户空间中执行，此时CPU堆栈指针寄存器就变为了用户栈的地址。


## TSS(Task State Segment)
* 进程的任务状态段信息结构。在任务从执行中被切换出时tss_struct结构保存了当前处理器的所有寄存器值。当任务又被CPU重新执行时，CPU就会利用这些值恢复到任务被切换出时的状态，并开始执行。

## 理解
* 在内核栈上可以操作一切用户态的数据的
* 一定要时刻谨记用户态还是内核态
* 不管是内核态还是用户态执行，都是同一个进程在运行
* 在内核态，堆、栈、向下增长等概念都消失不见了