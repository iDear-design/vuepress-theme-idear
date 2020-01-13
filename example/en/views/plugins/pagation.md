---
title: Pagination
date: 2019-12-13
---

## Introduction

![demo.png](./images/pagation.png)

Pagination plugin for vuepress-theme-iu or other vuepress theme.

### Name

- **As plugin**: `@iu-design/vuepress-plugin-pagation`
- **As component**: `Pagation` (used in theme development)

## Option API

### total

- description: total amount of data
- type: `Number`
- default: `10`

### perPage

- description: how many posts per page
- type: `Number`
- default: `10`

### currentPage

- description: current page number
- type: `Number`
- default: `1`

### getCurrentPage

- description: get the current page number
- type: `Function`