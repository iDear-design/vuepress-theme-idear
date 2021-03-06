---
title: RSS
date: 2019-12.18
---

## Introduction
RSS plugin only for vuepress-theme-idear.

### Name

- **As plugin**: `@idear-vuepress/vuepress-plugin-rssProduce`

## Option API

### site_url

- required: `true`
- description: 网站地址
- example: `idear-design.maxiaoqu.com/vuepress-theme-idear`

### copyright

- required: `false`
- description: 版权
- default: `'${$themeConfig.author} ${$themeConfig.startYear}'`
- example: `maxiaoqu 2019`

### filter

- required: `false`
- description: 博客的过滤器
- default: `(frontmatter) => true`
- example: `(frontmatter) => { return [true|false] }`

### count

- required: `false`
- description: 显示最近多少篇博客
- default: `20`
- example: `20`