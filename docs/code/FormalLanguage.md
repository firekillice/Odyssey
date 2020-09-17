# 形式语言
## 基础
* Formal language用精确的数学或机器可处理的公式定义的语言。
* 语言定义在某一个特定的字母表上，字母表（经常记作 Σ ）可以为任意有限集合。例如集合{a,b,c...,z}就表示所有小写字母构成的字母表。
## 形式系统
* 形式系统（英语：Formal system）是由两个部分组成的，一个形式语言加上一个推理规则或转换规则的集合。
## 形式化
* 即所有的内存对象都有一个符号进行对应

## 形式文法
* 枚举也是文法的一种
* 是形式语言中字符串的一套产生式规则。这些规则描述了如何用语言的字母表生成符合语法的有效的字符串。
* 乔姆斯基(Chomsky于1956年建立形式语言的描述以来，形式语言的理论发展很快。他将文法分成四种类型，即0型、1型、2型和3型，0型即自然语言文法，1型称为上下文相关文法，2型称为上下文无关文法(context-free grammar，CFG)，3型称为正则文法。看到哲学家对计算机科学的贡献，也是计算机和哲学的交叉部分。

## 范式 (Normal Form)
* 范式就是惯例，只不过为了将这个行为给特化出来的新设计的词语，就如同大革命，大萧条都有其特指一样。本质上讲和设计模式是同一种性质的概念。
* 范式是将一种非理性的思维方式引入到数学领域，处于理性科学与感性科学的边缘。
### BNF 巴科斯范式
* BNF(Backus-Naur Form)是描述编程语言的文法。巴科斯范式是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。
* 语法
```
< >     : 内包含的为必选项。
[ ]     : 内包含的为可选项。
{ }     : 内包含的为可重复0至无数次的项。
|       : 表示在其左右两边任选一项，相当于"OR"的意思。
::=     : 是“被定义为”的意思
"..."   : 术语符号
[...]   : 选项，最多出现一次
{...}   : 重复项，任意次数，包括 0 次
(...)   : 分组
|       : 并列选项，只能选一个
```
```
Java 的for循环的BNF范式表达：

FOR_STATEMENT ::=
    "for" "(" ( variable_declaration |
    ( expression ";" ) | ";" )
    [ expression ] ";"
    [ expression ]
    ")" statement
```
* Json的BNF范式
![image](./assets/jsMYZ.png)

## Syntax diagrams | railroad diagrams
* Syntax diagrams (or railroad diagrams) are a way to represent a context-free grammar.
* 
```
<expression> ::= <term> | <term> "+" <expression>
<term>       ::= <factor> | <factor> "*" <term>
<factor>     ::= <constant> | <variable> | "(" <expression> ")"
<variable>   ::= "x" | "y" | "z" 
<constant>   ::= <digit> | <digit> <constant>
<digit>      ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
```
![image](./assets/320px-Example_syntax_diagram_3.svg.png)


### 数据库范式 (六个)
* 第一范式（1NF）
* 第二范式（2NF）
* 第三范式（3NF）
* 巴斯-科德范式（BCNF）
* 第四范式(4NF）
* 第五范式（5NF，又称完美范式）


## 计算机中的体现
* AST(Abstract Syntax Tree)，抽象语法树

## 正则表达式
* ?? 

## Lex && Yacc

## 图灵机
* ![image](./assets/152370204511225.jpg)

## 图灵测试
* ![image](./assets/crm-turing_test.jpg)

## 有限状态自动机