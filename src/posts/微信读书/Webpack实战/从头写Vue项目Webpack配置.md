---
title: 从头写Vue项目的Webpack配置
icon: pen-to-square
date: 2024-01-31
category:
  - 微信读书
tag:
  - Webpack
  - Vue

contributors: false
editLink: false
comment: false
---

# 从头写Vue项目的Webpack配置

大部分与React的配置相同，相同的内容不再赘述

## Webpack配置

项目项目使用的是Vue3, 与教程中使用的vue-style-loader加载样式不同，Vue3项目可以使用style-loader来加载 `.vue`文件中的less样式，

此外特别使用了 `vue/dist/vue.runtime.esm-browser.js`来处理 `.vue`文件，提高Webpack的tree-shaking效果

具体的Webpack配置如下

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = () => {
    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/main.ts',
        // 如果为生产版本则为资源加上hash值进行缓存
        output: {
            chunkFilename: isProduction ? '[name].[chunkhash:8].chunk.js' : '[name].chunk.js',
            filename: isProduction ? '[name].[chunkhash:8].js' : '[name].js'
        },
        devServer: {
            open: true,
            port: 3000,
            compress: true,
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false
                        }
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.less$/i,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                // 静态资源
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        resolve: {
            alias: {
                // 对vue单独配置规则，使webpack更有效tree-shaking
                vue$: 'vue/dist/vue.runtime.esm-browser.js', // dist目录下有多个资源项可使用
            },
            extensions: ['.js', '.ts', '.vue', '.less'],
        },
        plugins: [
            new VueLoaderPlugin(),
            // 单入口文件
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            isProduction ? new MiniCssExtractPlugin({
                // filename: '[name].css',
                // chunkFilename: '[name].chunk.css'
                // 使用给资源加上hash值以便浏览器缓存
                filename: '[name].[contenthash:8].css',
                chunkFilename: '[name].[contenthash:8].chunk.css'
            }) : null,
        ].filter(Boolean) // 使用Boolean函数过滤 Boolean()转换函数可以做回调函数过滤
    }
}
```

## 项目运行测试

运行之前需要编写 `App.vue`和入口文件 `main.ts`

**编写App.vue**

```vue
<template>
  <div class="background">
    <h1>Hello Vue</h1>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
@color: hotpink;
.background {
  height: 100vh;
  color: @color;
  background-image: url("./images/bg.jpg");
}
</style>

```

**编写main.ts**

```typescript
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
```

**运行结果**

![image-20240131170407394](images/image-20240131170407394.png)