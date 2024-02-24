---
title: github actions自动部署nest项目
category:
  - 学习小记
tag:
  - Git

contributors: false
editLink: false
comment: false
---

# github actions自动部署nest项目

> 参考自:[如何使用 github actions 实现 Nest 项目自动化部署 - 掘金 (juejin.cn)](https://juejin.cn/post/7223255815997243453)

## 配置注释

下面是对配置的注释

```yaml
name: Deploy to Ubuntu Server

# 自动部署触发条件
on:
  push:
    branches:
      - main

jobs:
 # 可以添加多个deplay, 并行部署到多个环境中(开发环境, 生产环境)
  deploy:
  	# github容器的操作系统版本, 三种形式
  	# 1. ubuntu-latest、macos-latest、windows-latest
  	# 2. ubuntu-20.04、macos-11.3、windows-2019
  	# 3. 自定义的镜像
    runs-on: ubuntu-latest

    steps:
    # name为任务步骤的名称, 展示在github部署页面
      - name: Checkout code   
        # 预定义的 github Actions action，用于从指定的仓库中检出代码到当前工作流的工作目录
        uses: actions/checkout@v2

      - name: Copy files to server
        uses: appleboy/scp-action@master # 执行SCP命令(跨计算机文件传输)
        # with用来定义步骤的参数和配置
        with:
          host: ${{ secrets.SERVER_HOST }} # 在github网页Action-Secrets中配置的变量
          username: ${{ secrets.SERVER_USERNAME }}
          password: ${{ secrets.SERVER_PASSWORD }}
          source: './'  # 需要复制的文件
          target: /home/apps-server/realworld-server/  # 复制到的目标目录

      - name: SSH to server and restart application
        uses: appleboy/ssh-action@master # 使用ssh-action在服务器上执行ssh命令
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USERNAME }}
          password: ${{ secrets.SERVER_PASSWORD }}
          script: |
            cd /home/apps-server/realworld-server
            npm install
            npm run build
            pm2 restart ./dist/src/main.js --name realworld-server

```

## 部署过程中遇到的问题

### 1. yarn command not found

一开始以为是没有使用示例中的 `npm`命令，改成 `yarn`导致的问题，但是发现服务器上是有yarn并且能够正常执行，后面尝试时发现npm命令也无法执行。

最终在 `ssh-action`的github issue仓库下找到了答案

> [npm command not found · Issue #21 · appleboy/ssh-action (github.com)](https://github.com/appleboy/ssh-action/issues/21)

解决的方法是在script脚本命令执行之前配置环境变量

```yaml
script: |
            cd /root/programspace/wenote-backend
            export NVM_DIR=~/.nvm
            source ~/.nvm/nvm.sh
            yarn install
            yarn build
            pm2 restart ecosystem.config.js
```

此外还学到了，下面的uses中的setup-node设置的是github运行时容器中的Node运行环境，而不是自己服务器上的。`setup-node`命令用在托管静态博客资源时设置github容器的Node环境。要想在自己服务器上运行命令，应该用`appleboy/ssh-action@master`通过ssh执行相关命令

```yaml
 name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: yarn
```

### 2. pm2运行提示Process or Namespace main.js not found

这是因为看错使用方法，没有写配置文件，直接运行 `pm2 restart main.js`导致的错误

在项目中添加对应的配置文件 `ecosystem.config.js`, 然后通过 `pm2 restart ecosystem.config.js`运行

```javascript
module.exports = {
    apps: [
        {
            name: 'wenote-server',
            script: 'dist/main.js',
            instances: 'max',  // 根据需求设置实例数量
            exec_mode: 'cluster',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
```

