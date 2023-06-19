## Kernal 

### gossipy
#### Kernal
* The kernel is the operating system software that runs with full machine privilege, meaning full privilege over all machine resources.
* Targets
```
1.Fairly share machine resources among processes.
2.Provide safe and convenient access to machine resources by inventing abstractions for those resources (such as files, which abstract disks).
3.Ensure robustness and performance.
```
* In modern operating systems, much kernel code aims to provide protection: ensuring that no process can violate the operating system’s sharing policies. This is because processes can have bugs. A process can crash, or enter an infinite loop, or attempt to take over the machine, maliciously or accidentally. So kernels should prevent mistakes in individual processes from bringing down the system as a whole.
#### Process
* Processes are running software programs without full machine privilege. (Processes are often called unprivileged processes or user-level processes to emphasize their unprivileged status. “User level” is the opposite of “kernel”.)
* A process is a program **in execution**. 
* A process is a live instance of a program, running at a particular time, on a particular piece of hardware, dealing with a particular set of inputs.
* 奇妙的对应： Processor，处理器; **processor** executes the **process**’s instructions, one after another, as fast as possible.


### Process 
* Timer 发送中断到processor，就可以打断当前进程的运行
* Any process that runs for too long must be interrupted by a timer. Therefore, processes must not be allowed to configure the timer: if they could, they could disable the timer or set it to go off once a year.


### Understanding
* 允许很多程序在同一台机器上运行的方式有很多，比如直接在内核态运行，比如让内核模拟process的指令，验证每一条命令；最终形成的模式就是系统调用来获取系统资源，每次系统调用的时候会进行上下文的切换
* 