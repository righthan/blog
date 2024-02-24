const n=JSON.parse('{"key":"v-c85c9720","path":"/posts/%E5%AD%A6%E4%B9%A0%E5%B0%8F%E8%AE%B0/github%20actions%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2nest%E9%A1%B9%E7%9B%AE.html","title":"github actions自动部署nest项目","lang":"zh-CN","frontmatter":{"title":"github actions自动部署nest项目","category":["学习小记"],"tag":["Git"],"contributors":false,"editLink":false,"comment":false,"description":"github actions自动部署nest项目 参考自:如何使用 github actions 实现 Nest 项目自动化部署 - 掘金 (juejin.cn) 配置注释 下面是对配置的注释 name: Deploy to Ubuntu Server # 自动部署触发条件 on: push: branches: - main jobs: # 可以添加多个deplay, 并行部署到多个环境中(开发环境, 生产环境) deploy: \\t# github容器的操作系统版本, 三种形式 \\t# 1. ubuntu-latest、macos-latest、windows-latest \\t# 2. ubuntu-20.04、macos-11.3、windows-2019 \\t# 3. 自定义的镜像 runs-on: ubuntu-latest steps: # name为任务步骤的名称, 展示在github部署页面 - name: Checkout code # 预定义的 github Actions action，用于从指定的仓库中检出代码到当前工作流的工作目录 uses: actions/checkout@v2 - name: Copy files to server uses: appleboy/scp-action@master # 执行SCP命令(跨计算机文件传输) # with用来定义步骤的参数和配置 with: host: ${{ secrets.SERVER_HOST }} # 在github网页Action-Secrets中配置的变量 username: ${{ secrets.SERVER_USERNAME }} password: ${{ secrets.SERVER_PASSWORD }} source: \'./\' # 需要复制的文件 target: /home/apps-server/realworld-server/ # 复制到的目标目录 - name: SSH to server and restart application uses: appleboy/ssh-action@master # 使用ssh-action在服务器上执行ssh命令 with: host: ${{ secrets.SERVER_HOST }} username: ${{ secrets.SERVER_USERNAME }} password: ${{ secrets.SERVER_PASSWORD }} script: | cd /home/apps-server/realworld-server npm install npm run build pm2 restart ./dist/src/main.js --name realworld-server","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/%E5%AD%A6%E4%B9%A0%E5%B0%8F%E8%AE%B0/github%20actions%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2nest%E9%A1%B9%E7%9B%AE.html"}],["meta",{"property":"og:site_name","content":"Lee"}],["meta",{"property":"og:title","content":"github actions自动部署nest项目"}],["meta",{"property":"og:description","content":"github actions自动部署nest项目 参考自:如何使用 github actions 实现 Nest 项目自动化部署 - 掘金 (juejin.cn) 配置注释 下面是对配置的注释 name: Deploy to Ubuntu Server # 自动部署触发条件 on: push: branches: - main jobs: # 可以添加多个deplay, 并行部署到多个环境中(开发环境, 生产环境) deploy: \\t# github容器的操作系统版本, 三种形式 \\t# 1. ubuntu-latest、macos-latest、windows-latest \\t# 2. ubuntu-20.04、macos-11.3、windows-2019 \\t# 3. 自定义的镜像 runs-on: ubuntu-latest steps: # name为任务步骤的名称, 展示在github部署页面 - name: Checkout code # 预定义的 github Actions action，用于从指定的仓库中检出代码到当前工作流的工作目录 uses: actions/checkout@v2 - name: Copy files to server uses: appleboy/scp-action@master # 执行SCP命令(跨计算机文件传输) # with用来定义步骤的参数和配置 with: host: ${{ secrets.SERVER_HOST }} # 在github网页Action-Secrets中配置的变量 username: ${{ secrets.SERVER_USERNAME }} password: ${{ secrets.SERVER_PASSWORD }} source: \'./\' # 需要复制的文件 target: /home/apps-server/realworld-server/ # 复制到的目标目录 - name: SSH to server and restart application uses: appleboy/ssh-action@master # 使用ssh-action在服务器上执行ssh命令 with: host: ${{ secrets.SERVER_HOST }} username: ${{ secrets.SERVER_USERNAME }} password: ${{ secrets.SERVER_PASSWORD }} script: | cd /home/apps-server/realworld-server npm install npm run build pm2 restart ./dist/src/main.js --name realworld-server"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-24T08:36:29.000Z"}],["meta",{"property":"article:author","content":"Lee"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:modified_time","content":"2024-02-24T08:36:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"github actions自动部署nest项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-24T08:36:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lee\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"配置注释","slug":"配置注释","link":"#配置注释","children":[]},{"level":2,"title":"部署过程中遇到的问题","slug":"部署过程中遇到的问题","link":"#部署过程中遇到的问题","children":[{"level":3,"title":"1. yarn command not found","slug":"_1-yarn-command-not-found","link":"#_1-yarn-command-not-found","children":[]},{"level":3,"title":"2. pm2运行提示Process or Namespace main.js not found","slug":"_2-pm2运行提示process-or-namespace-main-js-not-found","link":"#_2-pm2运行提示process-or-namespace-main-js-not-found","children":[]}]}],"git":{"createdTime":1708763789000,"updatedTime":1708763789000,"contributors":[{"name":"righthan","email":"2753875841@qq.com","commits":1}]},"readingTime":{"minutes":2.23,"words":670},"filePathRelative":"posts/学习小记/github actions自动部署nest项目.md","localizedDate":"2024年2月24日","excerpt":"<h1> github actions自动部署nest项目</h1>\\n<blockquote>\\n<p>参考自:<a href=\\"https://juejin.cn/post/7223255815997243453\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">如何使用 github actions 实现 Nest 项目自动化部署 - 掘金 (juejin.cn)</a></p>\\n</blockquote>\\n<h2> 配置注释</h2>\\n<p>下面是对配置的注释</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> Deploy to Ubuntu Server\\n\\n<span class=\\"token comment\\"># 自动部署触发条件</span>\\n<span class=\\"token key atrule\\">on</span><span class=\\"token punctuation\\">:</span>\\n  push<span class=\\"token punctuation\\">:</span>\\n    branches<span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> main\\n\\n<span class=\\"token key atrule\\">jobs</span><span class=\\"token punctuation\\">:</span>\\n <span class=\\"token comment\\"># 可以添加多个deplay, 并行部署到多个环境中(开发环境, 生产环境)</span>\\n  deploy<span class=\\"token punctuation\\">:</span>\\n  \\t<span class=\\"token comment\\"># github容器的操作系统版本, 三种形式</span>\\n  \\t<span class=\\"token comment\\"># 1. ubuntu-latest、macos-latest、windows-latest</span>\\n  \\t<span class=\\"token comment\\"># 2. ubuntu-20.04、macos-11.3、windows-2019</span>\\n  \\t<span class=\\"token comment\\"># 3. 自定义的镜像</span>\\n    runs<span class=\\"token punctuation\\">-</span><span class=\\"token key atrule\\">on</span><span class=\\"token punctuation\\">:</span> ubuntu<span class=\\"token punctuation\\">-</span>latest\\n\\n    steps<span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token comment\\"># name为任务步骤的名称, 展示在github部署页面</span>\\n      <span class=\\"token punctuation\\">-</span> name<span class=\\"token punctuation\\">:</span> Checkout code   \\n        <span class=\\"token comment\\"># 预定义的 github Actions action，用于从指定的仓库中检出代码到当前工作流的工作目录</span>\\n        uses<span class=\\"token punctuation\\">:</span> actions/checkout@v2\\n\\n      <span class=\\"token punctuation\\">-</span> name<span class=\\"token punctuation\\">:</span> Copy files to server\\n        uses<span class=\\"token punctuation\\">:</span> appleboy/scp<span class=\\"token punctuation\\">-</span>action@master <span class=\\"token comment\\"># 执行SCP命令(跨计算机文件传输)</span>\\n        <span class=\\"token comment\\"># with用来定义步骤的参数和配置</span>\\n        with<span class=\\"token punctuation\\">:</span>\\n          host<span class=\\"token punctuation\\">:</span> $<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> secrets.SERVER_HOST <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\"># 在github网页Action-Secrets中配置的变量</span>\\n          username<span class=\\"token punctuation\\">:</span> $<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> secrets.SERVER_USERNAME <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span>\\n          password<span class=\\"token punctuation\\">:</span> $<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> secrets.SERVER_PASSWORD <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span>\\n          source<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\'./\'</span>  <span class=\\"token comment\\"># 需要复制的文件</span>\\n          target<span class=\\"token punctuation\\">:</span> /home/apps<span class=\\"token punctuation\\">-</span>server/realworld<span class=\\"token punctuation\\">-</span>server/  <span class=\\"token comment\\"># 复制到的目标目录</span>\\n\\n      <span class=\\"token punctuation\\">-</span> name<span class=\\"token punctuation\\">:</span> SSH to server and restart application\\n        uses<span class=\\"token punctuation\\">:</span> appleboy/ssh<span class=\\"token punctuation\\">-</span>action@master <span class=\\"token comment\\"># 使用ssh-action在服务器上执行ssh命令</span>\\n        with<span class=\\"token punctuation\\">:</span>\\n          host<span class=\\"token punctuation\\">:</span> $<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> secrets.SERVER_HOST <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span>\\n          username<span class=\\"token punctuation\\">:</span> $<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> secrets.SERVER_USERNAME <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span>\\n          password<span class=\\"token punctuation\\">:</span> $<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> secrets.SERVER_PASSWORD <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span>\\n          script<span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">|</span>\\n            cd /home/apps<span class=\\"token punctuation\\">-</span>server/realworld<span class=\\"token punctuation\\">-</span>server\\n            npm install\\n            npm run build\\n            pm2 restart ./dist/src/main.js <span class=\\"token punctuation\\">-</span><span class=\\"token punctuation\\">-</span>name realworld<span class=\\"token punctuation\\">-</span>server\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
