---
title: Hexo教程（四） - 评论系统
date: 2024/10/4 19:36:23
updated: 2025/12/17 7:54:43
tags:
  - Hexo
  - 教程
categories:
  - 博客
  - Hexo
thumbnail: /2024/10/4-Hexo-4/0.png
cover:
excerpt: "评论系统的插件有很多，很多主题也内置了一些评论系统插件，下面以Redefine主题为例，介绍一下Waline评论系统的用法。"
---
* 评论系统的插件有很多，很多主题也内置了一些评论系统插件，下面以Redefine主题为例，介绍一下Waline评论系统的用法。
官方文档：[https://waline.js.org/guide/get-started/](https://waline.js.org/guide/get-started/)
Waline支持多种部署方式，例如：Vercel，CloudBase，Netlify，Railway，Zeabur等等。大家可以选择自己合适的平台部署，下面以Zeabur部署为例，其他部署方式见官方文档。
#### 1、服务端配置
（1）点击链接：[https://github.com/walinejs/zeabur-starter/fork](https://github.com/walinejs/zeabur-starter/fork)，创建`Zeabur`启动脚手架。在`Repository name`处填写上仓库名后，点击`Create fork`创建。
{% asset_img 1.png 图1 %}
（2）点击链接：[https://dash.zeabur.com](https://dash.zeabur.com)，登录`Zeabur`控制台，点击左下角`Language`改为简体中文。点击`Create New Project`创建新项目，选择第一个`Silicon Valley, United States`，点击`Settings`，在`Project Name`处为新项目设置名称。
{% asset_img 2.png 图2 %}
（3）点击`Deploy New Service`部署新服务，选择`Databases`，再选择`MongoDB`，数据库服务就部署好了。
{% asset_img 3.png 图3 %}
（4）接下来创建`Waline`服务，点击`Add Service`，再点击`Configure GitHub`按照要求配置`GitHub`后，在`GitHub Repo`页面选择最开始Fork出来的项目，点击`Deploy`部署。
{% asset_img 4.png 图4 %}
{% asset_img 5.png 图5 %}
（5）最后给服务添加访问域名`<serverURL>`，左侧选择刚刚创建的`Waline`服务，右侧点击`Networking`选项卡下的`Generate Domain`按钮，输入自己想要的域名前缀并点击`Confirm`，就添加好访问域名了。
{% asset_img 6.png 图6 %}
（6）在浏览器打开刚才设置的访问域名，测试下评论发布。
{% asset_img 7.png 图7 %}
#### 2、客户端配置
把刚才设置的访问域名填写到`_config.redefine.yml`配置文件中。
```yaml
comment:
  config:
    waline:
      serverUrl: https://huyongshuang.zeabur.app
```
效果如下图：
{% asset_img 8.png 图8 %}
#### 3、评论管理
访问`<serverURL>/ui/register`进行注册，或者通过评论框注册账号，首个注册的人会被设定成管理员。管理员登录后，即可看到评论管理界面，可以修改、标记或删除评论。
{% asset_img 9.png 图9 %}
#### 4、表情设置
参考文档：[https://waline.js.org/guide/features/emoji.html](https://waline.js.org/guide/features/emoji.html)
在`_config.redefine.yml`配置文件中写入表情预设URL。
```yaml
comment:
  config:
    waline:
      emoji: [
        "https://unpkg.com/@waline/emojis@1.4.0/bilibili",
        "https://unpkg.com/@waline/emojis@1.4.0/qq",
        "https://unpkg.com/@waline/emojis@1.4.0/weibo"
      ]
```
{% asset_img 10.png 图10 %}