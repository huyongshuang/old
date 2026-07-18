---
title: Hexo实现彩色字体
excerpt: '方法一：使用<span>标签并通过style属性设置颜色；方法二：利用JavaScript脚本实现。'
date: 2024-12-13 19:36:43
updated: 2024-12-13 19:36:43
tags:
  - Hexo
categories:
  - 博客
  - Hexo
  - Hexo技巧
thumbnail:
cover:
---
#### 1. 方法一：<span>标签
直接在Markdown中使用<span>标签并通过style属性设置颜色。
```markdown
<!-- 基础用法：设置字体颜色 -->
<span style="color: red;">这段文字是红色的</span>

<!-- 使用十六进制颜色码（更精准） -->
<span style="color: #1E90FF;">这段文字是深蓝色的（道奇蓝）</span>

<!-- 使用 RGB/RGBA（支持透明度） -->
<span style="color: rgb(255, 165, 0);">这段文字是橙色的</span>
<span style="color: rgba(0, 128, 0, 0.7);">这段文字是半透明的绿色</span>

<!-- 结合加粗等样式 -->
<span style="color: purple; font-weight: bold;">这段紫色文字是加粗的</span>
```
效果：
<span style="color: red;">这段文字是红色的</span>
<span style="color: #1E90FF;">这段文字是深蓝色的（道奇蓝）</span>
<span style="color: rgb(255, 165, 0);">这段文字是橙色的</span>
<span style="color: rgba(0, 128, 0, 0.7);">这段文字是半透明的绿色</span>
<span style="color: purple; font-weight: bold;">这段紫色文字是加粗的</span>

##### 屏幕颜色拾取器
如果你需要某一颜色的`HEX`、`RGB`、`RGBA`、`HSL`、`HSLA`、`HSV`、`HSVA`、`CMYK`、`CMYKA`格式颜色码，可以使用下方工具来提取。
{% btn center large::屏幕颜色拾取器::/2024/12/10-color-picker/::fas fa-eye-dropper %}
#### 2. 方法二：JavaScript脚本
在Hexo根目录创建一个`scripts`文件夹，在文件夹里创建一个名为`color-text.js`的JavaScript文件，并将下面的代码写入。或者点击 <a href="{% asset_path color-text.js %}" download="color-text.js">**下载**</a> `color-text.js`文件。
```javascript
// 自定义 color 标签插件
hexo.extend.tag.register('color', function(args, content) {
  // args[0] 是颜色值，content 是要着色的文字
  const color = args[0] || 'black';
  return `<span style="color: ${color};">${content}</span>`;
}, { ends: true });
```
之后在Markdown中就可以这样用：
```markdown
{% color red %}这段文字是红色的{% endcolor %}
{% color #FF69B4 %}这段文字是粉色的{% endcolor %}
{% color green %}这段文字是绿色的{% endcolor %}
```
效果：
{% color red %}这段文字是红色的{% endcolor %}<br>
{% color #FF69B4 %}这段文字是粉色的{% endcolor %}<br>
{% color green %}这段文字是绿色的{% endcolor %}