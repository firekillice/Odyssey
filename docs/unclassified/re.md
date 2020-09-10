# 正则表达式
* Regular Expression
* 不要被"正则"这个专用词影响了理解，这个词只是为了“专用意义”而存在的，其实就是有规律的意思

## 基础
* 形式语言（Formal language）是用精确的数学或机器可处理的公式定义的语言。
* 字符串是字母表中的元素构成的有穷序列
* 所以正则表达式，是对某些字符串进行的筛选，是对语言的另一种组织形式

## PCRE(Perl Compatible RegularExpression)
可以说是正则表达式的老前辈，它是从Perl衍生出来的一个显赫流派，\d \w \s 等表示法就是它的特征；

## BRE(Basic Regular Expression)
POSIX规范的正则表达式之一，grep、vi、sed都属于这一派，它显著的特征就是( ) { } 这几个括号元字符必须经过转义才具有特殊含义，不支持 + ? | 等元字符，随着时间发展，后来又出现了GNU BRE，GNU BRE支持上边这些字符，但是也必须都经过转义才能有特殊含义；

## ERE(Extended Regular Express)
是POSIX规范的正则表达式之一，egrep awk都属于这一派，( ) { }+ ? |等元字符可以直接使用不需要转义，这个流派后来也出现了GNU ERE，在之前的基础上添加了支持\1 \2等。