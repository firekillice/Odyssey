## elk
### elasticsearch 
* 需要在宿主机上执行sysctl -w vm.max_map_count=262144
* ElasticsearchException[failed to bind service]; nested: AccessDeniedException[/usr/share/elasticsearch/data/nodes],需要赋权限
* kibana需要和es的版本一致