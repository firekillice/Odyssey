## snail

### bootloader
* grub(Grand Unified Bootloader (GRUB).)
* [build-yourself-bootloader](https://wiki.osdev.org/Rolling_Your_Own_Bootloader)

### environment
* docker pull randomdude/gcc-cross-x86_64-elf
* init Dockerfile
  ```
    FROM randomdude/gcc-cross-x86_64-elf
    RUN apt-get update && apt-get upgrade -y && apt-get install -y nasm xorriso grub-pc-bin grub-common
    VOLUMN /root/env
    WORKDIR /root/env
  ```