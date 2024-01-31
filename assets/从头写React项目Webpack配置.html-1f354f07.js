import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c as l,a as n,b as s,d as c,f as a}from"./app-ca69f998.js";const i="/blog/assets/image-20240131164257998-ef5efaaa.png",r={},u=a(`<h1 id="从头开始写-react-项目的-webpack-配置" tabindex="-1"><a class="header-anchor" href="#从头开始写-react-项目的-webpack-配置" aria-hidden="true">#</a> 从头开始写 React 项目的 Webpack 配置</h1><p>使用 Webpack 从头搭建一个 React 项目，包括下面的几个部分</p><ul><li>基础配置：资源的输入和输出等</li><li>JavaScript 处理：babel 以及 React 相关的插件</li><li>TypeScript 处理：typescript 和 ts-lader</li><li>样式处理：less、CSS 在不同环境下的处理</li><li>静态资源处理：字体、图片的加载</li><li>优化：开发环境和生产环境的配置调整。</li></ul><h2 id="webpack-配置" tabindex="-1"><a class="header-anchor" href="#webpack-配置" aria-hidden="true">#</a> Webpack 配置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isProduction <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> isProduction <span class="token operator">?</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// entry: &#39;./src/index.tsx&#39;,</span>
    <span class="token comment">// 如果有多个入口文件，可以改成多入口, 同时需要修改plugin中的Html插件</span>
    <span class="token comment">// entry: {</span>
    <span class="token comment">//     index: &#39;./src/index.tsx&#39;,</span>
    <span class="token comment">//     details: &#39;./src/details.tsx&#39;</span>
    <span class="token comment">// },</span>
    <span class="token comment">// 多页应用代码优化</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.tsx&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">&quot;shared&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">details</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&quot;./src/details.tsx&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">&quot;shared&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 如果为生产版本则为资源加上hash值进行缓存</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> isProduction
        <span class="token operator">?</span> <span class="token string">&quot;[name].[chunkhash:8].chunk.js&quot;</span>
        <span class="token operator">:</span> <span class="token string">&quot;[name].chunk.js&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> isProduction <span class="token operator">?</span> <span class="token string">&quot;[name].[chunkhash:8].js&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.jsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token literal-property property">cacheCompression</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            isProduction <span class="token operator">?</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader <span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 静态资源</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff|woff2|eot|ttf|otf)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.less&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 单入口文件</span>
      <span class="token comment">// new HtmlWebpackPlugin({</span>
      <span class="token comment">//     template: &#39;./public/index.html&#39;</span>
      <span class="token comment">// }),</span>
      <span class="token comment">// 多入口文件</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 文件名称</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./public/index.html&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;shared&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 相关代码块的名称</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;details.html&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./public/index.html&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;shared&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;details&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      isProduction
        <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// filename: &#39;[name].css&#39;,</span>
            <span class="token comment">// chunkFilename: &#39;[name].chunk.css&#39;</span>
            <span class="token comment">// 使用给资源加上hash值以便浏览器缓存</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].[contenthash:8].css&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&quot;[name].[contenthash:8].chunk.css&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 使用Boolean函数过滤 Boolean()转换函数可以做回调函数过滤</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目运行测试" tabindex="-1"><a class="header-anchor" href="#项目运行测试" aria-hidden="true">#</a> 项目运行测试</h2><p>使用 TypeScript 编写入口文件并导入 less 样式,测试项目的渲染结果</p><p>由于项目中使用到了 Node 环境的 <code>p<wbr>rocess.env.NODE_ENV</code>需要修改启动命令或是使用.env 文件配置</p>`,8),k={href:"https://juejin.cn/post/6989812435561480200",target:"_blank",rel:"noopener noreferrer"},d=n("wbr",null,null,-1),v=a(`<p>修改启动命令的方式如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development webpack serve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack build&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>入口文件 index.tsx</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./styles/styles&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Message</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  body<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> msg<span class="token operator">:</span> Message <span class="token operator">=</span> <span class="token punctuation">{</span>
  index<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
  body<span class="token operator">:</span> <span class="token string">&quot;hello react&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>msg<span class="token punctuation">.</span>index<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>msg<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>msg<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>less 样式文件 style.less</strong></p><p>样式中引入了一张资源图片，测试静态资源的导入</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@color<span class="token punctuation">:</span></span> hotpink<span class="token punctuation">;</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../images/bg.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行截图</strong></p><p>项目成功运行</p><figure><img src="`+i+'" alt="image-20240131164257998" tabindex="0" loading="lazy"><figcaption>image-20240131164257998</figcaption></figure>',10);function m(b,g){const p=e("ExternalLinkIcon");return o(),l("div",null,[u,n("blockquote",null,[n("p",null,[s("参考文章："),n("a",k,[s("webpack 环境配置之 p"),d,s("rocess.env - 掘金 (juejin.cn)"),c(p)])])]),v])}const x=t(r,[["render",m],["__file","从头写React项目Webpack配置.html.vue"]]);export{x as default};
