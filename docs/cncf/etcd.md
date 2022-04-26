## etcd 

### confd
* 一个同步数据进程，可以接入etcd、redis等

### gateway
* 使用的时候连接
### etcd集群
* 最少三个节点，共同存储数据


### etcdctl
```
./etcdctl set "test" "testing"
testing
[cuser00@10-70-4-188 etcd]$ ./etcdctl get test
testing
```
```
 ./etcdctl --endpoints http://127.0.0.1:2379  set "test2" "testing2"
 ./etcdctl --endpoints http://127.0.0.1:2379 get "test2"
```