## LLVM 

### IL
* [观察](https://godbolt.org/)


### CLang
* Clang 是LLVM编译器的前端工具，支持 C++、 C、 Objective C++ 和 Objective C 等编程语言。
* Clang 最初由苹果公司主导编写。苹果开发人员一开始使用 GCC 作为 LLVM 的前端，但这给使用 LLVM 的开发人员带来了一些问题。GCC 系统庞大而笨重，与苹果集成开发环境（IDE）配合度差。除此之外，LLVM 许可证也与 GCC 不兼容。在此期间，苹果软件大量使用 Objective-C，但这在 GCC 中优先级很低。这就是苹果公司在 2007 年 7 月开发 Clang 项目的原因，后来逐渐将其发展为开源工具。



### 如何理解LL（low level）
* LLVM IR是一种面向对象的、静态单赋值（Static Single Assignment，SSA）的中间代码，它比高级源代码更接近于硬件指令，但又比机器代码更抽象，更易于优化和转换。
* LLVM的后端是将LLVM中间表示（LLVM IR）直接转换为目标平台特定的机器码，而不需要像Java或C#一样通过解释执行来运行。
* 这种特性使得LLVM成为一个通用的编译器后端，能够为不同的硬件架构生成高效的机器码，同时保持编译器前端（如Clang等）的独立性。


### 静态单赋值（SSA）形式