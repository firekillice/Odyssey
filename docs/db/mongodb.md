# mongo
* MongoDB 的名称取自“humongous” (巨大的) 的中间部分，像googol一词代表的是一个天文数字（1的100次幂），安德森注册域名拼写错误变成了google

## usage
```
mongorestore -h 127.0.0.1 --port 40002 -u 'user' -p 'password' --drop HC_all
mongorestore -h 127.0.0.1 --port 40003 -u 'user' -p 'password' --drop MIN_all
#--drop的意思是，先删除所有的记录，然后恢复。

mongo --quiet 127.0.0.1:40002/09-20_history -u 'user' -p 'password'   ./plus/mongo-09-20_history-20200921-171054.js    --authenticationDatabase  admin 
mongo --quiet 127.0.0.1:40002/2020-04-02_Log -u 'user' -p 'password'   ./plus/mongo-2020-04-02_Log-20200921-171557.js    --authenticationDatabase  admin 
mongo --quiet 127.0.0.1:40002/2020-04-03_Log -u 'user' -p 'password'   ./plus/mongo-2020-04-03_Log-20200921-171618.js    --authenticationDatabase  admin 
mongo --quiet 127.0.0.1:40002/2020-04-04_Log -u 'user' -p 'password'   ./plus/mongo-2020-04-04_Log-20200921-171632.js    --authenticationDatabase  admin 

mongo --quiet 127.0.0.1:40003/09-20_history -u 'user' -p 'password'   ./plus/mongo-09-20_history-20200921-171054.js    --authenticationDatabase  admin 
mongo --quiet 127.0.0.1:40003/2020-04-02_Log -u 'user' -p 'password'   ./plus/mongo-2020-04-02_Log-20200921-171557.js    --authenticationDatabase  admin 
mongo --quiet 127.0.0.1:40003/2020-04-03_Log -u 'user' -p 'password'   ./plus/mongo-2020-04-03_Log-20200921-171618.js    --authenticationDatabase  admin 
mongo --quiet 127.0.0.1:40003/2020-04-04_Log -u 'user' -p 'password'   ./plus/mongo-2020-04-04_Log-20200921-171632.js    --authenticationDatabase  admin 

```