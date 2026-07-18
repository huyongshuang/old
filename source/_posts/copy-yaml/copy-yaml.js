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