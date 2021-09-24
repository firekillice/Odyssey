(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{355:function(a,t,e){a.exports=e.p+"assets/img/20201012220340.cfcf41ee.png"},356:function(a,t,e){a.exports=e.p+"assets/img/20201012220633.22264c9c.png"},609:function(a,t,e){"use strict";e.r(t);var s=e(26),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"哈希算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哈希算法"}},[a._v("#")]),a._v(" 哈希算法")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("hash翻译")]),a._v(" "),s("p",[a._v("n. 剁碎的食物；混杂，拼凑；重新表述\nvt. 搞糟，把…弄乱；切细；推敲")])]),a._v(" "),s("li",[s("p",[a._v("A hash algorithm is a function that converts a data string into a numeric string output of fixed length.")])]),a._v(" "),s("li",[s("p",[a._v("是将某种无限的关系映射到有限的算法，即认为每个人只会用到有限的字符串集合，所以映射到有限空间是有可能的")])]),a._v(" "),s("li",[s("p",[a._v("所有能满足上面的函数都可以成为哈希算法")])])]),a._v(" "),s("h2",{attrs:{id:"basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[a._v("#")]),a._v(" basics")]),a._v(" "),s("ul",[s("li",[a._v("基础要求")])]),a._v(" "),s("p",[s("img",{attrs:{src:e(355),alt:"basic"}})]),a._v(" "),s("ul",[s("li",[a._v("在使用哈希的时候，总是需要考虑冲突的情形")])]),a._v(" "),s("h2",{attrs:{id:"universal-hashing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#universal-hashing"}},[a._v("#")]),a._v(" Universal Hashing")]),a._v(" "),s("ul",[s("li",[a._v("定义\n"),s("img",{attrs:{src:e(356),alt:"定义"}})])]),a._v(" "),s("h2",{attrs:{id:"perfect-hashing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#perfect-hashing"}},[a._v("#")]),a._v(" Perfect Hashing")]),a._v(" "),s("ul",[s("li",[a._v("We say a hash function is perfect for S if all lookups involve O(1) work")])]),a._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[a._v("#")]),a._v(" properties")]),a._v(" "),s("ul",[s("li",[a._v("it always returns a number for an object.")]),a._v(" "),s("li",[a._v("two equal objects will always have the same number")]),a._v(" "),s("li",[a._v("two unequal objects not always have different numbers")])]),a._v(" "),s("h2",{attrs:{id:"hash-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash-table"}},[a._v("#")]),a._v(" hash table")]),a._v(" "),s("ul",[s("li",[a._v("Create an array of size M. Choose a hash function h, that is a mapping from objects into integers 0, 1, ..., M-1. Put these objects into an array at indexes computed via the hash function index = h(object). Such array is called a hash table.")])]),a._v(" "),s("h2",{attrs:{id:"cryptographic-hash-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cryptographic-hash-functions"}},[a._v("#")]),a._v(" Cryptographic hash functions")]),a._v(" "),s("h3",{attrs:{id:"md5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#md5"}},[a._v("#")]),a._v(" md5")]),a._v(" "),s("ul",[s("li",[a._v("Message-Digest algorithm 5")])]),a._v(" "),s("h3",{attrs:{id:"sha-family"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sha-family"}},[a._v("#")]),a._v(" sha family")]),a._v(" "),s("ul",[s("li",[a._v("Secure Hash Algorithm")]),a._v(" "),s("li",[a._v("The SHA-1 is called secure because it is "),s("strong",[a._v("computationally infeasible")]),a._v(" to find a message which corresponds to a given message digest, or to find two different messages which produce the same message digest.")]),a._v(" "),s("li",[a._v("When a message of any length < 2^64 bits is input, the SHA-1 produces a 160-bit output called a message digest.  The message digest can then, for example, be input to a signature algorithm which generates or verifies the signature for the message.")]),a._v(" "),s("li",[a._v("sha是用作字符串校验的")])]),a._v(" "),s("h2",{attrs:{id:"crc32"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crc32"}},[a._v("#")]),a._v(" CRC32")]),a._v(" "),s("ul",[s("li",[a._v("A cyclic redundancy check (CRC) is an error-detecting code often used for detection of accidental changes to data.")])]),a._v(" "),s("h2",{attrs:{id:"fvn-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fvn-hash"}},[a._v("#")]),a._v(" FVN hash")]),a._v(" "),s("ul",[s("li",[a._v("FNV hashes are designed to be fast while maintaining a low collision rate.")])]),a._v(" "),s("h2",{attrs:{id:"jenkins-hashes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-hashes"}},[a._v("#")]),a._v(" Jenkins hashes")]),a._v(" "),s("h2",{attrs:{id:"hashmix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashmix"}},[a._v("#")]),a._v(" HashMix")]),a._v(" "),s("h2",{attrs:{id:"哈希冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哈希冲突"}},[a._v("#")]),a._v(" 哈希冲突")]),a._v(" "),s("ul",[s("li",[a._v("由于哈希算法被计算的数据是无限的，而计算后的结果范围有限，因此总会存在不同的数据经过计算后得到的值相同，这就是哈希冲突。")]),a._v(" "),s("li",[a._v("开放定址法(麻烦邻居),  拉链法（排队）, 再哈希法（重来）、建立公共溢出区(广场)")]),a._v(" "),s("li",[a._v("常用的链地址法 (separate chain)")])]),a._v(" "),s("h2",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[a._v("#")]),a._v(" 应用场景")]),a._v(" "),s("ul",[s("li",[a._v("签名")]),a._v(" "),s("li",[a._v("信息加密")]),a._v(" "),s("li",[a._v("搜索，可以定位某个位置，这个位置有极大的几率找到目标值，是一种利用数学的力量逼近, HashMap")]),a._v(" "),s("li",[a._v("git的commit id，sha1的生成指作为了唯一id来使用")]),a._v(" "),s("li",[a._v("负载均衡")]),a._v(" "),s("li",[a._v("讲道理，所有带有查找属性的场景都可以使用")])]),a._v(" "),s("h2",{attrs:{id:"抽屉原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽屉原理"}},[a._v("#")]),a._v(" 抽屉原理")]),a._v(" "),s("ul",[s("li",[a._v("“如果每个抽屉代表一个集合，每一个苹果就可以代表一个元素，假如有n+1个元素放到n个集合中去，其中必定有一个集合里至少有两个元素。” 抽屉原理有时也被称为鸽巢原理。 它是组合数学中一个重要的原理。")])]),a._v(" "),s("h2",{attrs:{id:"未解决的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未解决的问题"}},[a._v("#")]),a._v(" 未解决的问题")]),a._v(" "),s("ul",[s("li",[a._v("总是可能碰撞怎么办")]),a._v(" "),s("li",[a._v("哈希算法的结果肯定是整数么")])]),a._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[a._v("#")]),a._v(" reference")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://tools.ietf.org/html/rfc3174",target:"_blank",rel:"noopener noreferrer"}},[a._v("sha1-rfc"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.cs.cmu.edu/~avrim/451f11/lectures/lect1004.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("hash lecture"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);