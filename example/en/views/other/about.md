---
title: vuepress-theme-timi
date: 2019-12-06
---

::: tip Introduction
1. This is a Vuepress theme with the necessary features for a blog: categories, tags, pagination, comments, etc. <br/>
2. This minimalistic theme modifies the default theme but the default configs still apply
3. You could open [码小趣](www.maxiaoqu.com) to see an example
:::

## Play Together

### 1.x

As more users asked me why `vuepress-theme-timi@0.x` can't be used on top of `vuepress@1.x`, originally I wanted to fixed some simple bugs but finally decided to develop `vuepress-theme-timi@1.x`. At another 2:30a.m. (quite productive at night), I quietly started.

The core update was the offical plugin `@vuepress/plugin-blog`, which doesn't filter data any more but stored the metadata in `$categories` and `$tags`. The plugin traded simpler realization of categorization and tagging with limitations. In the following 2 or 3 days, I was migrating features and debugging.

During the development of `vuepress-theme-timi@1.x`, I understand deeper the importance of modular programming. If I had not modulazied some features but directly copy and paste, I wouldn't have updated the theme that easily. The more modules a project is divided into, the more flexible in actual usage.

### CLI

I sincerely hope more friends will opt in and better this theme. If time allows, I will open source a CLI (a scaffolding tool) to auto generate a blog. Users can go over the config step and directly write great content. It has been my aspiration to make this theme incorporate more features and easier to use.