# KCP
## phase
* ARQ：自动重传请求(Automatic Repeat-reQuest,ARQ)是OSI模型中数据链路层的错误纠正协议
* RTO： Retransmission TimeOut
* FEC：Forward Error Correction
* NACK：Non-Acknowledge,通过检查序列号，找到哪个序列号是没有到的
* QoS：Quality of Service，服务质量
* DSCP差分服务代码点（Differentiated Services Code Point），IETF于1998年12月发布了Diff-Serv（Differentiated Service）的QoS分类标准。它在每个数据包IP头部的服务类别TOS标识字节中，利用已使用的6比特和未使用的2比特，通过编码值来区分优先级。
## protocol model


 协议分层        | 
---|---
Session          | 
KCP(ARQ)         |
FEC(OPTIONAL)    |
CRYPTO(OPTIONAL) |
CRYPTO(OPTIONAL) |
## Issue
* disorder
* duplicate
* loss 
## solution
* FEC encode，利用少量的冗余bit，将通信过程中的一部分的信息还原
* 

## reference
* http://www.cnblogs.com/zhangboyu/p/34c07c3577c85e9ae5c3477d7cab5f52.html
* http://www.mediapro.cc/rtp%E6%8A%97%E4%B8%A2%E5%8C%85%E4%BC%A0%E8%BE%93%E6%96%B9%E6%A1%88/
* [ FEC(向前纠错)以及网络情况介绍](http://blog.csdn.net/yuanchunsi/article/details/70244569)
 * https://baike.baidu.com/item/%E5%89%8D%E5%90%91%E7%BA%A0%E9%94%99%E7%BC%96%E7%A0%81%E6%8A%80%E6%9C%AF/4911791
 * http://blog.csdn.net/u013566722/article/details/48374219
## extend
* RTP： RTP全名是Real-time Transport Protocol（实时传输协议）。RTP用来为IP网上的语音、图像、传真等多种需要实时传输的多媒体数据提供端到端的实时传输服务。RTP为Internet上端到端的实时传输提供时间信息和流同步，但并不保证服务质量，服务质量由RTCP来提供。http://blog.csdn.net/bripengandre/article/details/2238818