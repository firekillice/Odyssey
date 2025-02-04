尝试去梳理一个字节从硬盘传输到寄存器的过程

传输速度对比，使用飞机与蜗牛


合理的利用局部性

数据按照批次进行传输，内存和外部存储之间按照Block为单位进行传输，一般为4KB，内存和CPU之间按照位长进行传输，64位机器上为64bit



CPU缓存的使用方式
查看目录
/sys/devices/system/cpu/cpu[0-N]/cache/index[0-3]/
coherency_line_size
size
level
type
shared_cpu_list
number_of_sets



https://colin-scott.github.io/personal_website/research/interactive_latency.html