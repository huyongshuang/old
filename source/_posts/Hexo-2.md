---
title: Hexo教程（二） - 配置
date: 2024/10/2 12:23:56
updated: 2025/12/15 15:48:42
tags:
  - Hexo
  - 教程
categories:
  - 博客
  - Hexo
thumbnail: /2024/10/1-Hexo-1/0.png
cover:
excerpt: 如果你安装了Hexo主题，那么大多数设置都将在主题配置文件_config.[theme].yml中进行操作，因为主题配置文件的优先级高于Hexo配置文件，因此下面关于Hexo配置文件的介绍大多可不必理会，我将会在最后介绍几个常用的Hexo配置文件的设置。
---
**Hexo配置文件详解**
在_config.yml文件中修改大部分的配置。点击 <a href="{% asset_path config.yml %}" download="_config.yml">**下载**</a> Hexo配置文件中文注释版。
* 阅前说明：如果你安装了Hexo主题，那么大多数设置都将在主题配置文件_config.[theme].yml中进行操作，因为主题配置文件的优先级高于Hexo配置文件，因此下面关于Hexo配置文件的介绍大多可不必理会，我将会在最后介绍几个常用的Hexo配置文件的设置。
#### 1、网站（Site）
```yaml
title: Hexo # 网站标题
subtitle: '' # 网站副标题
description: '' # 网站描述
keywords: # 网站的关键词
author: John Doe # 作者名字
language: en # 网站使用的语言
timezone: '' # 网站时区，国内建议选择Asia/Shanghai
```
#### 2、网址（URL）
```yaml
url: http://example.com # 网站地址
permalink: :year/:month/:day/:title/ # 文章的永久链接格式
permalink_defaults: # 永久链接中各部分的默认值
pretty_urls: # 改写permalink的值来美化URL
  trailing_index: true # 是否在永久链接中保留尾部的index.html，设置为false时去除
  trailing_html: true # 是否在永久链接中保留尾部的.html，设置为false时去除，对尾部的index.html无效
```
#### 3、目录（Directory）
```yaml
source_dir: source # Source文件夹存储内容的位置
public_dir: public # Public文件夹生成静态站点的位置
tag_dir: tags # 标签文件夹
archive_dir: archives # 归档文件夹
category_dir: categories # 分类文件夹
code_dir: downloads/code # Include code文件夹，source_dir下的子目录
i18n_dir: :lang # 国际化（i18n）文件夹
skip_render: # 跳过渲染
#  - "_posts/test-post.md" # 跳过单个文件，格式：path/file
#  - "_posts/*" # 跳过指定目录下所有文件，格式：dir/*
#  - "_posts/**" # 跳过整个目录（包含所有子目录/文件），格式：dir/**
#  - "*.js" # 跳过所有js文件，格式：*.ext
#  - "scripts/*.js" # 跳过scripts目录下所有js文件，格式：dir/*.ext
```
#### 4、文章（Writing）
```yaml
new_post_name: :title.md # 新文章的文件名称
default_layout: post # 预设布局
titlecase: false # 把标题转换为title case
external_link:
  enable: true # 在新标签中打开链接
  field: site # 对整个网站（site）生效或仅对文章（post）生效
  exclude: '' # 需要排除的域名
filename_case: 0 # 值为1，文件名转换为小写形式；值为2，文件名转换为大写形式
render_drafts: false # 显示草稿
post_asset_folder: false # 启用资源文件夹
relative_link: false # 	把链接改为与根目录的相对位址
future: true # 	显示未来的文章
syntax_highlighter: highlight.js # 语法高亮工具
highlight:
  line_number: true # 代码的行号显示
  auto_detect: false # 自动检测代码语言
  tab_replace: '' # 将代码中的Tab符替换为空字符串
  wrap: true # 开启代码的包裹容器
  hljs: false # 禁用highlight.js自带的hljs-*类名
prismjs:
  preprocess: true # 代码的预处理
  line_number: true # 代码的行号显示
  tab_replace: '' # 将代码中的Tab符替换为空字符串
```
#### 5、首页设置（Home page setting）
```yaml
index_generator: # 生成帖子归档
  path: '' # 博客索引页面的根路径
  per_page: 10 # 每页显示帖子数
  order_by: -date # 帖子排列顺序
```
#### 6、分类&标签（Category & Tag）
```yaml
default_category: uncategorized # 默认分类
category_map: # 分类别名
tag_map: # 标签别名
```
#### 7、Meta generator标签（Metadata elements）
```yaml
meta_generator: true # 是否开启生成<meta name="generator" ...>标签
```
#### 8、日期/时间格式（Date/Time format）
```yaml
date_format: YYYY-MM-DD # 日期格式
time_format: HH:mm:ss # 时间格式
updated_option: 'mtime' # 当Front Matter中没有指定updated时updated的取值
```
#### 9、分页（Pagination）
```yaml
per_page: 10 # 每页显示的帖子数
pagination_dir: page # URL格式
```
#### 10、包括或不包括目录和文件（Include/Exclude file）
```yaml
include:  # 包含隐藏文件
exclude:  # 排除文件或文件夹
ignore:  # 忽略文件/文件夹
```
#### 11、扩展（Extensions）
```yaml
theme: landscape # 当前主题名称
```
#### 12、部署（Deployment）
部署配置见 [**部署到GitHub Pages**](/2024/10/1-Hexo-1#四、部署到GitHub-Pages)
```yaml
deploy:
  type: git
  repo: <repository url> # https://github.com/huyongshuang/huyongshuang.github.io.git
  branch: [branch]
  token: [token]
  message: [message]
```
#### 常用Hexo配置
```yaml
# 网站使用的语言，一般为中文
language: zh-CN

# 使用以下配置，可以在保留生成的HTML文件后缀的情况下，去除永久链接中尾部的.html和index.html
permalink: :year/:month/:day/:title.html
pretty_urls:
  trailing_index: false
  trailing_html: false

# 跳过渲染
skip_render:
  - "_posts/test-post.md" # 跳过单个文件，格式：path/file
  - "_posts/*" # 跳过指定目录下所有文件，格式：dir/*
  - "_posts/**" # 跳过整个目录（包含所有子目录/文件），格式：dir/**
  - "*.js" # 跳过所有js文件，格式：*.ext
  - "scripts/*.js" # 跳过scripts目录下所有js文件，格式：dir/*.ext

# 如果想要更有规律地提供图片和其他资源以及想要将他们的资源分布在各个文章上，请开启下面的设置，执行命令hexo new post Blog后在source/_posts文件夹里生成了和文章同名的资源目录
post_asset_folder: true

# 如果你安装了Hexo主题，当你设置完主题配置后，需要开启下面的设置，才会读取你的主题的配置
theme: redefine

# 使用hexo-deployer-git一键部署时，需要进行以下配置
deploy:
  type: git
  repo: <repository url> # https://github.com/huyongshuang/huyongshuang.github.io.git
  branch: [branch]
  token: [token]
  message: [message]
```