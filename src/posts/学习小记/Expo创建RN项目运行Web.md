---
title: Expo创建RN项目运行Web
category:
  - 学习小记
tag:
  - React Native

contributors: false
editLink: false
comment: false
---

# Expo创建RN项目运行

一开始直接使用的是使用Android方式通过`adb`在手机上直接运行，但是方式较为复杂，而且在启动时有时会卡住一段时间，似乎没有解决方法，就想着先以Web方式运行方便开发，确实使用Web方式运行和调试方便了很多。

## 从Android项目使用Web运行

1. 安装必要依赖

```bash
npx expo install react-native-web react-dom @expo/metro-runtime
```

2. 解决跨域问题

​	但查看官方文档和论坛，似乎没有给出怎么解决Expo项目中的跨域问题，而且不行，本想着使用`Webpack`的 Dev  Server解决，但是`Expo SDK >50`的已经启用了`Expo Webpack`，而且迁移文档中也说明了无法使用Dev Server（[Migrate from Expo Webpack - Expo Documentation](https://docs.expo.dev/router/migrate/from-expo-webpack/)），也无法使用React的方式在 `package.json`中添加proxy解决

```txt
Dev server
In Expo Router, all platforms are hosted from the same dev server on the same port. This is convenient for emulating the production behavior of the app. All logs and hot module reloading go through the same port as well.

Due to limitations on native, hosting with fake HTTPS is not currently supported. This feature is less important now than in 2018, as you can test secure features such as camera and location on localhost using a web browser like Chrome.
```

最终，通过在nestjs服务端开启了跨域（只需使用一行代码）[CORS | NestJS 中文文档 | NestJS 中文网](https://www.nestjs.com.cn/security/cors)



## 项目打包

> [React Native + Expo打包，热更新 - 掘金 (juejin.cn)](https://juejin.cn/post/7161013017721700366)

