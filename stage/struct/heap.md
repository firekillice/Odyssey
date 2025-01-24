
# heap 
* 是一种完全二叉树，所以可以使用数组表示
* heap这个词最初就是在堆排序中提出的，后来才引用到了内存分配的场景; 不同与C语言中的堆，内存分配中的堆是形容一种没有秩序的状态，相对于stack的有序而言的；除了内存分配的场景，其他计算机场景说堆都是指这种二叉树
## definition
* 给定堆中任意节点P和C，若P是C的母节点，那么P的值会小于等于（或大于等于）C的值
## operation
* swim

* sink
## 应用
* 优先队列
* 堆排序

## 优先队列
* 可以使用有序序列、无序序列、堆三种方式来实现，但是堆一般是实现的最佳实践
* 在长期的使用中，堆经常与优先队列划等号
* 标准的队列的出队入队顺序是和**时间**关联的，但是优先队列的出队顺序是按照**优先级**来的，所以他们的优先级的计算规则不同(可以看做普通队列使用时间作为优先级的计算参数)
* 使用场景：进程调度、
#### 队列
* 队列是一种最体现公平的数据结构，因为它的特点就是“先进先出(First In First Out,FIFO)” , 在具体应用中通常用链表或者数组来实现


## reference
* [优先级队列详解](https://juejin.im/post/6844903826856607757)