(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{357:function(t,a,r){t.exports=r.p+"assets/img/20201029111307.796326c5.png"},612:function(t,a,r){"use strict";r.r(a);var s=r(26),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[t._v("#")]),t._v(" sort")]),t._v(" "),s("h2",{attrs:{id:"concept"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concept"}},[t._v("#")]),t._v(" concept")]),t._v(" "),s("h4",{attrs:{id:"内排序-vs-外排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内排序-vs-外排序"}},[t._v("#")]),t._v(" 内排序 vs 外排序")]),t._v(" "),s("ul",[s("li",[t._v("排序算法的主体为内存，所以使用硬盘的排序为外部排序")])]),t._v(" "),s("h4",{attrs:{id:"时间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),s("ul",[s("li",[t._v("在计算机科学中，算法的时间复杂度（Time complexity）是一个函数，它定性描述该算法的运行时间")]),t._v(" "),s("li",[t._v("通常使用算法的最坏情况复杂度，记为 T(n) ，定义为任何大小的输入 n 所需的最大运行时间")]),t._v(" "),s("li",[t._v("常数阶O(1), 线性阶O(n),对数阶O(logN),线性对数阶O(nlogN),平方阶O(n²),立方阶O(n³)、K次方阶O(n^k),")])]),t._v(" "),s("h4",{attrs:{id:"空间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[t._v("#")]),t._v(" 空间复杂度")]),t._v(" "),s("ul",[s("li",[t._v("空间复杂度是对一个算法在运行过程中**临时占用存储空间(主要包括动态分配的空间，以及递归栈所需的空间等，程序本身占用的空间和排序数据占用的数据空间不计)**大小的一个量度，同样反映的是一个趋势，我们用 S(n) 来定义")]),t._v(" "),s("li",[t._v("空间复杂度 O(1)：如果没有申请的空间和递归调用")]),t._v(" "),s("li",[t._v("空间复杂度 O(n)")])]),t._v(" "),s("h4",{attrs:{id:"稳定排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#稳定排序"}},[t._v("#")]),t._v(" 稳定排序")]),t._v(" "),s("ul",[s("li",[t._v("排序前后两个相等的数相对位置不变，则算法稳定")])]),t._v(" "),s("h4",{attrs:{id:"原地排序-vs-非原地排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原地排序-vs-非原地排序"}},[t._v("#")]),t._v(" 原地排序 vs 非原地排序")]),t._v(" "),s("ul",[s("li",[t._v("原地排序就是指在排序过程中不申请多余的存储空间，只利用原来存储待排数据的存储空间进行比较和交换的数据排序。")]),t._v(" "),s("li",[t._v("非原地排序需要利用额外的数组来辅助排序")])]),t._v(" "),s("h2",{attrs:{id:"order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[t._v("#")]),t._v(" order")]),t._v(" "),s("ul",[s("li",[t._v("numerical order")]),t._v(" "),s("li",[t._v("lexicographical order")])]),t._v(" "),s("h2",{attrs:{id:"种类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#种类"}},[t._v("#")]),t._v(" 种类")]),t._v(" "),s("ul",[s("li",[t._v("冒泡： 最简单直观的一种")]),t._v(" "),s("li",[t._v("选择： 一种不可见的冒泡")]),t._v(" "),s("li",[t._v("插入：将冒泡反向过程的排序(需要在有序的部分寻找插入的位置)，与快速排序相同之处是"),s("strong",[t._v("随机找了一个数字")])])]),t._v(" "),s("h4",{attrs:{id:"希尔排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#希尔排序"}},[t._v("#")]),t._v(" 希尔排序")]),t._v(" "),s("ul",[s("li",[t._v("希尔（Donald Shell）于1959年提出的一种排序算法。希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序，同时该算法是冲破O(n"),s("sup",[t._v("2")]),t._v("）[二次时间界]的第一批算法之一。")]),t._v(" "),s("li",[t._v("希尔排序的增量序列的选择与证明是个数学难题，gap=length/2, 这个增量序列是比较常用的，也是希尔建议的增量，称为希尔增量，这种增量选择我们可以用一个序列来表示，{n/2,(n/2)/2...1}，称为增量序列")]),t._v(" "),s("li",[t._v("用逐步逼近的方式排序，类似搜索的思路；使用gap逐渐变小的方式让数组中较大的数值集中在后部，是一种渐进式的排序；而插入、选择、冒泡都可以明确每次的排序结果")]),t._v(" "),s("li",[t._v("使用gap将数组切分为N部分，部分内部使用插入排序；最后使用gap=1的实现最后一步的有序")]),t._v(" "),s("li",[t._v("最优的区间计算方法是没有答案的，这是一个长期未解决的问题，不过差不多都会取在二分之一到三分之一附近")])]),t._v(" "),s("h4",{attrs:{id:"快速排序-它为什么这么拽-能叫快速排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速排序-它为什么这么拽-能叫快速排序"}},[t._v("#")]),t._v(" 快速排序(它为什么这么拽，能叫快速排序)")]),t._v(" "),s("ul",[s("li",[t._v("快速排序通常写成一个包含 3 个形参的递归函数，这 3 个形参可以定义要排序的数组的一部分，它们分别是，一个包含项目列表的数组 arr，以及两个下标 start 和 end，表示要排序的 arr 数组段的开始和结束。(表示是对数组的某个区段进行排序)")]),t._v(" "),s("li",[t._v("例如stl中的sort就是优化的快排")]),t._v(" "),s("li",[t._v("最佳实践方案，因为平均性能相当好")]),t._v(" "),s("li",[t._v("遍历方法： 单路(算法导论)、双路(谭浩强版)")]),t._v(" "),s("li",[t._v("数据移动方法：填坑法、交换法")]),t._v(" "),s("li",[t._v("中间值位置: 头部选择，中部选择，尾部选择")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://htmlpreview.github.io/?https://github.com/angry-sworm/tec-sharing/blob/featrue_sort/docs/sort/animation/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("粗糙的演示"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"堆排序-heap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆排序-heap"}},[t._v("#")]),t._v(" 堆排序(HEAP)"),s("br")]),t._v(" "),s("ul",[s("li",[t._v("引入了另一种算法设计技术： 领用某种数据结构来管理算法执行中的信息")]),t._v(" "),s("li",[t._v("核心算法"),s("br"),s("img",{attrs:{src:r(357),alt:"核心算法"}})])]),t._v(" "),s("h4",{attrs:{id:"计数排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计数排序"}},[t._v("#")]),t._v(" 计数排序")]),t._v(" "),s("ul",[s("li",[t._v("计数排序只适用于正整数并且取值范围相差不大的数组排序使用")])]),t._v(" "),s("h4",{attrs:{id:"桶排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#桶排序"}},[t._v("#")]),t._v(" 桶排序")]),t._v(" "),s("ul",[s("li",[t._v("桶的选择很重要")])]),t._v(" "),s("h4",{attrs:{id:"基数排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基数排序"}},[t._v("#")]),t._v(" 基数排序")]),t._v(" "),s("ul",[s("li",[t._v("证明")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 它们第t位相同，那么此时如果我们保持它们位置的稳定性，那么它们最后仍然有序\n2. 它们第t位不同，按照第t位排序之后就有序了\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("一种基于权重的比较方式")])]),t._v(" "),s("h4",{attrs:{id:"理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解"}},[t._v("#")]),t._v(" 理解")]),t._v(" "),s("ul",[s("li",[t._v("总体是：由一种无序态向有序态转化， 插入排序就是查找有序部分，冒泡、选择则是查找无序部分")]),t._v(" "),s("li",[t._v("简单排序的缺点就在于：多了很多没有必要的比较，希尔排序、归并排序、快速排序等都是为了减少这些不必要的比较，所以采用局部有序的方式来进行；因为局部有序之后，只需要one-way合并就可以了，复杂度就是O(n)了")]),t._v(" "),s("li",[t._v("在进行分治的时候，使用的区间都是闭区间；切分的时候，不管是奇偶，其实只要能被分为两部分就可以")]),t._v(" "),s("li",[t._v("数组比较以某段数据(整体或者局部)作为处理对象，树比较以某个叉树(整体或者局部)做为处理对象")]),t._v(" "),s("li",[t._v("计数、基数、桶排序都是类似的排序方法，是基于外部参照物的排序方法(即外部比较)；而比较排序则是基于内部比较的方法")]),t._v(" "),s("li",[t._v("大体分为三类："),s("strong",[t._v("(1)简单的：冒泡、选择、插入 (2)带有分治的: 希尔、归并、快速 (3)不使用内部比较的: 基数、计数、桶")])])]),t._v(" "),s("h2",{attrs:{id:"引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/6844903863288332302#heading-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("成平动画集锦"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.webhek.com/post/comparison-sort.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("演示动画合集"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/57088609",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇打通"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=v.exports}}]);