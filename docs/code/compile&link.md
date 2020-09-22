# 编译&链接
* 例子代码
```
#define MAX_NUMBER 100

int
main() {
printf("hello world");
return 0;
}
```
## 预编译
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
## 编译
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

## 链接
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
