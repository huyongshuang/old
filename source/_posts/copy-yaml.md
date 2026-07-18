---
title: Hexo无法跳过yml文件渲染的解决方法
excerpt: ''
date: 2024-11-11 15:42:51
updated: 2024-11-15 12:07:36
tags:
  - Hexo
categories:
  - 博客
  - Hexo
  - Hexo技巧
thumbnail:
cover:
---
* 问题根源：Hexo会把`.yml`/`.yaml`文件识别为数据文件（Data Files），这类文件会被Hexo主动解析并加入到模板变量`site.data`中，这个过程发生在`skip_render`生效之前，所以即使配置了`skip_render`，Hexo依然会先解析`.yml`文件，再尝试跳过渲染（但解析过程已经完成）。
* 解决方法：利用脚本强制复制`yml`文件到`public`目录。在Hexo根目录创建一个`scripts`文件夹，在文件夹里创建一个名为`copy-yaml.js`的JavaScript文件，并将下面的代码写入。或者点击 <a href="{% asset_path copy-yaml.js %}" download="copy-yaml.js">**下载**</a> `copy-yaml.js`文件。
```javascript
'use strict';

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

// 确保 YAML 文件被复制到 public 目录
hexo.extend.filter.register('after_generate', function() {
  console.log('开始处理 YAML 文件复制...');
  
  const sourceDir = hexo.source_dir;
  const publicDir = hexo.public_dir;
  
  // 查找所有 YAML 文件
  function findAndCopyYamlFiles(dir, basePath = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const relativePath = path.join(basePath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // 递归处理子目录
        findAndCopyYamlFiles(fullPath, relativePath);
      } else if (file.match(/\.(yml|yaml)$/i)) {
        // 处理 YAML 文件
        const destDir = path.join(publicDir, basePath);
        const destPath = path.join(destDir, file);
        
        // 确保目标目录存在
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        
        // 复制文件
        try {
          fs.copyFileSync(fullPath, destPath);
          console.log(`已复制: ${relativePath} -> ${path.relative(publicDir, destPath)}`);
        } catch (err) {
          console.error(`复制失败: ${relativePath}`, err.message);
        }
      }
    });
  }
  
  // 从 source 目录开始查找
  findAndCopyYamlFiles(sourceDir);
  console.log('YAML 文件复制完成');
});
```
* 最后在`_config.yml`配置文件中修改下面的配置。
```yaml
exclude:
  - "Path" # yml文件存放路径
```