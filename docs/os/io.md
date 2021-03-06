# IO 
## 网络IO
#### blocking & nonblocking
* 阻塞指的是进程被挂起
* 阻塞指的是取数据进程本身

#### Synchronous & Asynchronous 
* 同步、异步指的是两边的信息的传递方式
* 所有阻塞或者非阻塞都是同步的方式，因为都是等待新的返回，只是方式不同，一个是睡着等，一个是"动"着等
* 同步异步指的是取数据与提供数据两者的关系

#### 多路复用
* 使用一种方式来处理多个socket
* epoll高效的原因： 红黑树组织所有监控的fd、链表处理事件、用户和内核的数据共享（存在疑问？mmap）

#### LT(Level Trigger) & ET (Edge Trigger)
* LT: 有数据是高电平(可以想象为一个水桶)
* ET: 有数据到来是高电平
* 高低电平的概念来自于时钟周期的触发，时钟从0->1的时候激活一次机器周期
* 可写事件：比如写缓冲已经满的时候

#### 发展
* 单个io的阻塞问题
* select 有限个，使用数组
* poll使用链表，个数无上限
* epool即event poll，基于事件的方式，红黑树组织数据
* 核心是：需要一种机制来高效的管理大量的socket