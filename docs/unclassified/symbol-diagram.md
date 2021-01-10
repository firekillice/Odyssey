# 利用符号表达结构的好方式
```
.
├── OSX.IOS
│   ├── PWN之OSX.md
│   ├── PWN之macho解析.md
│   ├── PWN之macho加载过程.md
│   └── osx和ios的交叉编译.md
├── PWN之ELF解析.md
├── PWN之ELF以及so的加载和dlopen的过程.md
├── PWN之ELF符号动态解析过程.md
├── PWN之堆触发.md
├── PWN之栈触发.md
├── PWN之保护机制.md
├── PWN之逆向技巧.md
├── PWN之堆内存管理.md
├── PWN之漏洞触发点.md
├── PWN之利用方法总结.md
├── PWN之绕过保护机制.md
├── PwnableWriteup.md
├── README.md
├── assets
├── evilELF
│   ├── InjectRuntimeELF
│   │   ├── __libc_dlopen_mode.o
│   │   ├── evil.so
│   │   └── example
│   ├── LICENSE
│   ├── README.md
│   └── injectso
│       ├── __libc_dlopen_mode.asm
│       ├── __libc_dlopen_mode.o
│       ├── evil.c
│       ├── evil.so
│       ├── inject
│       ├── inject.c
│       ├── utils.c
│       └── utils.h
├── evilHEAP
│   ├── LICENSE
│   ├── README.md
│   ├── house_of_force
│   │   ├── README.md
│   │   └── vul.c
│   └── house_of_mind
│       ├── README.md
│       ├── exp.c
│       └── vul.c
├── evilMACHO
│   ├── LICENSE
│   ├── README.md
│   └── dumpRuntimeMacho
│       ├── Build
│       ├── README.md
│       ├── dumpRuntimeMacho
│       └── dumpRuntimeMacho.xcodeproj
├── linux进程动态so注入.md
├── refs
│   ├── 2002.gera_.About_Exploits_Writing.pdf
│   ├── 2015-1029-yangkun-Gold-Mining-CTF.pdf
│   ├── Linux_Interactive_Exploit_Development_with_GDB_and_PEDA_Slides.pdf
│   ├── ROP_course_lecture_jonathan_salwan_2014.pdf
│   ├── elf
│   │   ├── 001_1 程序的链接和装入及Linux下动态链接的实现(修订版).doc
│   │   ├── 001_2 Linux 动态链接机制研究及应用.pdf
│   │   ├── 001_3 elf动态解析符号过程(修订版).rtf
│   │   ├── 001_4 Linux下的动态连接库及其实现机制(修订版).rtf
│   │   ├── ELF-berlinsides-0x3.pdf
│   │   ├── Understanding_ELF.pdf
│   │   ├── bh-us-02-clowes-binaries.ppt
│   │   ├── elf.pdf
│   │   ├── 漫谈兼容内核之八 ELF 映像的装入 ( 一 ).doc
│   │   └── 《链接器和加载器》中译本.pdf
│   ├── formatstring-1.2.pdf
│   ├── gcc.pdf
│   ├── heap
│   │   ├── Bugtraq_The Malloc Maleficarum.pdf
│   │   ├── Glibc_Adventures-The_Forgotten_Chunks.pdf
│   │   ├── Heap overflow using Malloc Maleficarum _ sploitF-U-N.pdf
│   │   ├── Project Zero_ The poisoned NUL byte, 2014 edition.pdf
│   │   ├── [Phrack]Advanced Doug lea's malloc exploits.pdf
│   │   ├── [Phrack]Vudo malloc tricks.pdf
│   │   ├── bh-usa-07-ferguson-WP.pdf
│   │   ├── glibc内存管理ptmalloc源代码分析.pdf
│   │   ├── heap-hacking-by-0xbadc0de.be.pdf
│   │   └── x86 Exploitation 101_ this is the first witchy house – gb_master's _dev_null.pdf
│   ├── ltrace_internals.pdf
│   └── pwntools.pdf
└── tools
    └── Pwngdb
        ├── LICENSE
        ├── README.md
        ├── angelheap
        └── pwngdb.py
```