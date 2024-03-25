import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as s,d as e,f as t}from"./app-0243a6ab.js";const l={},u=n("h1",{id:"github-actions自动部署nest项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-actions自动部署nest项目","aria-hidden":"true"},"#"),s(" github actions自动部署nest项目")],-1),r={href:"https://juejin.cn/post/7223255815997243453",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="配置注释" tabindex="-1"><a class="header-anchor" href="#配置注释" aria-hidden="true">#</a> 配置注释</h2><p>下面是对配置的注释</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Ubuntu Server

<span class="token comment"># 自动部署触发条件</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  push<span class="token punctuation">:</span>
    branches<span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
 <span class="token comment"># 可以添加多个deplay, 并行部署到多个环境中(开发环境, 生产环境)</span>
  deploy<span class="token punctuation">:</span>
  	<span class="token comment"># github容器的操作系统版本, 三种形式</span>
  	<span class="token comment"># 1. ubuntu-latest、macos-latest、windows-latest</span>
  	<span class="token comment"># 2. ubuntu-20.04、macos-11.3、windows-2019</span>
  	<span class="token comment"># 3. 自定义的镜像</span>
    runs<span class="token punctuation">-</span><span class="token key atrule">on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    steps<span class="token punctuation">:</span>
    <span class="token comment"># name为任务步骤的名称, 展示在github部署页面</span>
      <span class="token punctuation">-</span> name<span class="token punctuation">:</span> Checkout code   
        <span class="token comment"># 预定义的 github Actions action，用于从指定的仓库中检出代码到当前工作流的工作目录</span>
        uses<span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> name<span class="token punctuation">:</span> Copy files to server
        uses<span class="token punctuation">:</span> appleboy/scp<span class="token punctuation">-</span>action@master <span class="token comment"># 执行SCP命令(跨计算机文件传输)</span>
        <span class="token comment"># with用来定义步骤的参数和配置</span>
        with<span class="token punctuation">:</span>
          host<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVER_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 在github网页Action-Secrets中配置的变量</span>
          username<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVER_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          password<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVER_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
          source<span class="token punctuation">:</span> <span class="token string">&#39;./&#39;</span>  <span class="token comment"># 需要复制的文件</span>
          target<span class="token punctuation">:</span> /home/apps<span class="token punctuation">-</span>server/realworld<span class="token punctuation">-</span>server/  <span class="token comment"># 复制到的目标目录</span>

      <span class="token punctuation">-</span> name<span class="token punctuation">:</span> SSH to server and restart application
        uses<span class="token punctuation">:</span> appleboy/ssh<span class="token punctuation">-</span>action@master <span class="token comment"># 使用ssh-action在服务器上执行ssh命令</span>
        with<span class="token punctuation">:</span>
          host<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVER_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
          username<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVER_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          password<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVER_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
          script<span class="token punctuation">:</span> <span class="token punctuation">|</span>
            cd /home/apps<span class="token punctuation">-</span>server/realworld<span class="token punctuation">-</span>server
            npm install
            npm run build
            pm2 restart ./dist/src/main.js <span class="token punctuation">-</span><span class="token punctuation">-</span>name realworld<span class="token punctuation">-</span>server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署过程中遇到的问题" tabindex="-1"><a class="header-anchor" href="#部署过程中遇到的问题" aria-hidden="true">#</a> 部署过程中遇到的问题</h2><h3 id="_1-yarn-command-not-found" tabindex="-1"><a class="header-anchor" href="#_1-yarn-command-not-found" aria-hidden="true">#</a> 1. yarn command not found</h3><p>一开始以为是没有使用示例中的 <code>npm</code>命令，改成 <code>yarn</code>导致的问题，但是发现服务器上是有yarn并且能够正常执行，后面尝试时发现npm命令也无法执行。</p><p>最终在 <code>ssh-action</code>的github issue仓库下找到了答案</p>`,7),m={href:"https://github.com/appleboy/ssh-action/issues/21",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>解决的方法是在script脚本命令执行之前配置环境变量</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            cd /root/programspace/wenote-backend
            export NVM_DIR=~/.nvm
            source ~/.nvm/nvm.sh
            yarn install
            yarn build
            pm2 restart ecosystem.config.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外还学到了，下面的uses中的setup-node设置的是github运行时容器中的Node运行环境，而不是自己服务器上的。<code>setup-node</code>命令用在托管静态博客资源时设置github容器的Node环境。要想在自己服务器上运行命令，应该用<code>appleboy/ssh-action@master</code>通过ssh执行相关命令</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-pm2运行提示process-or-namespace-main-js-not-found" tabindex="-1"><a class="header-anchor" href="#_2-pm2运行提示process-or-namespace-main-js-not-found" aria-hidden="true">#</a> 2. pm2运行提示Process or Namespace main.js not found</h3><p>这是因为看错使用方法，没有写配置文件，直接运行 <code>pm2 restart main.js</code>导致的错误</p><p>在项目中添加对应的配置文件 <code>ecosystem.config.js</code>, 然后通过 <code>pm2 restart ecosystem.config.js</code>运行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">apps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;wenote-server&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;dist/main.js&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token string">&#39;max&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 根据需求设置实例数量</span>
            <span class="token literal-property property">exec_mode</span><span class="token operator">:</span> <span class="token string">&#39;cluster&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">autorestart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">max_memory_restart</span><span class="token operator">:</span> <span class="token string">&#39;1G&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function k(b,h){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("参考自:"),n("a",r,[s("如何使用 github actions 实现 Nest 项目自动化部署 - 掘金 (juejin.cn)"),e(a)])])]),d,n("blockquote",null,[n("p",null,[n("a",m,[s("npm command not found · Issue #21 · appleboy/ssh-action (github.com)"),e(a)])])]),v])}const g=p(l,[["render",k],["__file","github actions自动部署nest项目.html.vue"]]);export{g as default};
