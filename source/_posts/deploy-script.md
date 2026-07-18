---
title: Hexo一键部署脚本
excerpt: ''
date: 2024-12-12 16:51:26
updated: 2024-12-12 16:51:26
tags:
  - Hexo
categories:
  - 博客
  - Hexo
  - Hexo技巧
thumbnail:
cover:
---
* 在使用之前，请将你存放Hexo项目文件的文件夹名称改为`Blog`，并将下面的`bat`文件放置在和`Blog`同一目录下的位置，你可以在下面的代码中自定义你的文件名称和位置。
#### 1. Hexo本地部署脚本
点击 <a href="{% asset_path Hexo本地部署.bat %}" download="Hexo本地部署.bat">**下载**</a> `Hexo本地部署.bat`文件。
```bat
wt -d "Blog" cmd /k "hexo clean & hexo generate & hexo server"
```
#### 2. Hexo部署到GitHub Pages脚本
请安装`hexo-deployer-git`并配置好Hexo。点击 <a href="{% asset_path Hexo部署到GitHub-Pages.bat %}" download="Hexo部署到GitHub Pages.bat">**下载**</a> `Hexo部署到GitHub Pages.bat`文件。
```bat
wt -d "Blog" cmd /k "hexo clean & hexo generate & hexo deploy"
```
#### 3. Git推送脚本
点击 <a href="{% asset_path Git推送脚本.bat %}" download="Git推送脚本.bat">**下载**</a> `Git推送脚本.bat`文件。
```bat
@echo off
chcp 936 > nul 2>&1
title Git自动化推送脚本
setlocal enabledelayedexpansion

:: ===================== 步骤1：切换到指定目录 =====================
echo [1/6] 正在切换到 Blog/public 目录...
cd /d Blog/public
if %errorlevel% neq 0 (
    echo 错误：无法切换到 Blog/public 目录，请检查路径是否正确！
    pause
    exit /b 1
)

:: ===================== 步骤2：初始化 Git 仓库 =====================
echo [2/6] 正在初始化 Git 仓库（main 分支）...
:: 先检查是否已存在.git目录，避免重复初始化警告
if not exist .git (
    git init -b main
    if %errorlevel% neq 0 (
        echo 错误：Git仓库初始化失败！
        pause
        exit /b 1
    )
) else (
    echo 提示：仓库已存在，跳过初始化步骤！
)

:: ===================== 步骤3：添加所有文件 =====================
echo [3/6] 正在添加所有文件到暂存区...
git add .
if %errorlevel% neq 0 (
    echo 警告：添加文件时出现异常，请检查文件状态！
)

:: ===================== 步骤4：提交文件 =====================
echo [4/6] 检查是否需要执行提交操作...
:: 检查是否有未提交的更改（核心逻辑：判断暂存区是否有内容）
git diff --cached --quiet
if !errorlevel! equ 1 (
    :: 有未提交的更改，执行提交
    set "commit_msg=首次提交"
    set /p "commit_msg=请输入提交的说明信息（默认：首次提交）："
    
    git commit -m "!commit_msg!"
    if !errorlevel! equ 0 (
        echo 提交成功：!commit_msg!
    ) else (
        echo 提交失败，请检查！
        pause
        exit /b 1
    )
) else (
    :: 无未提交的更改，跳过提交
    echo 暂存区无新内容，跳过提交步骤
)

:: ===================== 步骤5：配置远程仓库地址 =====================
echo [5/6] 配置远程仓库地址...
set "remote_url="
set /p "remote_url=请输入远程仓库地址（必填）："
if "!remote_url!" equ "" (
    echo 错误：不输入远程仓库地址无法推送！
    pause
    exit /b 1
)
:: 先移除已存在的 origin 远程（避免重复添加报错）
git remote remove origin > nul 2>&1
git remote add origin !remote_url!
if !errorlevel! equ 0 (
    echo 远程仓库配置成功：!remote_url!
) else (
    echo 远程仓库配置失败，请检查地址是否正确！
    pause
    exit /b 1
)

:: ===================== 步骤6：交互式推送菜单 =====================
echo.
echo =============== 推送选项 ===============
echo 1. 首次推送
echo 2. 非首次推送
echo 3. 拉取远程合并再推送
echo 4. 强制覆盖远程
echo ========================================
set "choice="
set /p "choice=请输入选项编号（1-4）："
if "!choice!" equ "1" (
    echo 执行首次推送...
    git push -u origin main
) else if "!choice!" equ "2" (
    echo 执行非首次推送...
    git push
) else if "!choice!" equ "3" (
    echo 先拉取远程并合并，再推送...
    git pull --rebase origin main
    if !errorlevel! equ 0 (
        git push -u origin main
    ) else (
        echo 拉取合并失败，终止推送！
        pause
        exit /b 1
    )
) else if "!choice!" equ "4" (
    echo 警告：即将强制覆盖远程仓库，这会丢失远程历史！
    set "confirm="
    set /p "confirm=请输入 Y 确认强制推送（其他键取消）："
    if /i "!confirm!" equ "Y" (
        git push -u origin main --force
    ) else (
        echo 已取消强制推送！
    )
) else (
    echo 错误：输入的选项无效！请输入1-4之间的数字。
    pause
    exit /b 1
)

:: ===================== 执行完成，保持窗口 =====================
echo.
echo 操作执行完毕！按任意键退出...
pause > nul
endlocal
```
#### 4. cmd命令文件
<a href="{% asset_path hexo-clean.cmd %}" download="hexo clean.cmd"><span style="color: blue; font-weight: bold;">hexo clean.cmd</span></a>
<a href="{% asset_path hexo-generate.cmd %}" download="hexo generate.cmd"><span style="color: blue; font-weight: bold;">hexo generate.cmd</span></a>
<a href="{% asset_path hexo-server.cmd %}" download="hexo server.cmd"><span style="color: blue; font-weight: bold;">hexo server.cmd</span></a>
<a href="{% asset_path hexo-deploy.cmd %}" download="hexo deploy.cmd"><span style="color: blue; font-weight: bold;">hexo deploy.cmd</span></a>