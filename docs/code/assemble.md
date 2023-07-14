## 汇编语言


### 数字后面的字母的含义
  ```
    H 或 h：表示十六进制。例如，"10H" 表示十六进制数 10。
    B 或 b：表示二进制。例如，"1010B" 表示二进制数 1010。
    O 或 o：表示八进制。例如，"17O" 表示八进制数 17。
    D 或 d：表示十进制。通常省略不写，例如，"10" 表示十进制数 10。
  ```

### 汇编模拟器
* [8-bit-assembler-simulator](https://schweigi.github.io/assembler-simulator/), 手册https://gist.github.com/MegaLoler/5ffe47668b5271faed0a3626ed5949b1
* https://csreith.com/cpu.php
* https://exuanbo.xyz/assembler-simulator/?shareable=eJytU8FO4zAQ_ZVZn7OrCO0plVZqUhCgtCDQgkTdg0mm1KpjW_YEgVD_nXGALAscQCI--Xnem5k3kweBrSYXRPEgtPU9iUJM4OenPmknki507JWBmY7eqHv4azUx_mkFScfzUzgnFUjymcBx33nwKhLQBqFVpIDUtcEUOisBpDhEYxxcumDaH1K84JDn0g46RYLmJxcA0zoDqPIkO1db5Dt4py1LO7jVLTo4m87H6DJF53tjdPkqOtWy1oGrajYqqIYwgLYDHCloezOqVKyyLOtVkqmcv__Xxjq4LiVkIitWtbS1c36sdjmtV1mC3xE5UVW_VDHWzTdFY0uR35PS0aJKfctnN9-1nSQs3tErHeMaRdrZkV7-T3_rw0D_ThskVbwDAyVNMTE22GxBrz_Kh3c6Uhw2Z3EFycKv7dv-YvYlgj1wAToXkDOrzhuMGUQ02BAcaIPwB048Wth_evwlrcjEdUC1fZqLKJarXSYaZyk4Y3D40_i21jd9GHxPgOrJTWPEjjddFBR6ZAoPZnvuEVtR_M4E6Q7DkWULbpURxV6e57vd7hFbIiqj
* https://www.tutorialspoint.com/compile_assembly_online.php
* https://onecompiler.com/assembly

### AQS 
* AQA Assembly language instruction 是指英国考试委员会（AQA）所使用的汇编语言指令。AQA是英国的一家考试机构，负责组织和管理各种学术和职业考试。

### 语法参考
* https://diveintosystems.org/book/C8-IA32/basics.html
* AT&T、NASM、MASM、TASM
  * AT&T语法是GNU工具链（如GCC）和UNIX系统中常用的汇编语言语法
  * NASM开源的汇编语言编译器，支持多种体系结构（如x86、x86-64、ARM等）。基于Intel语法的汇编语法，具有可扩展性和强大的功能，适用于系统级编程、驱动程序开发等领域。
  * MASM（Microsoft Macro Assembler）是由Microsoft开发的一种汇编语言编译器，主要用于Windows平台。
  * TASM（Turbo Assembler）是Borland开发的一种汇编语言编译器，通常用于开发DOS应用程序和早期的Windows应用程序。

### system call routine
* https://faculty.nps.edu/cseagle/assembly/sys_call.html
* https://chromium.googlesource.com/chromiumos/docs/+/HEAD/constants/syscalls.md#x86-32_bit

### nasm tutor
* https://asmtutor.com/#lesson1
* push byte 2， push 进去后，还是占用一个word的长度，只不过明确指出我的数据是一个byte，算是一种提示


### 直接寻址 vs 间接寻址

### cpu 模拟器
* https://cpulator.01xz.net/?sys=arm


### 语言查看
* [view-assembly-C](https://godbolt.org/)


### 理解
* 语言是一层一层的抽象上去，变得越来越复杂
* 有两个操作数的指令可以认为变化的目标是最后一个，所以的计算都是针对它的


### 特殊用法
* 在执行除法运算之前，需要将被除数的高位部分存储在 EDX 寄存器中。由于 idiv 指令除法运算是使用 EDX:EAX 寄存器对执行除法运算，其中 EDX 寄存器存放被除数的高位部分，而 EAX 寄存器存放被除数的低位部分。EDX:EAX表示将两个32bit的寄存器形成一个64bit的寄存器，通常用来存储64bit的数据