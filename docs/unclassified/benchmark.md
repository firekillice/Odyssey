## Benchmark
* 内存的读取速度是SSD的4倍，
* SSD的读取速度是HDD的20倍
* SSD和HDD的顺序读取速度是随机读写的200倍
* SSD顺序读写：2GB，随机读写100MB
* HDD顺序读写： 50MB，随机读写1MB
* HDD的顺序读写性能还赶不上SSD的随机读写
* HDD的读写延迟为5ms，随机读写速率为 (1000/5) * (4 * 1024) / 1024 = 800KB，1MB左右的数值
* SSD的随机读写延迟为10us
* <br>
|    | L1 | L2 | Memory | SSD   | 内网     | HDD      |
|----|----|----|--------|-------|--------|----------|
| ns | 1  | 4  | 100    | 16000 | 500000 | 2000000  |


## 网络
* 网络的波动比较大，内网的速度远远大于外网
* 127.0.0.1, 几十微秒
* 内网: 几百微秒-1ms
* 同城： 几毫秒
* 全球：200ms
* 8.8.8.8美国硅谷，从中国40ms左右
* NAS的存在意义就是网络共享，并且内网的网络传输速度很快
### redis
* redis-benchmark: 虚拟机测试2.5w-3w rps

### ref
* [各种对比](https://colin-scott.github.io/personal_website/research/interactive_latency.html)