## 静态编译
* go build -o main  -ldflags '-linkmode "external" -extldflags "-static"' main.go
* 使用Golang的镜像编译，gcc的镜像也有go命令，但是无法实现静态编译

### 一段Go中使用Tun设备的代码
```
package main

/*
#include <net/if.h>
#include <linux/if_tun.h>
#include <sys/socket.h>
#include <sys/types.h>
*/
import "C"
import (
	"encoding/binary"
	"fmt"
	"os"
	"os/exec"
	"os/signal"
	"strconv"
	"syscall"
	"unsafe"
)

func Raw2String(src uint32) string {
	raw := make([]byte, 4)
	binary.LittleEndian.PutUint32(raw, src)
	return strconv.FormatUint(uint64(raw[0]), 10) + "." + strconv.FormatUint(uint64(raw[1]), 10) + "." + strconv.FormatUint(uint64(raw[2]), 10) + "." + strconv.FormatUint(uint64(raw[3]), 10)
}

// ip包必选，ip6自行根据wireshark进行编写，此处ip4为例
type IPHeader struct {
	Version_And_Len        uint8 //前4个bit为version(4 ip4,6 ip6)，后bit个字节为首部length xxxx xxxx
	DiffernetialtedService uint8
	Tot_Len                uint16
	Id                     uint16
	Flag_And_Seek          uint16 //前3bit 为flag后面13bit为seek
	TTL                    uint8
	Protocol               uint8
	CheckSum               uint16
	Source                 uint32
	Dest                   uint32
}
type Pointer[T any] struct {
	T    *T
	buff []byte
}

func NewPointer[T any]() *Pointer[T] {
	var t T
	var ans = &Pointer[T]{buff: make([]byte, unsafe.Sizeof(t))} //获取类型占用内存字节数
	ans.T = (*T)(unsafe.Pointer(&ans.buff[0]))                  //将指针关联过去
	return ans
}
func (s *Pointer[T]) Bytes() []byte {
	return s.buff
}
func Open_Tun(tuname string, ipadd string) int {
	fd, err := syscall.Open("/dev/net/tun", syscall.O_RDWR, 0640)
	if fd < 0 {
		fmt.Fprintln(os.Stderr, "open fd failed "+err.Error())
		return -1
	}
	var (
		ifr C.struct_ifreq
	)
	//网络设备接口注册
	copy(ifr.ifr_ifrn[:len(tuname)], []byte(tuname))
	flags := NewPointer[uint16]()
	*flags.T = syscall.IFF_TUN | syscall.IFF_UP | syscall.IFF_MULTICAST
	copy(ifr.ifr_ifru[:2], flags.Bytes())
	ans, _, err := syscall.Syscall(syscall.SYS_IOCTL, uintptr(fd), syscall.TUNSETIFF, uintptr(unsafe.Pointer(&ifr)))
	if int32(ans) < 0 {
		fmt.Fprintln(os.Stderr, err.Error())
		syscall.Close(fd)
		return -1
	}
	//设备接口初始化
	cmd := exec.Command("ip", "addr", "add", "192.168.99.99/24", "dev", tuname)
	cmd.Run()
	cmd = exec.Command("ip", "link", "set", "dev", tuname, "up")
	cmd.Run()
	return fd
}

func main() {
	fd := Open_Tun("tun0", "10.0.0.20")
	if fd > 0 {
		ch := make(chan os.Signal, 1)
		signal.Notify(ch, syscall.SIGINT)
		go func() {
			var (
				ipheader *IPHeader
				// size     int
				err  error
				buff []byte = make([]byte, 1024)
			)
			for {
				_, err = syscall.Read(fd, buff)
				if err == nil {
					if buff[0] == 0x45 { //只看ip4
						ipheader = (*IPHeader)(unsafe.Pointer(&buff[0]))
						fmt.Printf("protocol %d src %s dst %s\n", ipheader.Protocol, Raw2String(ipheader.Source), Raw2String(ipheader.Dest))
					}
				}
			}
		}()
		<-ch
		syscall.Close(fd)
	}
}



```