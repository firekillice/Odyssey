## git 
### 配置
* 只要用户的.ssh目录中有私钥，可以对应平台的某个公钥，就可以clone下代码


### 原理
* Git 是一个内容寻址文件系统
* Git 的核心部分是一个简单的键值对数据库（key-value data store）
* 生成blob对象，即没有文件名信息
  ```
    $ echo 'test content' | git hash-object -w --stdin 
    d670460b4b4aece5915caf5c68d12f560a9fe3e4
  ```
  ```
    $ echo 'version 1' > test.txt; git hash-object -w test.txt
    83baae61804e65cc73a7201a7252750c76066a30
  ```
* 查看内容
  ```
    $ git cat-file -p d670460b4b4aece5915caf5c68d12f560a9fe3e4
    test content
  ```
* 查看类型
  ```
    $ git cat-file -t 83baae61804e65cc73a7201a7252750c76066a30
    blob
  ```
* 生成树
  ```
  git write-tree
  ```
* 查看树
  ```
    $ git cat-file -p master^{tree}
    100644 blob a906cb2a4a904a152e80877d4088654daad0c859      README
    100644 blob 8f94139338f9404f26296befa88755fc2598c289      Rakefile
    040000 tree 99f1a6d12cb4b6f19c8655fca46c3ecf317074e0      lib
    $ git cat-file -p 99f1a6d12cb4b6f19c8655fca46c3ecf317074e0
    100644 blob 47c6340d6459e05787f644c2447d2595f5d3a54b      simplegit.rb
  ```
* 查看Commit
  ```
    $git cat-file -p fdf4fc3
    tree d8329fc1cc938780ffdd9f94e0d364e0ea74f579
    author Scott Chacon <schacon@gmail.com> 1243040974 -0700
    committer Scott Chacon <schacon@gmail.com> 1243040974 -0700

    first commit
  ```
### Index 
* Staging Area，版本库与工作目录的中间区域
* 将已经存在的blob 83baae61804e65cc73a7201a7252750c76066a30 加入到暂存区，名字为test.txt git update-index --add --cacheinfo 100644 83baae61804e65cc73a7201a7252750c76066a30 test.txt 
* git write-tree 将暂存区的内容写入一个树对象
* 在工作区将一个文件new.txt加入到暂存区，git update-index --add new.txt 
* 将一个已有的树对象读入暂存区，git read-tree --prefix=bak d8329fc1cc938780ffdd9f94e0d364e0ea74f579
* 存储在.git/index文件中，二进制格式
* 索引操作的两个命令： git read-tree  和 git write-tree，tree object读取到index，index写入到tree object

### Commit
* 将树对象d8329f提交，message为 'first commit'
  ```
  $ echo 'first commit' | git commit-tree d8329f
  ```
* 指定父对象提交
```
echo 'second commit' | git commit-tree 0155eb -p fdf4fc3
```
* 可以针对同一个tree object创建多个commit object
### git reset
* --soft: 不动working tree 和index
* --hard: 重置index和working tree
* --mixed: 重置index不动working tree
* 就是修改.git/refs/heads/branchName的值

### 引用
* 将字符串指向某个commit的位置
* 增加一个本地引用: echo 1a410efbd13591db07496601ebc7a059dd55cfe9 > .git/refs/heads/testing
* 更新引用 git update-ref refs/heads/testing ba2dc59c716a3a3cff5517693a514bc0c432840a
* ![ref-commit-tree-blob](./assets/git/data-model-4.png)


### 压缩
* 文件内容使用zlib进行解压缩
* object的名字使用SHA1生成

### 三种文件类型
* Blob Object
* Tree Object 可以认为是blob的目录
* Commit Object，**指向Tree Object**
* Tag Object，**指向Commit Object **
* 用户看到的是Commit对象，Commit对象关联Tree对象，Tree对象串联Blob对象，如下所示：
![example](./assets/git/data-model-3.png)
* blob是单纯的key-value存储，没有先后顺序, 可以通过git hash-object 直接添加和git cat-file -p 进行查看

### 有用的命令
*  git reflog
*  git gc
*  git count-objects -v
*  git cat-file -s 大小 -p 内容 -t 类型
*  git symbolic-ref HEAD 查看当前Head
*  git symbolic-ref HEAD refs/heads/test 设置head
* git ls-tree 2e9e04548ab3bc01cce1df61879930def879bf3f查看某个树
* git show-ref 显示所有的引用，和git branch类似,packed-refs也可能读取这里的分支，packed-refs相等于分支或者说引用的缓存
* git ls-files - Show information about files in the index and the working tree (当前目录)
### GC
* 在正常存储的时候，一个文件是被全量放在object中的，称为"松散（loose）"对象格式。
* git会时不时的将多个这些对象打包成一个称为“包文件（packfile）”的二进制文件，以节省空间和提高效率。当版本库中有太多的松散对象，或者你手动执行 git gc 命令，或者你向远程服务器执行推送时，Git 都会这样做。 
* 查看gc的结果
  ```
    git verify-pack -v .git/objects/pack/pack-cf2522c575dd65863bf7fabc9510d115a52a65a8.idx 
    9272d7b75219b230c989b8adf3e6a1177027f3a5 commit 237 153 12
    6abc38621476fb342bebc5e063334ad3a061d94d commit 228 147 165
    ba2dc59c716a3a3cff5517693a514bc0c432840a commit 180 117 312
    a1ca41f02e3519c32aafb8f4d4d9f465c8ce587a tree   35 46 429
    b042a60ef7dff760008df33cee372b945b6e884e blob   22054 5799 475
    ad4f6dd0b2bfb6735e93f528e227843f517ccfa7 tree   136 136 6274
    d8329fc1cc938780ffdd9f94e0d364e0ea74f579 tree   36 46 6410
    83baae61804e65cc73a7201a7252750c76066a30 blob   10 19 6456
    4e35b54056142fe12f4745949bde011c78a6abca blob   25 29 6475
    033b4468fa6b2a9547a70d88d1bbe8bf3f9ed0d5 blob   9 20 6504 1 b042a60ef7dff760008df33cee372b945b6e884e
    1f7a7a472abf3dd9643fd615f6da379c4acb3e3a blob   10 19 6524
    2e9e04548ab3bc01cce1df61879930def879bf3f tree   8 19 6543 1 ad4f6dd0b2bfb6735e93f528e227843f517ccfa7
    non delta: 10 objects
    chain length = 1: 2 objects
    .git/objects/pack/pack-cf2522c575dd65863bf7fabc9510d115a52a65a8.pack: ok
  ```

### 传输
* 为了上传数据至远端，Git 使用 send-pack 和 receive-pack 进程。运行在客户端上的 send-pack 进程连接到远端运行的 receive-pack 进程。
* 当你在下载数据时， fetch-pack 和 upload-pack 进程就起作用了。 客户端启动 fetch-pack 进程，连接至远端的 upload-pack 进程，以协商后续传输的数据。