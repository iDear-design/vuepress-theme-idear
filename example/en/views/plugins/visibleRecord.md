---
title: visibleRecord Girl
date: 2019-12-13
---

## Introduction

![demo.png](./images/visibleRecord_1.png)

`visibleRecord` plugin for vuepress-theme-idear or other vuepress themes.

### Name

- **As plugin**: `@idear-vuepress/vuepress-plugin-visibleRecord`
- **As component**: `visibleRecord` (auto appear in the page, no need for extra code)

### Buttons

|Button|Use|Default Tip|
|-|-|-|
|home|Back to home of blog|You are the apple of my eye and I want to bring you home|
|message|Show site title|'Welcome to ' + Your site title ($site.title) |
|theme|Modify theme|OK, I hope you love my other friends|
|close|Close visibleRecord|I love you most|
|info|Jump to plugin's GitHub page|Do you want to know more about me?|

::: warning
This plugin hasn't been translated to English yet and the above `default tip` is merely translation of the Chinese version.
:::

## Option API

> default parameters when using the plugin

**Attributes**

### theme

- description: default theme
- type: `Array`
- default: `['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']`
- accepted-values:
  - if theme includes only one value, default to this theme and hide the button to change theme
  - if theme includes multiple values, default to the first theme and randomly switch to other themes when `theme` button is clicked
  - note the case of theme name
  - see [available themes](#available-themes) at the end

### clean
- description: if clean mode is on (hide all buttons)
- type: `Boolean`
- default: `false`
- accepted-values: `true | false`

### messages

- description: message tip
- type: `Object`
- default:
  ```json
    {
      welcome: '欢迎来到 ' + 您的站点名称（$site.title）,
      home: '心里的花，我想要带你回家。',
      theme: '好吧，希望你能喜欢我的其他小伙伴。',
      close: '你知道我喜欢吃什么吗？痴痴地望着你。'
    }
  ```
- accepted-values: see the end

### messageStyle

- description: customize message style
- type: `Object`
- default:
    ```json
    {
      right: '68px',
      bottom: '190px'
    }
    ```

### modelStyle

- description: customize model style
- type: `Object`
- default:
    ```json
    {
      right: '90px',
      bottom: '-20px',
      opacity: '0.9'
    }
    ```

### btnStyle

- description: customize button style
- type: `Object`
- default:
    ```json
    {
      right: '90px',
      bottom: '40px',
    }
    ```

### width

- description: theme width
- type: `Number`
- default: `150`

### height

- description: theme height
- type: `Number`
- default: `220`

## Available Themes

![themes.png](./images/visibleRecord_2.png)

## About

- reference plugin: [@Qi](https://github.com/QiShaoXuan) https://github.com/QiShaoXuan/vuepress-plugin-cat
- theme repo： [@Qi](https://github.com/QiShaoXuan) https://github.com/QiShaoXuan/live2DModel
- theme auto hides if failed to load
- speed is unstable when loading static assets
- could use other theme by downloading the plugin and change theme url