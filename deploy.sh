#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#node ./generateLayout.js 


# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd build/.vuepress/dist

echo blog.190921.xyz >> CNAME
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git config --global user.email firekillice@163.com
git config --global user.name  firekillice
ssh-keyscan github.com >> ~/.ssh/known_hosts

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:firekillice/Odyssey.git master:release-pages

cd -
