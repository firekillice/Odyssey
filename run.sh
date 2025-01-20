docker run -e http_proxy="10.10.30.163:9870" -e https_proxy="10.10.30.163:9870"  -w /application -v `pwd`:/application  -v ~/.ssh/id_rsa:/root/.ssh/id_rsa  node:12 sh -c "sh ./deploy.sh "
