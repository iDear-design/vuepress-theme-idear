---
title: back-to-top
date: 2019-12-13
---

## 介绍

![demo.png](./images/backToTop.png)

Back-to-top plugin for vuepress-theme-idear or other vuepress theme.

### 名字

- **As plugin**: `@idear-vuepress/vuepress-plugin-back-to-top`
- **As component**: `BackToTop（自动出现在页面中，无需添加额外代码）`

## Option API

### icon

- description: 按钮中间的图标名字
- type: `String`
- default: `idear-up`
- accepted values: 主题内置的其他图标

### visibilityHeight

- description: 按钮出现时的最小滚动高度
- type: `Number`
- default: `400`

### customStyle

- description: 自定义按钮的样式
- type: `Object`
- default: 
  ```json
  {
    right:'1rem',
    bottom: '6rem',
    width: '2.5rem',
    height: '2.5rem',
    'border-radius': '.25rem',
    'line-height': '2.5rem',
    backgroundColor: 'rgba(231, 234, 241,.5)'
  }
  ```
