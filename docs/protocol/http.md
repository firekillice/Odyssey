# HTTP
## 释义
* 超文本传输协议，是互联网上重要的一个协议，由欧洲核子研究委员会CERN的英国工程师 Tim Berners-Lee 发明的（图领奖的获得者），同时，他也是WWW的发明人，最初的主要是用于传递通过HTML封装过的数据。

## www vs internet vs dns
* 万维网 vs 互联网
* 万维网是互联网的一种，是一个由许多互相链接的超文本组成的系统，通过互联网访问。
* dns和http、www没有关系，dns可以用作任何一种域名和ip的映射,
* www 使用http协议和dns来实现功能

## dns
* 是形式语言在互联网上层的体现你要弄那个原理啊？
* 使用分布式数据库存储信息，就是互联网层级的缓存系统
* 使用UDP协议你要弄那个原理啊？
* A address ipv4地址, CNAME canonical name (别名)
* AAAA ipv6地址
* MX记录，邮箱地址
* ns, Name Server 记录是域名服务器记录，用来指定该域名由哪个DNS服务器来进行解析。
* ping www.baidu.com 这个是测试baidu.com的www服务的地址; 而ping http://www.baidu.com 则无效，因为不是一个主机地址
* ![image](./assets/dnsresolution.png)
*  查询的时候需要查根域名服务器，然后再查某些机器，一步步找到能够解析域名的机器，是迭代式查找的；比如在P2P网络中定位某台主机一样，需要一步一步缩小，但是dns不能使用dht代价太高
* dig(Domain Information Groper) 命令格式

| 对应的域名            | TTL            | class             | type               | 域名对应域名对应的权威域名解析服务器 |
|------------------|----------------|-------------------|--------------------|--------------------|
| baidu\.com\.     | 52340          | IN                | NS                 | dns\.baidu\.com\.  |
| QUESTION SECTION | ANSWER SECTION | AUTHORITY SECTION | ADDITIONAL SECTION |                    |
| 问题部门             | 答案部分           | 权威域名部分    | 额外记录部分     |                    |
|                  |                |                   |                    |                    |
* ![image](./assets/20200918191438.png)
* class 要查询信息的类别，IN代表类别为IP协议，即Internet。
* type 要查询的记录类型，A记录，代表要查询ipv4地址。AAAA记录，代表要查询ipv6地址。
* AUTHORITY SECTION: 哪些服务器负责管理tungee.com的DNS记录
* ADDITIONAL SECTION: AUTHORITY SECTION对应的ip地址
* 是否启用edns
```
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags: do; udp: 4096
```
* dig 命令使用形式
```
> dig -t a www.weibo.com +noall +answer
> dig -t ns weibo.com     dig ns cmsky.com
> dig -t a www.baidu.com 
> dig cmsky.com +short
> dig +short @8.8.8.8 cmsky.com
> dig jpuyy.com +trace
```

### 几种类型的dns
* ISP的BIND托管的DNS
* Google 免费域名解析服务，将dns的服务器从isp手中接管过来，**Google Public DNS 的服务器并不在中国境内**
```
IPv4 地址
8.8.8.8 (google-public-dns-a.google.com)
8.8.4.4 (google-public-dns-b.google.com)
IPv6 地址 [1]
2001:4860:4860::8888
2001:4860:4860::8844
DNS 地址
dns.google
```
* 腾讯的httpDns，只不过httpDns是私有的，不对外公开
![image](./assets/plmq0zuo5y.png)
* 百度提供的180.76.76.76、阿里提供的223.5.5.5和223.6.6.6
* 三大运营商通用的114.114.114.114, 由南京信风牵头、历时一年多联合多个电信运营商采用 BGP Global AnyCast 技术多点部署的专业 DNS 平台，同时提供公众 DNS 解析服务及权威 DNS 解析备份服务，114DNS 将为中国的互联网及电子商务提供可靠的基础安全保障。[114dns](http://www.114dns.com/about.html)
### 智能dns
* LOCALDNS的出口IP，来判断访问者来源；如果dns服务器启用了edns-client-subnet,Google的dns扩展协议,则以IP来判断访问者的地理位置
* 即两种情况: (1)访问者自身的ip (2)LocalDns的出口IP
* 可见localDns会有大量的缓存信息，会有下面的问题:
```
(1) 保证用户访问流量在本网内消化：国内的各互联网接入运营商的带宽资源、网间结算费用、IDC机房分布、网内ICP资源分布等存在较大差异。为了保证网内用户的访问质量，同时减少跨网结算，运营商在网内搭建了内容缓存服务器，通过把域名强行指向内容缓存服务器的IP地址，就实现了把本地本网流量完全留在了本地的目的。

(2) 推送广告：有部分LocalDNS会把部分域名解析结果的所指向的内容缓存，并替换成第三方广告联盟的广告。

(3) 仅对80端口的http服务做了缓存，如果域名是通过https协议或其它端口提供服务的，用户访问就会出现失败。比如支付服务、游戏通过指定端口连接connect server服务等。

(4) 缓存服务器的运维水平参差不齐，时有出现缓存服务器故障导致用户访问异常的问题。

(5) 运营商的LocalDNS还存在解析转发的现象。解析转发是指运营商自身不进行域名递归解析，而是把域名解析请求转发到其它运营商的递归DNS上的行为。

(6) LocalDNS递归出口NAT指的是运营商的LocalDNS按照标准的DNS协议进行递归，但是因为在网络上存在多出口且配置了目标路由NAT，结果导致LocalDNS最终进行递归解析的时候的出口IP就有概率不为本网的IP地址。
```
* 因为localDns有这么多的问题，各大互联网巨头纷纷推出自己的dns服务，跳过isp提供的支持

### 公共dns
* 公共DNS的部署采取的是任播（Anycast）技术，确切的说是BGP 任播技术，多个主机使用同一个IP地址（该地址即这一组主机的共享单播地址）的一种技术，当发送方发送报文给这个共享单播地址时，报文会根据路由协议路由到这一组主机中离发送方最近的一台。
* 比如114.114.114.114是公共DNS，如果一个移动的用户使用这个DNS，智能DNS是如何分辨出这个用户是移动的而不是电信的呢？就如上面所说的，任播的IP是不能主动发起请求的，公共DNS的服务器为了能够主动发起请求，他们本身还必须配置另一个单播IP，主动发起的请求都使用这个IP。这样子的话，智能DNS就能够分辨运营商了。

### BIND服务
* 选择使用的域名服务器时候采用SRTT策略
* ![image](./assets/43b6ca9d0a9315cc68b287ea069440fe336d260c.png)
![image](./assets/2831341412-5f452e455416b.png)
### 域名劫持
* DNS劫持（DNS Hijacking）：又被称为域名劫持，等于DNS重定向（DNS direaction）
* DNS劫持现象：你输入一个google.com网址，出来的是百度的页面
* HTTP劫持现象：访问着github的页面，右下角出现了一个格格不入的广告弹窗
* 主要的攻击方式: 修改本地dns，路由器dns修改，攻击dns服务器
### Local DNS
* Local DNS 也是和我们日常上网接触最多的DNS包括你的服务提供商（ISP）分配给你的DNS（一般为两个），或者接下来讲到的公共DNS。又因为填写在你的本地电脑上，所以也称为Local DNS
* 这样看起来像是，离用户最近的dns服务器，可以使用SRTT策略优化服务器选择
* DNS 信息有一个TTL消息， local dns 可以cache dns reply ，过期时间就是这个ttl时间。假如dns cache信息过期，local dns 向授权dns服务器重新请求。
### 自制dns服务器
* 只要安装DNS服务软件，定期从IANA网站下载那个2.2MB的根文件，就可以做根DNS服务器了。[根服务器地址信息](https://www.iana.org/domains/root/files)

## URI & URN & URL
* A Uniform Resource Identifier (URI) is a string of characters that unambiguously identifies a particular resource.
* The most common form of URI is the Uniform Resource Locator (URL), frequently referred to informally as a web address. 
* 所以URL是一种URI
* A Uniform Resource Name (URN) is a URI that identifies a resource by name in a particular namespace. A URN may be used to talk about a resource without implying its location or how to access it. For example, in the International Standard Book Number (ISBN) system, ISBN 0-486-27557-4 identifies a specific edition of Shakespeare's play Romeo and Juliet. The URN for that edition would be urn:isbn:0-486-27557-4. However, it gives no information as to where to find a copy of that book. (URN是一个唯一的名字，但是没有指明如何获取一个copy)
* A URN may be compared to a person's name, while a URL may be compared to their street address. In other words, a URN identifies an item and a URL provides a method for finding it.
* URI syntax: URI = scheme:[//authority]path[?query][#fragment], 注意//在可选里面
![image](./assets/1068px-URI_syntax_diagram.svg.png)
* A Uniform Resource Locator (URL), colloquially termed a web address,[1] is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it. (所以URL特指一个网络地址)

## inventor words
```
“我只要把超文本系统和传输控制协议、域名系统结合在一起，然后─哒哒！─就有了万维网[23]...创建万维网真是一份叫人绝望的苦差事，因为我在CERN工作的时候，没有它的情况是非常糟糕的。万维网需要的技术，例如超文本系统、互联网和多种字体的文本对象等等，大部分都已经设计出来了。我需要做的只是把它们结合在一起。这是一个广义化步骤，要进入更高的抽象层次，把现有的文件系统想象为一个更大的虚拟文件系统的一部分。

“麦克·森德尔买了一台NeXT cube进行评估，并交给蒂姆。蒂姆在几个月的时间里实践了构想，感谢NeXTStep的软件开发系统的良好质量。这个原型提供所见即所得的浏览或编写！现时用于“网上冲浪”的浏览器只是一个被动的窗口，剥夺了用户的贡献。在参与一些会议的时候，蒂姆和我尝试为系统找到一个吸引人的名字。我确定这个名字不应该再取自希腊神话...蒂姆提出了“万维网”。我非常喜欢这个名字，除了很难用法语发音......”
```

## version
* ![image](./assets/20200917211421.png)
* ![image](./assets/20200917211536.png)
* h3-Q050 表明知乎支持了HTTP3，也就是支持了QUIC
* h2表示支持了http2
* 普通的网站支持了1.1
* Http3 = http2 + quic，即HTTP over QUIC
* ![image](./assets/8f46d54f32fa478989c38b9b1074f93a.jpeg)
* 重要的版本: 0.9 -> 1.0 -> 1.1 -> 2 -> 3
* 0.9的问题:
```
只支持GET
```
* 1.0的优化与问题
```
在请求中加入了HTTP版本号，如：GET /coolshell/index.html HTTP/1.0

HTTP 开始有 header了，不管是request还是response 都有header了。

增加了HTTP Status Code 标识相关的状态码。


还有 Content-Type 可以传输其它的文件了。

问题：
每请求一个资源都要新建一个TCP链接，而且是串行请求
```
* 1.1的优化与问题
```
可以设置 keepalive 来让HTTP重用TCP链接，重用TCP链接可以省了每次请求都要在广域网上进行的TCP的三次握手的巨大开销。这是所谓的“HTTP 长链接” 或是 “请求响应式的HTTP 持久链接”。英文叫 HTTP Persistent connection.

然后支持pipeline网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。（注：非幂等的POST 方法或是有依赖的请求是不能被pipeline化的）
支持 Chunked Responses ，也就是说，在Response的时候，不必说明 Content-Length 这样，客户端就不能断连接，直到收到服务端的EOF标识。这种技术又叫 “服务端Push模型”，或是 “服务端Push式的HTTP 持久链接”

还增加了 cache control 机制。

协议头注增加了 Language, Encoding, Type 等等头，让客户端可以跟服务器端进行更多的协商。

还正式加入了一个很重要的头—— HOST这样的话，服务器就知道你要请求哪个网站了。因为可以有多个域名解析到同一个IP上，要区分用户是请求的哪个域名，就需要在HTTP的协议中加入域名的信息，而不是被DNS转换过的IP信息。

正式加入了 OPTIONS 方法，其主要用于 CORS – Cross Origin Resource Sharing 应用。
问题：
虽然HTTP/1.1 可以重用TCP链接，但是请求还是一个一个串行发的，需要保证其顺序。
```
* mutiplex
![image](./assets/0_lY05UTuA-dWCXU-q.png)
![image](./assets/20200918112049.png) 可以看出h2协议连接复用并且同时开始
![image](./assets/20200918112602.png)可以看出h1是一个一个下载的，百度竟然还用的1.1协议
* 2.0的优化与问题
```
以在一个TCP链接中并发请求多个HTTP请求，移除了HTTP/1.1中的串行请求。也就是实现了多路复用

HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，其格式由三部分组成：start line（request line或者status line），header，body。要识别这3部分就要做协议解析，http1.x的解析是基于文本。 文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。

HTTP/2 之所以能够有如此多的新特性，正是因为底层数据格式的改变。采取了类似消息协议的二进制流形式，神似tcp和ip层的协议数据

问题：
Head-of-Line Blocking, 这也是一个比较经典的流量调度的问题。这个问题最早主要的发生的交换机上。
```
![image](./assets/20200917222540.png)
* 队头阻塞 ![image](./assets/HOL_blocking.png)
* 3.0的优化与问题
```
QUIC来了，自由解放了数据传输，因为HOL blocking问题在TCP的范围内无解

问题：
NAT问题
```
* 浏览器在尝试访问服务器的时候会协议降级，比如不支持H3就降级到H2
* 总之，http协议演化的核心原则是，利用有限的tcp连接来尽量快尽量多的下载资源，1.0 (一路一用), 1.1(串行多用，**虽然有pipeline，但是默认是关闭的，就是不太好用**)， 2.0(并行多用), 3.0 自由解放，但是支持的速度很慢

## tech powerd by google
* SPDY (pronounced "speedy") is a deprecated open-specification networking protocol that was developed primarily at Google for transporting web content.
* QUIC (pronounced "quick") is a general-purpose transport layer network protocol. 
* 可以说，google直接推动浏览器技术的发展，http2就是SPDY的复刻，而Http3是直接基于quic的


## tips 
* 自2014的HTTP/1.1 以来，这个世界基本的应用协议的标准基本上都是向HTTP看齐了，也许2014年前，还有一些专用的RPC协议，但是2014年以后，HTTP协议的增强，让我们实在找不出什么理由不向标准靠拢，还要重新发明轮子了。
* 我们可以看到，HTTP/2 在性能上对HTTP有质的提高，所以，HTTP/2 被采用的也很快，所以，如果你在你的公司内负责架构的话，HTTP/2是你一个非常重要的需要推动的一个事，除了因为性能上的问题，推动标准落地也是架构师的主要职责，因为，你企业内部的架构越标准，你可以使用到开源软件，或是开发方式就会越有效率，跟随着工业界的标准的发展，你的企业会非常自然的享受到标准所带来的红利。


## http principle
* header是协议可以说是把元数据和业务数据解耦，也可以说是控制逻辑和业务逻辑的分离。
* Status Code 的出现可以让请求双方以及第三方的监控或管理程序有了统一的认识。最关键是还是控制错误和业务错误的分离。

## 相关问题
* Chrome 最多允许对同一个 Host 建立六个 TCP 连接。
* HTTP/1.1 就把 Connection 头写进标准，并且默认开启持久连接，除非请求中写明 Connection: close，那么浏览器和服务器之间是会维持一段时间的 TCP 连接，不会一个请求结束就断掉。
* 一个 TCP 连接是可以发送多个 HTTP 请求的。
* Pipelining 这种设想看起来比较美好，但是在实践中会出现许多问题：一些代理服务器不能正确的处理 HTTP Pipelining。正确的流水线实现是复杂的。现代浏览器默认是不开启 HTTP Pipelining 的。

## root server system 
* ![image](./assets/20200917111951.png)
* 
```
Verisign
USC-ISI
Cogent
UMD
NASA Ames
ISC
DISA DoD NIC
ARL
Netnod
RIPE NCC
ICANN
WIDE
```