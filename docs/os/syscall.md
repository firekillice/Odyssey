# 系统调用
* System calls are the primary mechanism by which user-space programs interact with the Linux kernel. 


## 陷入到内核的方式
* x86 的系统调用实现经历了 int / iret 到 sysenter / sysexit 再到 syscall / sysret 的演变

#### 中断的方式 int 0x80
```
.data
    s:
        .ascii "hello world\n"
        len = . - s
.text
    .global _start
    _start:

        movl $4, %eax   /* write system call number */
        movl $1, %ebx   /* stdout */
        movl $s, %ecx   /* the data to print */
        movl $len, %edx /* length of the buffer */
        int $0x80

        movl $1, %eax   /* exit system call number */
        movl $0, %ebx   /* exit status */
        int $0x80
------------------------------------------------------------------------------------------------------------
as -o main.o main.S
ld -o main.out main.o
./main.out
```

#### syscall
```
int
main() {
exit(0);
}
--------------------------------------------------------------------------------------------------------------
gdb ./a.out
disas *_exit

    0x00007ffff7ad2bd0 <+0>:     movslq %edi,%rdx
   0x00007ffff7ad2bd3 <+3>:     mov    0x301276(%rip),%r10        # 0x7ffff7dd3e50
   0x00007ffff7ad2bda <+10>:    mov    $0xe7,%r9d
   0x00007ffff7ad2be0 <+16>:    mov    $0x3c,%r8d
   0x00007ffff7ad2be6 <+22>:    jmp    0x7ffff7ad2c01 <_exit+49>
   0x00007ffff7ad2be8 <+24>:    nopl   0x0(%rax,%rax,1)
   0x00007ffff7ad2bf0 <+32>:    mov    %rdx,%rdi
   0x00007ffff7ad2bf3 <+35>:    mov    %r8d,%eax
   0x00007ffff7ad2bf6 <+38>:    syscall 
   0x00007ffff7ad2bf8 <+40>:    cmp    $0xfffffffffffff000,%rax
   0x00007ffff7ad2bfe <+46>:    ja     0x7ffff7ad2c1b <_exit+75>
   0x00007ffff7ad2c00 <+48>:    hlt    
   0x00007ffff7ad2c01 <+49>:    mov    %rdx,%rdi
   0x00007ffff7ad2c04 <+52>:    mov    %r9d,%eax
   0x00007ffff7ad2c07 <+55>:    syscall 
   0x00007ffff7ad2c09 <+57>:    cmp    $0xfffffffffffff000,%rax
   0x00007ffff7ad2c0f <+63>:    jbe    0x7ffff7ad2bf0 <_exit+32>
   0x00007ffff7ad2c11 <+65>:    mov    %eax,%esi
   0x00007ffff7ad2c13 <+67>:    neg    %esi
   0x00007ffff7ad2c15 <+69>:    mov    %esi,%fs:(%r10)
   0x00007ffff7ad2c19 <+73>:    jmp    0x7ffff7ad2bf0 <_exit+32>
   0x00007ffff7ad2c1b <+75>:    mov    %eax,%esi
   0x00007ffff7ad2c1d <+77>:    neg    %esi
   0x00007ffff7ad2c1f <+79>:    mov    %esi,%fs:(%r10)
   0x00007ffff7ad2c23 <+83>:    jmp    0x7ffff7ad2c00 <_exit+48>
```

## 查看系统调用编号
```
less /usr/include/asm/unistd_64.h   
#ifndef _ASM_X86_UNISTD_64_H
#define _ASM_X86_UNISTD_64_H 1

#define __NR_read 0
#define __NR_write 1
#define __NR_open 2
#define __NR_close 3
#define __NR_stat 4
#define __NR_fstat 5
#define __NR_lstat 6
#define __NR_poll 7
#define __NR_lseek 8
#define __NR_mmap 9
#define __NR_mprotect 10
#define __NR_munmap 11
#define __NR_brk 12
#define __NR_rt_sigaction 13
#define __NR_rt_sigprocmask 14
#define __NR_rt_sigreturn 15
#define __NR_ioctl 16
#define __NR_pread64 17
```