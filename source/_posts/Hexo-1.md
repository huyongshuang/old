---
title: Hexo教程（一） - 建站、部署与写作
date: 2024/10/1 13:14:27
updated: 2025/12/12 15:27:36
tags:
  - Hexo
  - 教程
categories:
  - 博客
  - Hexo
thumbnail: /2024/10/1-Hexo-1/0.png
cover:
excerpt: 本文主要教大家如何利用Hexo + GitHub Pages从零开始搭建个人博客网站，内容包括准备工作、创建GitHub仓库、安装Hexo、部署到GitHub Pages和初步写作这五部分内容。
sticky: 1000
---
## 一、准备工作
### 1、安装Git
安装地址：[https://git-scm.com](https://git-scm.com)。
安装好之后，鼠标右键可以看到Open Git GUI here和Open Git Bash here，我们需要的是Git Bash。
{% asset_img 1.png 图1 %}
Git Bash汉化：打开Git Bash，右键点击Option选项，左侧选择window选项，在UI language选项中选择zh_CN，点击Save即可。
Git GUI汉化：下载汉化包，地址：[https://github.com/stayor/git-gui-zh](https://github.com/stayor/git-gui-zh)，或者点此处<a href="{% asset_path zh_cn.msg %}" download="zh_cn.msg">**下载**</a>。
在终端里输入`git --version`显示版本号说明Git安装成功。
```bash
git --version
```
{% asset_img 2.png 图2 %}
配置Git用户名和邮箱：
（1）全局配置（为所有项目设置用户名和邮箱）
```bash
git config --global user.name "用户名"
git config --global user.email "邮箱"
```
（2）单个项目配置（为当前项目设置用户名和邮箱）
```bash
cd /path to your project
git config user.name "用户名"
git config user.email "邮箱"
```
（3）验证配置是否成功
```bash
git config user.name
git config user.email
```
{% asset_img 3.png 图3 %}
### 2、安装Node.js
安装地址：[https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)。
在终端里输入`node -v`显示版本号说明Node.js安装成功。
```bash
node -v
```
{% asset_img 4.png 图4 %}
在安装Node.js的同时也安装了npm，输入`npm -v`查看版本号。
```bash
npm -v
```
{% asset_img 5.png 图5 %}
### 3、注册GitHub账号
地址：[https://github.com](https://github.com)。
点击Sign up按钮，填写用户名、密码、邮箱，然后点击Create account。
## 二、创建仓库
在GitHub上创建一个代码仓库来保存我们的网页。
进入GitHub主页，点击右上角“+”号，点击New repository进入创建仓库页面。
{% asset_img 6.png 图6 %}
在Repository name处填写仓库名，格式必须为<用户名>.github.io，之后可以用https://<用户名>.github.io来访问你的主页。Description处可以填写你的仓库描述，然后点击Create repository创建。
{% asset_img 7.png 图7 %}
## 三、安装Hexo
Hexo是一个快速、简洁且高效的博客框架。Hexo使用Markdown（或其他标记语言）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。
### 1、安装Hexo
所有必备的应用程序安装完成后，即可使用npm安装Hexo。
```bash
npm install -g hexo-cli
```
查看Hexo版本
```bash
hexo version
或者 hexo -v
```
### 2、新建网站
安装Hexo完成后，请执行下列命令，Hexo将会在指定文件夹中新建所需要的文件。（<folder>为项目文件夹，可自定义，默认在目前的文件夹建立网站。）
```bash
hexo init <folder>
cd <folder>
npm install
```
安装完成后，你的项目文件夹将如下所示：
{% asset_img 8.png 图8 %}
**scaffolds**：模版文件夹。当您新建文章时，Hexo会根据scaffold来创建文件。
**source**：资源文件夹。存放用户资源的地方。除_posts文件夹之外，开头命名为_(下划线)的文件/文件夹和隐藏的文件将会被忽略。Markdown和HTML文件会被解析并放到public文件夹，而其他文件会被拷贝过去。
**themes**：主题文件夹。Hexo会根据主题来生成静态页面。
**_config.yml**：网站的配置文件。你可以在此配置大部分的参数。
**package.json**：应用程序的信息。
### 3、生成静态文件及本地部署
```bash
hexo generate # 生成静态文件
或者 hexo g
hexo server # 本地部署
或者 hexo s
```
生成的静态文件都放在public文件夹中。
默认访问网址：http://localhost:4000
使用下面命令可以重设端口。
```bash
hexo server -p <端口号>
```
浏览器访问http://localhost:4000
{% asset_img 9.png 图9 %}
## 四、部署到GitHub Pages
### 1、安装hexo-deployer-git
```bash
npm install hexo-deployer-git --save
```
编辑_config.yml文件，配置GitHub相关信息。
```yaml
deploy:
  type: git
  repo: <repository url> # https://github.com/huyongshuang/huyongshuang.github.io.git
  branch: [branch]
  token: [token]
  message: [message]
```
**repo**：目标仓库的URL，URL在仓库页面获取。
{% asset_img 10.png 图10 %}
**branch**：分支名称。
**message**：自定义提交信息。
**token**：令牌值，用于认证repo，获取方法如下：
首先进入链接：[https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)，如下图所示，Note处填写token的备注，Expiration处可选择No expiration以防过期，Select scopes处勾选repo，最后点击Generate token生成token，由于每次仅会显示一次完整的token，下一次刷新页面后将会完全隐藏，建议生成后做好备份！
{% asset_img 11.png 图11 %}
部署到GitHub Pages
```bash
hexo clean
hexo generate -d
```
### 2、Git命令推送
将public文件夹里面的所有文件推送至GitHub仓库的main分支中。
{% asset_img 12.png 图12 %}
（1）初始化本地仓库
```bash
git init -b main
```
（2）添加文件
```bash
# 添加单个文件
git add <文件名>
# 添加所有文件
git add .
```
（3）提交文件
```bash
git commit -m "首次提交"
```
（4）关联远程仓库
```bash
# 使用HTTPS方式
git remote add origin https://github.com/用户名/仓库名.git
# 使用SSH方式（需先配置SSH Key）
git remote add origin git@github.com:用户名/仓库名.git
```
（5）推送到GitHub
```bash
# 首次推送
git push -u origin main
# 非首次推送
git push
```
（6）当GitHub仓库有文件和本地仓库冲突时，执行：
```bash
# 拉取远程仓库内容并合并
git pull --rebase origin main
# 推送
git push -u origin main
```
或者强制覆盖远程：
```bash
git push -u origin main --force
```
### 3、Visual Studio Code推送
使用Visual Studio Code打开public文件夹，点击左侧“源代码管理”，点击“初始化仓库”，然后按照方法2的步骤操作即可。
{% asset_img 13.png 图13 %}
部署完成之后，打开链接：https://<用户名>.github.io即可查看新建的网站。
## 五、写作
### 1、写作命令
```bash
hexo new [layout] <title>
```
* 输入命令后会在source/_posts文件夹下生成Markdown文件，然后开始写作即可。
* post是默认布局，也可以提供自己的布局。可以通过编辑_config.yml中default_layout设置来更改默认布局。
* Hexo有三种默认布局：post（帖子）、page（页面）和draft（草稿）。post布局创建的文件保存在source/_posts路径下，page布局保存在source路径下，draft布局保存在source/_drafts路径下。
* 使用下面的发布命令可以将草稿移动到source/_posts文件夹下。
```bash
hexo publish [layout] <title>
```
### 2、markdown基本语法
（1）标题
使用 # 表示标题，# 的数量表示标题的级别，# 和标题文字之间要加一个空格。
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
```
（2）文本样式
① 加粗
```markdown
**加粗文本**
```
② 斜体
```markdown
*斜体文本*
```
③ 加粗 + 斜体
```markdown
	***加粗斜体***
```
④ 删除线
```markdown
~~删除文本~~
```
⑤ 下划线
```markdown
<u>下划线文本</u>	
```
效果：① **加粗文本** ② *斜体文本* ③ ***加粗斜体*** ④ 	~~删除文本~~ 	⑤ <u>下划线文本</u>
（3）列表
① 无序列表
用 -、+、* 开头，符号和文字之间加空格，支持嵌套（嵌套时缩进 2 个空格或 1 个 Tab）。
```markdown
- 无序列表项1
  - 嵌套子项1
  - 嵌套子项2
+ 无序列表项2
* 无序列表项3
```
效果：
- 无序列表项1
  - 嵌套子项1
  - 嵌套子项2
+ 无序列表项2
* 无序列表项3

② 有序列表
用 数字. 开头，数字和文字之间加空格，也支持嵌套。
```markdown
1. 有序列表项1
   1. 嵌套子项1
   2. 嵌套子项2
2. 有序列表项2
3. 有序列表项3
```
效果：
1. 有序列表项1
   1. 嵌套子项1
   2. 嵌套子项2
2. 有序列表项2
3. 有序列表项3

③ 任务列表
用 - [ ] 表示未完成，- [x] 表示已完成，括号内的空格 /x 是关键。
```markdown
- [ ] 待办事项1
- [x] 已完成事项2
- [ ] 待办事项3
```
效果：
- [ ] 待办事项1
- [x] 已完成事项2
- [ ] 待办事项3

（四）引用
用 > 表示，支持嵌套（多一个 > 就是嵌套一层）。
```markdown
> 一级引用
>> 二级引用
>>> 三级引用
```
效果：
> 一级引用
>> 二级引用
>>> 三级引用

（五）表格
用 | 分隔列，- 分隔表头和内容，: 可以控制对齐（:--- 左对齐、---: 右对齐、:---: 居中）。
```markdown
| 姓名 | 年龄 | 职业 |
| :--- | :---: | ---: |
| 张三 | 25 | 程序员 |
| 李四 | 30 | 设计师 |
```
效果：
| 姓名 | 年龄 | 职业 |
| :--- | :---: | ---: |
| 张三 | 25 | 程序员 |
| 李四 | 30 | 设计师 |

（六）分割线
用 ---、***、___ 均可，单独占一行，前后空行效果更好。
```markdown
---
```
效果：

---

（七）链接
① 普通链接
语法：`[链接文字](链接地址 "可选的提示文字")`
```markdown
[百度](https://www.baidu.com "点击跳转到百度")
```
效果：[百度](https://www.baidu.com "点击跳转到百度")
② 锚点链接（跳转到本文档内的标题）
语法：`[跳转到一级标题](#一级标题)`（标题文字要和目标标题完全一致，大小写/空格需匹配）
```markdown
[回到顶部](#一、准备工作)
```
效果：[回到顶部](#一、准备工作)
③ 图片链接
语法：`![图片描述](图片地址 "可选的提示文字")`（图片描述用于无法加载图片时显示，必填）
```markdown
![示例图片](https://picsum.photos/200/100 "一张示例图片")
```
效果：
![示例图片](https://picsum.photos/200/100 "一张示例图片")
（八）代码
① 行内代码
用反引号 ` 包裹，适合单行代码或代码片段。
```markdown
这是行内代码：`print("Hello Markdown")`
```
效果：
这是行内代码：`print("Hello Markdown")`
② 代码块
用三个反引号 ``` 包裹，开头的反引号后可以指定编程语言（如：python、java），实现语法高亮。
````markdown
```python
# 这是Python代码块
def hello():
    print("Hello Markdown!")
hello()
```
````
效果：
```python
# 这是Python代码块
def hello():
    print("Hello Markdown!")
hello()
```
③ 代码块嵌套
用4个及以上反引号包裹包含3个反引号的内容，来实现代码块的嵌套。
`````markdown
````markdown
```python
# 这是Python代码块
def hello():
    print("Hello Markdown!")
hello()
```
````
`````
效果：如上面`② 代码块`示例的效果。
### 3、插入资源
修改_config.yml配置文件，使其在创建新文章时自动创建一个文件夹。
```yaml
post_asset_folder: true
```
执行命令`hexo new post Blog`后在source/_posts文件夹里生成了和文章同名的资源目录。
{% asset_img 14.png 图14 %}
在Blog文件夹中添加一张图片和一个txt文件。
{% asset_img 15.png 图15 %}
在markdown文件中写入下面的内容：
```markdown
{% asset_img picture.png 图片 %}
{% asset_link test.txt 测试 %}
```
部署完成后，打开网站可以看到添加的图片，点击“测试”可以打开txt文件。
{% asset_img 16.png 图16 %}
{% asset_img 17.png 图17 %}
如果想要点击后下载该文件，请写入下面的内容：
```markdown
<a href="{% asset_path test.txt %}" download="下载的文件名.txt">下载</a>
```
如下图，可以成功下载：
{% asset_img 18.png 图18 %}
### 4、Front-matter
Front-matter是写作配置，为Markdown文件开头的代码块。
```yaml
---
title: Hexo教程（一）
date: 2024/10/1 13:14:27
---
```
设置 & 默认值
| 设置 | 描述 | 默认值 |
| :---: | :---: | :---: |
| layout | 布局 | config.default_layout |
| title | 标题 | 文章的文件名 |
| date | 建立日期 | 文件建立日期 |
| updated | 更新日期 | 文件更新日期 |
| comments | 文章的评论功能 | true |
| tags | 标签（不适用于分页） | |
| categories | 分类（不适用于分页） | |
| permalink | 覆盖文章的永久链接，永久链接应该以/或.html结尾 | null |
| excerpt | 纯文本的页面摘要 | |
| disableNunjucks | 启用时禁用Nunjucks标签和标签插件的渲染功能 | false |
| lang | 设置语言以覆盖自动检测 | 继承自_config.yml |
| published | 文章是否发布 | 对于_posts下的文章为true，对于_draft下的文章为false |