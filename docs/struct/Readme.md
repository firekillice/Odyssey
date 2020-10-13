# 数据结构
* Data structures are nothing different. They are like the bookshelves of your application where you can organize your data. Different data structures will give you different facility and benefits. To properly use the power and accessibility of the data structures you need to know the trade-offs of using one.

## B-Tree(念B树)
* 平衡多叉树，多用于文件系统和数据库的索引，为了减少磁盘的IO，该数据结构是矮胖型的结构
## B+Tree
B+Tree是B树的变种，有着比B树更高的查询性能
## B+Tree VS B-Tree
* In a B tree search keys and data stored in internal or leaf nodes. But in B+-tree data store only leaf nodes. 
* Searching any data in a B+ tree is very easy because all data are found in leaf nodes. In a B tree, data cannot be found in leaf nodes. 
* In a B tree, data may be found in leaf nodes or internal nodes. Deletion of internal nodes is very complicated. In a B+ tree, data is only found in leaf nodes. Deletion of leaf nodes is easy. 
* Insertion in B tree is more complicated than B+ tree. 
* B+ trees store redundant search key but B tree has no redundant value. 
* In a B+ tree, leaf nodes data are ordered as a sequential linked list but in B tree the leaf node cannot be stored using a linked list.

## 时间复杂度
* O(log n)，在计算机科学中，对数默认是以2为底数，但是可能在数学、电学中又不同，所以这个需要看上下文确定；揣测，这个可能是从《算法导论》中继承过来的
* log: logarithm

## skiplist
跳跃表（skiplist）是一种有序数据结构， 它通过在每个节点中维持多个指向其他节点的指针， 从而达到快速访问节点的目的。

跳跃表支持平均 O(\log N) 最坏 O(N) 复杂度的节点查找， 还可以通过顺序性操作来批量处理节点。

在大部分情况下， 跳跃表的效率可以和平衡树相媲美， 并且因为跳跃表的实现比平衡树要来得更为简单， 所以有不少程序都使用跳跃表来代替平衡树。

## 霍夫曼树 最优二叉树 
* 带权路径长度最小的树

## list和tree之间的界限
* 如同食物和药物之间的关系， list和tree之间没有明显的界限
* 各种设计都是为了适应某种应用场景
* 所以世上本没有数据结构，只是为了解决相应的问题而出现的

## 学习数据结构的心得
* **首先我们建立数据结构对应的约束条件(定义条件)，或者说是建模,然后在对应的结构上建立相应的算法**，我觉得这是打开世间问题的一把万能方法