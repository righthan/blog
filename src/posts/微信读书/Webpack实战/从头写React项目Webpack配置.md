---
title: 从头写React项目的Webpack配置
icon: pen-to-square
date: 2024-01-31
category:
  - 微信读书
tag:
  - Webpack
  - React

contributors: false
editLink: false
comment: false
---

# 从头开始写 React 和 vue 的 Webpack 配置

使用 Webpack 从头搭建一个 React 项目，包括下面的几个部分

- 基础配置：资源的输入和输出等
- JavaScript 处理：babel 以及 React 相关的插件
- TypeScript 处理：typescript 和 ts-lader
- 样式处理：less、CSS 在不同环境下的处理
- 静态资源处理：字体、图片的加载
- 优化：开发环境和生产环境的配置调整。

## Webpack 配置

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV === "production";

module.exports = () => {
  return {
    mode: isProduction ? "production" : "development",
    // entry: './src/index.tsx',
    // 如果有多个入口文件，可以改成多入口, 同时需要修改plugin中的Html插件
    // entry: {
    //     index: './src/index.tsx',
    //     details: './src/details.tsx'
    // },
    // 多页应用代码优化
    entry: {
      index: {
        import: "./src/index.tsx",
        dependOn: "shared",
      },
      details: {
        import: "./src/details.tsx",
        dependOn: "shared",
      },
      shared: ["react", "react-dom"],
    },
    // 如果为生产版本则为资源加上hash值进行缓存
    output: {
      chunkFilename: isProduction
        ? "[name].[chunkhash:8].chunk.js"
        : "[name].chunk.js",
      filename: isProduction ? "[name].[chunkhash:8].js" : "[name].js",
    },
    devServer: {
      open: true,
      port: 3000,
      compress: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.less$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
        // 静态资源
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".less", ".css"],
    },
    plugins: [
      // 单入口文件
      // new HtmlWebpackPlugin({
      //     template: './public/index.html'
      // }),
      // 多入口文件
      new HtmlWebpackPlugin({
        filename: "index.html", // 文件名称
        template: "./public/index.html",
        chunks: ["shared", "index"], // 相关代码块的名称
      }),
      new HtmlWebpackPlugin({
        filename: "details.html",
        template: "./public/index.html",
        chunks: ["shared", "details"],
      }),
      isProduction
        ? new MiniCssExtractPlugin({
            // filename: '[name].css',
            // chunkFilename: '[name].chunk.css'
            // 使用给资源加上hash值以便浏览器缓存
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].chunk.css",
          })
        : null,
    ].filter(Boolean), // 使用Boolean函数过滤 Boolean()转换函数可以做回调函数过滤
  };
};
```

## 项目运行测试

使用 TypeScript 编写入口文件并导入 less 样式,测试项目的渲染结果

由于项目中使用到了 Node 环境的 `process.env.NODE_ENV`需要修改启动命令或是使用.env 文件配置

> 参考文章：[webpack 环境配置之 process.env - 掘金 (juejin.cn)](https://juejin.cn/post/6989812435561480200)

修改启动命令的方式如下：

```json
// package.json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack serve",
    "build": "cross-env NODE_ENV=production webpack build"
  }
}
```

**入口文件 index.tsx**

```ts
import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles";
type Message = {
  index: number;
  title: string;
  body: string;
};
const msg: Message = {
  index: 1,
  title: "hello",
  body: "hello react",
};
const App = () => (
  <div key={msg.index}>
    <h1>{msg.title}</h1>
    <p>{msg.body}</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

**less 样式文件 style.less**

样式中引入了一张资源图片，测试静态资源的导入

```less
@color: hotpink;

body {
  color: @color;
  background-image: url("../images/bg.jpg");
}
```

**运行截图**

项目成功运行

![image-20240131164257998](images/image-20240131164257998.png)
