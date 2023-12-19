docker run -e http_proxy="10.10.50.163:7890" -e https_proxy="10.10.50.163:7890"  -w /application -v `pwd`:/application  -v ~/.ssh/id_rsa:/root/.ssh/id_rsa  node:12 sh -c "sh ./deploy.sh "
