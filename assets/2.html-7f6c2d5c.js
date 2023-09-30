import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as i,a as e,b as n,d as s,f as t}from"./app-74f9156b.js";const c="/blog/assets/screenshoot_lvim_install-3a4c91c1.png",d={},h=t('<h3 id="前景提要" tabindex="-1"><a class="header-anchor" href="#前景提要" aria-hidden="true">#</a> 前景提要</h3><p>最近打算把内存8GB的树莓派安装桌面版的Ubuntu做第二生产力，但是没想到内存是够的，打开浏览器，<code>VScode</code>, 开几个终端，还能有4GiB多，但CPU真是太拉跨了，即使把CPU和GPU超频后有了较大提升，但发热到62°C，实际体验上鼠标不跟手，打开软件需要好几秒，大有人类科技生产力倒退10年的感觉。</p><p>至于我最爱的前端常用IDE------<code>VSCode</code>，体验更是惨不忍睹，敲个字母需要半天才能显示。正好平时在 <code>VSCode</code>上习惯了vim的使用（今年最好的投资），打算在Linux环境下配置一个轻量且优雅的vim配置环境。看着 <code>neovim</code>的各种推荐，打算入坑了。</p><p>记录一下安装的过程，万一之后环境崩了也能快速恢复(或许可以尝试docker?有空得学学)</p><h3 id="一、安装neovim" tabindex="-1"><a class="header-anchor" href="#一、安装neovim" aria-hidden="true">#</a> 一、安装neovim</h3><p>上来就踩坑了，命令行直接安装 <code>sudo apt install neovim</code>，装完发现是0.6.x的版本，重装，输入 <code>nvim</code>命令时发现，命令行提示可以使用 <code>sudo snap install neovim</code>，安装完发现版本时0.9.x，很好，进入下一步......结果在安装 <code>lunarvim</code>时，似乎就因为这个snap版本的 <code>neovim</code>出错了......</p><h4 id="正确安装方法" tabindex="-1"><a class="header-anchor" href="#正确安装方法" aria-hidden="true">#</a> 正确安装方法</h4>',7),u=e("code",null,"neovim",-1),_=e("code",null,"sudo make install",-1),p=e("code",null,"cmake",-1),m=e("br",null,null,-1),v={href:"https://www.codeleading.com/article/35441029841/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"有时候从会卡在从网络上下载包超时报错，多尝试几次就好",-1),f=e("h3",{id:"二、安装lunarvim",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二、安装lunarvim","aria-hidden":"true"},"#"),n(" 二、安装lunarvim")],-1),b=e("code",null,"lunarvim",-1),k={href:"https://www.lunarvim.org/",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"先看需要的环境：",-1),x={href:"https://cli.github.com/",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"git",-1),L={href:"https://www.gnu.org/software/make/",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"make",-1),y={href:"https://pypi.org/project/pip/",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"pip",-1),N={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"python",-1),j={href:"https://npmjs.com/",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"npm",-1),U={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"node",-1),H={href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"cargo",-1),P=e("p",null,"一阵安装之后，自信地执行官网上粘贴的安装命令。",-1),A=e("code",null,"nodejs",-1),R=e("code",null,"rustc",-1),q=e("code",null,"restc",-1),z=e("code",null,".local\\bin",-1),D=e("code",null,"lvim",-1),T=e("code",null,"unknown -u",-1),F={href:"https://github.com/LunarVim/LunarVim/issues/3612",target:"_blank",rel:"noopener noreferrer"},J=e("code",null,"unknown flag 'u'",-1),K=e("code",null,"lvim",-1),M=e("code",null,"nvim",-1),O=e("code",null,"nvim",-1),Q=e("code",null,"rustc",-1),W=e("code",null,"rustup",-1),X=e("code",null,"rustc --version",-1),Y=t(`<p>但是这时候问题又来了，安装命令回车执行之后，会自动结束，而不执行安装命令了，相比是卸载残留的影响，重新打开终端，但依然不行。</p><p>想到直接把安装命令下载下来吧</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">LV_BRANCH</span><span class="token operator">=</span><span class="token string">&#39;release-1.3/neovim-0.9&#39;</span> <span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问连接中的网址，然后复制粘贴到本地新建的 <code>install.sh</code>，然后执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">LV_BRANCH</span><span class="token operator">=</span><span class="token string">&#39;release-1.3/neovim-0.9&#39;</span> <span class="token function">bash</span> ./install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>终于行了，等待了半天终于等到了振奋人心的安装成功显示， <code>lvim</code>启动成功！</p><figure><img src="`+c+'" alt="screenshoot_lvim_install" tabindex="0" loading="lazy"><figcaption>screenshoot_lvim_install</figcaption></figure><p>折腾了一晚上，后续再更新nvim的配置过程</p><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>',9),Z={href:"https://cloud.tencent.com/developer/article/2215919",target:"_blank",rel:"noopener noreferrer"},$={href:"https://www.saoniuhuo.com/question/detail-2515840.html",target:"_blank",rel:"noopener noreferrer"};function ee(ne,oe){const o=r("ExternalLinkIcon");return l(),i("div",null,[h,e("p",null,[n("因为 "),u,n("没有树莓派的arm64架构的包，需要从github上clone源码，然后进入项目的目录使用 "),_,n("执行编译安装命令（需要提前安装好 "),p,n("）。"),m,n(" 安装过程中因为缺少一些软件包导致一些报错，参考这篇文章"),e("a",v,[n("ubuntu（debian）源码安装neovim - 代码先锋网 (codeleading.com)"),s(o)])]),g,f,e("p",null,[n("安装 "),b,n("也是大坑颇多，好在已经熟练掌握了直接从"),e("a",k,[n("LunarVim"),s(o)]),n("查找安装教程的方法论。")]),w,e("ul",null,[e("li",null,[n("Have "),e("a",x,[V,s(o)]),n(", "),e("a",L,[C,s(o)]),n(", "),e("a",y,[B,s(o)]),n(", "),e("a",N,[E,s(o)]),n(", "),e("a",j,[S,s(o)]),n(", "),e("a",U,[G,s(o)]),n(" and "),e("a",H,[I,s(o)]),n(" installed on your system.")])]),P,e("p",null,[n("安装 "),A,n(" 上的依赖，安装python上的依赖，安装rust上的依赖，这里出现了问题，我的 "),R,n("版本是1.66， 一个依赖包需要 1.70+版本的 "),q,n("，想着既然是配置的依赖， 莫非是写rust的才需要配置的？再次执行安装命令， 是否安装选择了n，似乎只是某个安装插件失败了，教程里好像也又这种情况， 切到 "),z,n("执行 "),D,n(" ，报错 "),T,n(", 搜索一番，发现了github上的一个issue "),e("a",F,[n("Error while lunarvim installation "),J,n(),s(o)]),n(",尝试了里面的方法， 注释了一条exec语句，不报错了，但是 "),K,n(" 启动不了， 看到又提示不要使用snap版本的 "),M,n(" 又重新卸载了snap的 "),O,n(" , 使用上面讲到的源码安装了一遍。再次安装，"),Q,n(" 的版本依然不符合，那直接升级一下就好了。安装 "),W,n("升级一下，执行了好几遍升级命令，提示已经把rust相关的环境升级了， 但是使用 "),X,n("查询出来仍然是1.66版本，靠着直觉猜测大概又是使用命令行安装的cargo出现了问题。果然，卸载之后，再执行安装就好了。")]),Y,e("ul",null,[e("li",null,[e("a",Z,[n("Linux上配置LunarVim：快速初始化Neovim，让你的文本编辑更加清爽和强大"),s(o)])]),e("li",null,[e("a",$,[n("rust 是否有命令将Cargo更新到最新的官方版本？"),s(o)])])])])}const ae=a(d,[["render",ee],["__file","2.html.vue"]]);export{ae as default};