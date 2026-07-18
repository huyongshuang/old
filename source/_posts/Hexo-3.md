---
title: Hexo教程（三） - 主题
date: 2024/10/3 9:32:12
updated: 2025/12/16 17:04:37
tags:
  - Hexo
  - 教程
categories:
  - 博客
  - Hexo
thumbnail: /2024/10/3-Hexo-3/0.png
cover:
excerpt: "这一部分的主要内容是Hexo主题的安装和使用，下面以Redefine主题为例，内容大致分为安装Redefine主题和配置主题两部分。"
---
* Hexo主题官网：[https://hexo.io/themes/](https://hexo.io/themes/)
* 搜索一个自己喜欢的主题，点击“Visit preview site”进入预览网站，找到主题文档（Docs）。
* 下面以Redefine主题为例，文档官网：[https://redefine-docs.ohevan.com/zh](https://redefine-docs.ohevan.com/zh)
## 一、安装Redefine主题
### 1、安装主题
```bash
npm install hexo-theme-redefine@latest
```
### 2、启用主题
在Hexo根目录的_config.yml文件中，将theme值修改为redefine。
```yaml
theme: redefine
```
### 3、添加主题配置文件
点击 <a href="{% asset_path config.redefine.yml %}" download="_config.redefine.yml">**下载**</a> 主题配置文件_config.redefine.yml并将其移动到Hexo根目录下。
点击 <a href="{% asset_path config.redefine - zh.yml %}" download="_config.redefine.yml">**下载**</a> 主题配置文件中文注释版。
### 4、更新主题
在Hexo根目录执行和安装时同样的命令更新主题：
```bash
npm install hexo-theme-redefine@latest
```
部署完如下图：
{% asset_img 1.png 图1 %}
## 二、配置主题
### 1、基本信息
下面为配置文件示例：
```yaml
# 基本信息
# Docs: https://redefine-docs.ohevan.com/basic/info
info:
  # 网站标题
  title: 胡永双
  # 网站副标题
  subtitle: 胡永双的Blog
  # 作者姓名
  author: 胡永双
  # 站点地址
  url: https://huyongshuang.github.io

# 默认图片
# Docs: https://redefine-docs.ohevan.com/basic/defaults
defaults:
  # 站点图标
  favicon: /images/favicon.ico
  # 站点Logo
  logo: /images/logo.jpg
  # 站点头像
  avatar: /images/avatar.png

# 颜色配置
# Docs: https://redefine-docs.ohevan.com/basic/colors
colors:
  # 主题色
  primary: "#A31F34"
  # 二级色
  secondary:
  # 默认主题模式初始值（将被“偏好颜色方案”选项覆盖）
  default_mode: light # light, dark
```
在/source/images文件夹下添加下面的文件：
{% asset_img 2.png 图2 %}
效果图：
{% asset_img 3.png 图3 %}
### 2、第一屏（home_banner）
下面为配置文件示例：
```yaml
# 第一屏
# Docs: https://redefine-docs.ohevan.com/home/home_banner
home_banner:
  # 是否启用第一屏
  enable: true
  # 背景图片样式
  style: fixed # static或者fixed
  # 背景图片
  image: 
    light: /images/light.png # 亮色模式
    dark: /images/dark.png # 暗色模式
  # 主标题
  title: 胡永双的Blog
  # 副标题
  subtitle:
    text: [
      "他们应该多听，少说，对差异满怀激情，热爱那些不同于他们的想法。",
      "我们所度过的每个平凡的日常，也许就是连续发生的奇迹。",
      "只要有想见的人，就不再是孤身一人了。",
      "世界上只有一种英雄主义，就是在认清生活的真相后依然热爱生活。",
      "别让任何人消耗你内心的晴朗，生活应该是被热爱的人和事填满。"] # 文字内容
    hitokoto:  # 一言配置
      enable: false # 是否启用一言
      show_author: false # 是否显示作者
      api: https://v1.hitokoto.cn # API地址，可以添加类型. 见：https://developer.hitokoto.cn/sentence/#%E5%8F%A5%E5%AD%90%E7%B1%BB%E5%9E%8B-%E5%8F%82%E6%95%B0
    typing_speed: 100 # 打字速度 (ms)
    backing_speed: 80 # 退格速度 (ms)
    starting_delay: 500 # 开始延迟 (ms)
    backing_delay: 1500 # 退格延迟 (ms)
    loop: true # 是否循环
    smart_backspace: true # 是否智能退格
  # 标题和副标题的文字颜色
  text_color: 
    light: "#fff" # 亮色模式
    dark: "#d1d1b6" # 暗色模式
  # 文字样式
  text_style: 
    # 标题字体大小
    title_size: 2.8rem
    # 副标题字体大小
    subtitle_size: 1.5rem
    # 标题与副标题行高
    line_height: 1.2
  # 自定义字体
  custom_font: 
    # 是否启用自定义字体
    enable: false
    # 字体名称
    family: 
    # 字体CSS文件链接
    url:
  # 社交链接
  social_links:
    # 是否启用
    enable: true
    # 社交链接类型
    style: default # default, reverse, center
    # 社交链接
    links:
      github: https://github.com/huyongshuang # 你的 GitHub 地址
      instagram: # 你的 Instagram 地址
      zhihu: https://www.zhihu.com/people/huyongshuang # 你的 ZhiHu 地址
      twitter:  # 你的 twitter 地址
      email: 746059847@qq.com # 你的邮箱
      fa-solid fa-circle-user: https://huyongshuang.mysxl.cn/
      /images/bilibili.png: https://space.bilibili.com/400547411
      # ...... # 你可以添加更多
    # 二维码社交链接
    qrs:
      weixin: /images/weixin.png # 你的微信二维码图片链接地址
      qq: /images/qq.png
      # ...... # 你可以添加更多
```
对于fa-brands图标，直接输入图标名称。对于其他FontAwesome图标，使用全名。
FontAwesome图标名称查询：打开链接：[https://fontawesome.com/search](https://fontawesome.com/search)，如下图，选择一个图标点击打开，将`class=" "`引号里面的内容复制出来即可。
{% asset_img 4.png 图4 %}
在/source/images文件夹下添加下面的文件：
{% asset_img 5.png 图5 %}
效果图：
{% asset_img 6.png 图6 %}
### 3、导航栏和侧边栏
下面为配置文件示例：
```yaml
# 导航栏
# Docs: https://redefine-docs.ohevan.com/home/navbar
navbar:
  # 自动隐藏导航栏
  auto_hide: false
  # 导航栏背景颜色
  color:
    left: "#f78736" # 左侧
    right: "#367df7"  # 右侧
    transparency: 35 # 透明度 (10-99)
  # 导航栏宽度（通常无需修改）
  width:
    home: 1200px # 主页
    pages: 1000px # 其他页面
  # 导航栏链接
  links:
    归档: 
      path: /archives 
      icon: fa-regular fa-archive
    分类: 
      path: /categories
      icon: fa-regular fa-chart-bar
    标签:
      path: /tags
      icon: fa-regular fa-align-center
    关于: 
      icon: fa-regular fa-user
      submenus:
        关于我: /about
        Github: https://github.com/huyongshuang
        Blog: https://huyongshuang.github.io
        Friends: /friends
    链接: 
      icon: fa-regular fa-link
      submenus:
        链接1: /link1
        链接2: /link2
        链接3: /link3
    # ...... # 你可以添加更多
  # 导航栏搜索（本地搜索）. 需要hexo-generator-searchdb (npm i hexo-generator-searchdb). 见：https://github.com/theme-next/hexo-generator-searchdb
  search:
    # 是否启用
    enable: true
    # 页面加载时预加载搜索数据
    preload: true

# 首页文章
# Docs: https://redefine-docs.ohevan.com/home/home
home:
  # 侧边栏设置
  sidebar:
    enable: true # 是否启用侧边栏
    position: left # 侧边栏位置. left, right
    first_item: menu # 侧边栏显示顺序，侧边栏的第一项. menu, info
    announcement: 这里是胡永双的Blog # 公告文本
    show_on_mobile: true # 是否在移动工作表菜单上显示侧边栏导航
    links:
      Home: # 一级菜单栏名称
        path: / # 网址，可以为相对路径或者绝对路径
        icon: fa-regular fa-house # Fontawesome图标名称（可选）
      归档: # 显示的名称
        path: /archives # 路径
        icon: fa-regular fa-archive # 图标，可以为空
      分类: # 显示的名称
        path: /categories # 路径
        icon: fa-regular fa-folder # 图标，可以为空
      标签: # 显示的名称
        path: /tags # 路径
        icon: fa-regular fa-tags # 图标，可以为空
      # ...... # 你可以添加更多
  # 文章日期格式
  article_date_format: auto # auto, relative, YYYY-MM-DD, YYYY-MM-DD HH:mm:ss etc.
  # 文章摘要自定义长度
  excerpt_length: 200 # 文章摘录的最大长度
  # 文章类别可见性
  categories:
    enable: true  # 是否启用
    limit: 3 # 要显示的最大类别数
  # 文章标签可见性
  tags:
    enable: true  # 是否启用
    limit: 3  # 要显示的最大标签数
```
除了/archives会自动创建，其余（/categories、/tags、/about等等）均需要自己创建，创建命令：
```bash
hexo new page categories
hexo new page tags
hexo new page about
```
下图中“主页”为英文，可以在Hexo配置文件（_config.yml）中修改language配置为：language: zh-CN即可，修改配置后，设置的英文导航栏名称也会翻译为中文。
效果图：
{% asset_img 7.png 图7 %}
这里只介绍以上三种主题配置设置，更多设置请参考主题 [**官方文档**](https://redefine-docs.ohevan.com/zh)。
## 三、插件
Redefine主题官方文档中涉及到的插件：
* [**导航栏搜索：hexo-generator-searchdb**](https://redefine-docs.ohevan.com/zh/docs/home/navbar#搜索)
* [**RSS/Atom订阅源文件：hexo-generator-feed**](https://github.com/hexojs/hexo-generator-feed)
* [**Mermaid JS流程图：hexo-filter-mermaid-diagrams**](https://redefine-docs.ohevan.com/zh/docs/plugins/mermaid)
* [**Mathjax数学公式：hexo-filter-mathjax**](https://redefine-docs.ohevan.com/zh/docs/plugins/mathjax)
* [**资源压缩：hexo-all-minifier**](https://redefine-docs.ohevan.com/zh/docs/plugins/all_minifier)
* [**字数统计：hexo-wordcount**](https://redefine-docs.ohevan.com/zh/docs/posts/articles#字数统计)

安装命令：
```bash
# 导航栏搜索
npm install hexo-generator-searchdb --save
# RSS/Atom订阅源文件
npm install hexo-generator-feed --save
# Mermaid JS流程图
npm install hexo-filter-mermaid-diagrams
# Mathjax数学公式
npm install hexo-filter-mathjax
# 资源压缩
npm install hexo-all-minifier
# 字数统计
npm install hexo-wordcount
```