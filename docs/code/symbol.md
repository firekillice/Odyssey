# 符号
* 在一种认知体系中，符号是指代一定意义的意象，可以是图形图像、文字组合，也可以是声音信号、建筑造型，甚至可以是一种思想文化、一个时事人物。
* 为了更为直观的表达某个含义而设计的，比如我们说"球"的时候，可以不说球，可以说一个圆圆、鼓鼓的可以滚动的物体，但是这样太复杂，于是发明了球；在人类早期的时候，名词还没有太多，很多时候就用形容词来表达名词的含义。在这个基础上如果进一步简化，就出现了符号，就是事物越来越容易认知的过程。
* 不同的领域有不同的符号，但是也可能会出现交叉。比如@符号，在邮箱、URI、微博、微信中的使用
## 符号学(Semiotics)
* 符号学即是一门分析征象(sign)系统如何运作的科学，探索意义如何透过符码、记号，在人类的沟通过程中被生产与传递
* 
## 符号表
* 符号表是一种用于语言翻译器（例如编译器和解释器）中的数据结构。在符号表中，程序源代码中的每个标识符都和它的声明或使用信息绑定在一起，比如其数据类型、作用域以及内存地址。
* 目标文件中通常会有一个包含了所有外部可见标识符的符号表。在链接不同的目标文件时，链接器会使用这些文件中的符号表来解析所有未解析的符号引用。
## 用C直观查看
```
int
main() {
printf("hello");
return 0;
}
-----------------------------------------------------------------------------
objdump -t hello 

hello:     file format elf64-x86-64

SYMBOL TABLE:
0000000000400238 l    d  .interp        0000000000000000              .interp
0000000000400254 l    d  .note.ABI-tag  0000000000000000              .note.ABI-tag
0000000000400274 l    d  .note.gnu.build-id     0000000000000000              .note.gnu.build-id
0000000000400298 l    d  .gnu.hash      0000000000000000              .gnu.hash
00000000004002b8 l    d  .dynsym        0000000000000000              .dynsym
0000000000400318 l    d  .dynstr        0000000000000000              .dynstr
0000000000400358 l    d  .gnu.version   0000000000000000              .gnu.version
0000000000400360 l    d  .gnu.version_r 0000000000000000              .gnu.version_r
0000000000400380 l    d  .rela.dyn      0000000000000000              .rela.dyn
0000000000400398 l    d  .rela.plt      0000000000000000              .rela.plt
00000000004003c8 l    d  .init  0000000000000000              .init
00000000004003f0 l    d  .plt   0000000000000000              .plt
0000000000400420 l    d  .plt.got       0000000000000000              .plt.got
0000000000400430 l    d  .text  0000000000000000              .text
...
-----------------------------------------------------------------------------
objdump -T hello  

hello:     file format elf64-x86-64

DYNAMIC SYMBOL TABLE:
0000000000000000      DF *UND*  0000000000000000  GLIBC_2.2.5 printf
0000000000000000      DF *UND*  0000000000000000  GLIBC_2.2.5 __libc_start_main
0000000000000000  w   D  *UND*  0000000000000000              __gmon_start__

-----------------------------------------------------------------------------
strip hello
##############################################################################
objdump -t hello  

hello:     file format elf64-x86-64

SYMBOL TABLE:
no symbols
##############################################################################
 objdump -T hello           

hello:     file format elf64-x86-64

DYNAMIC SYMBOL TABLE:
0000000000000000      DF *UND*  0000000000000000  GLIBC_2.2.5 printf
0000000000000000      DF *UND*  0000000000000000  GLIBC_2.2.5 __libc_start_main
0000000000000000  w   D  *UND*  0000000000000000              __gmon_start__
-----------------------------------------------------------------------------
```

## 编译&链接
* 例子代码
```
#define MAX_NUMBER 100

int
main() {
printf("hello world");
return 0;
}
```
### 预编译
* 处理过程
    > 删除 #define 并展开宏定义

    > 处理所有的条件预编译指令，如 "#if"，"#ifdef"，"#endif"等

    > 插入头文件到 "#include" 处，可以递归方式进行处理

    > 删除所有的注释

    > 添加行号和文件名标识，以便编译时编译器产生调试用的行号信息

    > 保留所有 #pragma 编译指令（编译器需要用）
* 查看
```
> gcc -E main.c -o main.i
> vim main.i 

# 1 "main.c"
# 1 "<built-in>"
# 1 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 1 "<command-line>" 2
# 1 "main.c"


int
main() {
printf("hello world%d", 100);
return 0;
}
```
### 编译
* 编译过程就是将预处理后得到的预处理文件（如hello.i）进行词法分析、语法分析、语义分析、优化后，生成汇编代码文件。
* 查看
```
gcc -S main.c -o main.s
vim main.s   
 .file   "main.c"
    .section    .rodata
.LC0:
    .string "hello world%d"
    .text
    .globl  main
    .type   main, @function
main:
.LFB0:
    .cfi_startproc
    pushq   %rbp
    .cfi_def_cfa_offset 16
    .cfi_offset 6, -16
    movq    %rsp, %rbp
    .cfi_def_cfa_register 6
    movl    $100, %esi
    movl    $.LC0, %edi
    movl    $0, %eax
    call    printf
    movl    $0, %eax
    popq    %rbp
    .cfi_def_cfa 7, 8
    ret
    .cfi_endproc
.LFE0:
    .size   main, .-main
    .ident  "GCC: (GNU) 4.8.5 20150623 (Red Hat 4.8.5-36)"
    .section    .note.GNU-stack,"",@progbits
~                                             
```

### 链接
* 链接过程将多个可重定位目标文件合并以生成可执行目标文件。
* 主要是符号解析和重定位
```
> gcc -c main.c -o main.o
> gcc  -o c_produre main.o simple_print.o
> ld main.o simple_print.o -e main -o c_produre
> ld main.o simple_print.o -e main -o c_produre
--------------------------------------------------------------------
#define MAX_NUMBER 100

int
main() {
print(MAX_NUMBER);
return 0;
}
--------------------------------------------------------------------
#include <stdio.h>
int print(int x) {
}
---------------------------------------------------------------------
objdump -t c_produre 

c_produre:     file format elf64-x86-64

SYMBOL TABLE:
00000000004000b0 l    d  .text  0000000000000000 .text
00000000004000d8 l    d  .eh_frame      0000000000000000 .eh_frame
0000000000000000 l    d  .comment       0000000000000000 .comment
0000000000000000 l    df *ABS*  0000000000000000 main.c
0000000000000000 l    df *ABS*  0000000000000000 simple_print.c
00000000004000ca g     F .text  0000000000000009 print
0000000000601000 g       .eh_frame      0000000000000000 __bss_start
00000000004000b0 g     F .text  000000000000001a main
0000000000601000 g       .eh_frame      0000000000000000 _edata
0000000000601000 g       .eh_frame      0000000000000000 _end
----------------------------------------------------------------------------
> objdump -d c_produre 

c_produre:     file format elf64-x86-64


Disassembly of section .text:

00000000004000b0 <main>:
  4000b0:       55                      push   %rbp
  4000b1:       48 89 e5                mov    %rsp,%rbp
  4000b4:       bf 64 00 00 00          mov    $0x64,%edi
  4000b9:       b8 00 00 00 00          mov    $0x0,%eax
  4000be:       e8 07 00 00 00          callq  4000ca <print>
  4000c3:       b8 00 00 00 00          mov    $0x0,%eax
  4000c8:       5d                      pop    %rbp
  4000c9:       c3                      retq   

00000000004000ca <print>:
  4000ca:       55                      push   %rbp
  4000cb:       48 89 e5                mov    %rsp,%rbp
  4000ce:       89 7d fc                mov    %edi,-0x4(%rbp)
  4000d1:       5d                      pop    %rbp
  4000d2:       c3                      retq   
====================================================================================
strip c_produre
> objdump -d c_produre 

c_produre:     file format elf64-x86-64


Disassembly of section .text:

00000000004000b0 <.text>:
  4000b0:       55                      push   %rbp
  4000b1:       48 89 e5                mov    %rsp,%rbp
  4000b4:       bf 64 00 00 00          mov    $0x64,%edi
  4000b9:       b8 00 00 00 00          mov    $0x0,%eax
  4000be:       e8 07 00 00 00          callq  0x4000ca
  4000c3:       b8 00 00 00 00          mov    $0x0,%eax
  4000c8:       5d                      pop    %rbp
  4000c9:       c3                      retq   
  4000ca:       55                      push   %rbp
  4000cb:       48 89 e5                mov    %rsp,%rbp
  4000ce:       89 7d fc                mov    %edi,-0x4(%rbp)
  4000d1:       5d                      pop    %rbp
  4000d2:       c3                      retq   

```
* 


