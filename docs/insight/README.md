### distribution
* 所有的路由都可能产生热点，热点商品，热点城市


### database
* 使用周期落地+Journal的方式来保证数据 Mongodb: checkpoint + Journal; Redis: RDB + AOF
* Redis使用Lua做为复杂操作的解释器；Mongodb使用JS作为复杂操作的解释器
