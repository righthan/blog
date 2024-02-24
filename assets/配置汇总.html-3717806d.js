import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as l,a as s,b as n,d as o,f as c}from"./app-b5e884a8.js";const i={},r=s("h1",{id:"webpack配置汇总",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#webpack配置汇总","aria-hidden":"true"},"#"),n(" Webpack配置汇总")],-1),u={href:"https://www.webpackjs.com/",target:"_blank",rel:"noopener noreferrer"},d=c(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 动态Html, 处理资源路径, 加载index.html(如果不使用插件dist中需要手动放入html)</span>
<span class="token keyword">const</span> Analyzer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-bundle-analyzer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin<span class="token punctuation">;</span> <span class="token comment">// Webpack分析工具</span>
<span class="token keyword">const</span> DashboardPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-dashboard/plugin&#39;</span><span class="token punctuation">)</span> <span class="token comment">// webpack打包信息展示工具</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// filename</span>
        <span class="token comment">// 指定打包js产物的文件名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 打包成一个bundle--&gt;main.js</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可选id, name等...</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name]@[chunkhash].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 名字@hash模式打包, 有利于客户端利用hash值缓存, 如果对应模块代码没有做出修改, 多次打包hash值不会改变</span>
        <span class="token comment">// publicPath</span>
        <span class="token comment">// 指定资源请求的路径, 下面配置打包出来script标签src=&#39;/dsit/assets&#39;</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/dist/assets/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 使用live-server预览, 主页的地址是/dist下面的(locahohost:5500/dist/index.html), 如果使用/assets则是访问与dist同级的assets</span>
        <span class="token comment">// chunkFileName</span>
        <span class="token comment">// 配置提取的异步chunk的名字, 只要文件没有改变, 就算删除了生成的dist下次打包的hash也不变</span>
        <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[name]@[chunkhash].js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// mode</span>
    <span class="token comment">// webpack模式</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span><span class="token comment">// 拥有很多默认的配置项</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span> <span class="token comment">// production模式有默认的js压缩, css压缩(可修改)</span>
    <span class="token comment">// source-map</span>
    <span class="token comment">// webpack5在mode:&#39;develpment&#39;不开启source-map也能查看源代码, mode:&#39;production&#39;需要开启才能使用source-map</span>
    <span class="token doc-comment comment">/**
     * source-map安全
     * 1.hidden-source-map: 产出source-map但不在bundle中引用, 可以上传map到第三方服务,如Sentry追溯源码
     * 2.nosources-source-map: 只展示错误出现的相关源码和行号信息, 相对source-map安全一些
     * 3.nginx设置访问&quot;.map&quot;白名单为公司内网
     */</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;source-map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 还有cheap-source-map、eval-source-map是简略版本(完整的构建时间长), 开发环境使用cheap-module-eval-source-map打包速度和还原度适中</span>

    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// 1-4章</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// webpack按照数组从后往前处理, 链式调用loader, 最后生效的放前面</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// 排除和包括目录, 实际项目中有多种灵活配置方式</span>
                <span class="token comment">// exclude优先级高于include</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 排除node_modules打包速度更快, 是必要的</span>
                <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 如果你提供了 Rule.include 选项，就不能再提供 Rule.resource, 下面是等价配置</span>
                <span class="token comment">// 等价写法: 使得看起来更集中, 此处resource与上面的test, exlude等价</span>
                <span class="token comment">// resource:{</span>
                <span class="token comment">//     test:/\\.css$/,</span>
                <span class="token comment">//     exlude:/node_moudles/</span>
                <span class="token comment">// },</span>
                <span class="token comment">// issuer配置异常, 仍需考虑</span>
                <span class="token literal-property property">issuer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token comment">// 只有特定目录下的目录中import的css才使用上面use中的style-loader</span>
                    <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token comment">// will include any paths relative to the current directory starting with \`app/styles\`</span>
                        <span class="token comment">// e.g. \`app/styles.css\`, \`app/styles/styles.css\`, \`app/stylesheet.css\`</span>
                        path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;app/styles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token comment">// add an extra slash to only include the content of the directory \`vendor/styles/\`</span>
                        path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;vendor/styles/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 使用enforce配置对所有loader转换之前的代码使用eslint(配置异常, 仍需考虑)</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// enfore指定loader的作用顺序</span>
                <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 取值pre(所有loader之前), inline(不推荐使用), normal(上面css-loader直接定义的就是normal), post(loader之后)</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// file-loader使得js中可以加载各种文件</span>
            <span class="token comment">// 也可以使用webpack5中内置的方式</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.(png|jpg|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// webpack5内置文件导入方式:</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.(png|jpg|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 第5章 样式加载</span>
            <span class="token comment">// css样式文件提取</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// 提取css样式</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;../&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;css-loader&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// css样式预加载(less, sass)</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.\\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 6 代码分片,</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * splitChunks具有默认的提取模式, 提取体积限制
         * 1. chunk可共享或是来自node_modules
         * 2. 提取之后的Js chunk &gt;20kb, Css chunk &gt; 50kb, 如果资源体积过小, 优化效果也一般
         * 3. 按需加载时(动态script插入), 并行请求资源最大值&lt;=30(因为不希望同时加载过多资源)
         * 4. 首次加载时，并行请求的资源数最大值&lt;=30。因为页面首次加载时往往对性能的要求更高，我们可将它手动设置为更低
         */</span>
        <span class="token comment">// 下面的配置会生成一个vendors-node_modules_xxx, 例子中就是提取react模块</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 对异步资源(import()函数加载的内容)不配置chunks也能生效,仅对异步资源如此(因为下方的async是默认)</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token comment">//3个可选值，分别为async（默认, 提取异步chunk）、initial(只对入口chunk生效)和all(开启async和initial两种模式)</span>
            <span class="token comment">// 下面是splitChunks的默认配置(可选择性修改)</span>
            <span class="token comment">// chunks: &quot;async&quot;,</span>
            <span class="token comment">// //minSize、minChunks、maxAsyncRequests、maxInitialRequests都属于匹配条件</span>
            <span class="token comment">// minSize: 20000,</span>
            <span class="token comment">// minRemainingSize: 0,</span>
            <span class="token comment">// minChunks: 1,</span>
            <span class="token comment">// maxAsyncRequests: 30,</span>
            <span class="token comment">// maxInitialRequests: 30,</span>
            <span class="token comment">// enforceSizeThreshold: 50000,</span>
            <span class="token comment">// cacheGroups:  // 分离chunks时的规则。默认情况下两种——vendors和default</span>
            <span class="token comment">// //vendors用于提取所有node_modules中符合条件的模块，default则作用于被多次引用的模块</span>
            <span class="token comment">// // 我们可以对下面的规则进行增加或者修改，如果想要禁用某种规则，也可以直接将其置为false</span>
            <span class="token comment">// {</span>
            <span class="token comment">//     vendors: // vendors用于提取所有node_modules中符合条件的模块</span>
            <span class="token comment">//     {</span>
            <span class="token comment">//         test: /[\\\\/]node_modules[\\\\/]/,</span>
            <span class="token comment">//         priority: -10,</span>
            <span class="token comment">//     },</span>
            <span class="token comment">//     // default则作用于被多次引用的模块</span>
            <span class="token comment">//     default: {</span>
            <span class="token comment">//         minChunks: 2,</span>
            <span class="token comment">//         priority: -20,</span>
            <span class="token comment">//         reuseExistingChunk: true,</span>
            <span class="token comment">//     },</span>
            <span class="token comment">// },</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 提取css</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[id].css&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 动态index.html(自动引入打包生成的js文件)</span>
        <span class="token comment">// new HtmlWebpackPlugin()默认凭空创建一个index.html, 个性化需求可以指定使用的模板html文件</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 动态Html, 处理资源路径, 加载index.html(如果不使用插件dist中需要手动放入html) </span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./public/index.html&#39;</span> <span class="token comment">// 使用模板文件,而不是默认凭空创建, 目录就是相对配置文件的目录</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">Analyzer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 打包资源大小分析工具</span>
        <span class="token keyword">new</span> <span class="token class-name">DashboardPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 10 打包缓存</span>
    <span class="token doc-comment comment">/**
     * 缓存生成的 webpack 模块和 chunk，来改善构建速度
     * cache 会在开发 模式被设置成 type: &#39;memory&#39; 而且在 生产 模式 中被禁用
     * cache: true 与 cache: <span class="token punctuation">{</span> type: &#39;memory&#39; <span class="token punctuation">}</span> 配置作用一致。 传入 false 会禁用缓存
     */</span>
    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;filesystem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 另一个是内存缓存memory</span>
        <span class="token literal-property property">buildDependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">importantDependency</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// webpack开发服务(&gt;=4.0.0)默认开启HMR(模块热更新)</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">directory</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 利用gzip压缩</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(m,v){const a=p("ExternalLinkIcon");return t(),l("div",null,[r,s("p",null,[n("看完了《Webpack实战：入门、进阶与调优》(第2版), 同时参考了[Webpack官网]["),s("a",u,[n("https://www.webpackjs.com/"),o(a)]),n("]的一些内容，把书里提到的基本内容都罗列到了一个配置文件中方便复习，为了显示效果，重复的配置项没有注释掉。")]),d])}const g=e(i,[["render",k],["__file","配置汇总.html.vue"]]);export{g as default};
