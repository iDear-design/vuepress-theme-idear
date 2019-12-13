---
title: Pagination
date: 2019-12-13
---

## 介绍

![demo.png](./images/pagation.png)

Pagation plugin for vuepress-theme-ido or other vuepress theme.

### 名字

- **As plugin**: `@ido-design/vuepress-plugin-pagation`
- **As component**: `Pagation`（主题开发时使用）

## Option API

### total

- description: 数据总数量
- type: `Number`
- default: `10`

### perPage

- description: 每页多少条
- type: `Number`
- default: `10`

### currentPage

- description: 当前是第几页
- type: `Number`
- default: `1`

### getCurrentPage

- description: 当前是第几页
- type: `Function`