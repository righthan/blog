import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "Lee",
  description: "Lee's blog",
  
  theme

  // Enable it with pwa
  // shouldPrefetch: false,
});
