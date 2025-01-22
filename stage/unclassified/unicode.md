## Unicode 

### Unicode 
* [查看](https://symbl.cc/cn/)
* [查看](https://unicode.yunser.com/unicode)
* [homepage](https://home.unicode.org/)
* 真正囊括世界语言符号的字符集

### UTF8
* 最长4个字节
* 一种将**Unicode字符集**映射到**字节序列**的编码方案，通过UTF-8编码，计算机系统可以正确地处理和表示Unicode字符。
* 编码
  * 对于单字节的符号，字节的第一位设为 0，后面 7 位为这个符号的 Unicode 码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的, 所以 UTF-8 能兼容 ASCII 编码，这也是互联网普遍采用 UTF-8 的原因之一
  * 对于 n 字节的符号（ n > 1），**第一个字节的前 n 位都设为 1，第 n + 1 位设为 0**，**后面字节的前两位一律设为 10** 。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码

### UTF16
* 6位（2个字节）来表示大部分的Unicode字符

### (BOM)byte-order mark 字节序标记"
* 

### 总结
* Utf8 Utf16 Utf32都是将Unicode映射到一个新的字节序列上