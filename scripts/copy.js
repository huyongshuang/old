'use strict';

const fs = require('fs');
const path = require('path');

const THEME_NAME = 'redefine';
const CUSTOM_LAYOUT_DIR = 'custom_layout';

function copyFile(src, dest) {
  const stat = fs.statSync(src);
  
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach(file => {
      copyFile(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyLayoutFiles(hexo) {
  const baseDir = hexo.base_dir;
  
  const customLayoutPath = path.join(baseDir, CUSTOM_LAYOUT_DIR);
  const nodeModulesThemePath = path.join(baseDir, 'node_modules', `hexo-theme-${THEME_NAME}`, 'layout');
  const themesThemePath = path.join(baseDir, 'themes', THEME_NAME, 'layout');
  
  if (!fs.existsSync(customLayoutPath)) {
    hexo.log.warn(`自定义布局文件夹 ${CUSTOM_LAYOUT_DIR} 不存在，已跳过复制`);
    hexo.log.info(`如需使用，请在博客根目录创建 ${CUSTOM_LAYOUT_DIR} 文件夹`);
    return Promise.resolve();
  }
  
  const customFiles = fs.readdirSync(customLayoutPath);
  if (customFiles.length === 0) {
    hexo.log.warn(`自定义布局文件夹 ${CUSTOM_LAYOUT_DIR} 为空，无需复制`);
    return Promise.resolve();
  }
  
  hexo.log.info(`开始复制 ${CUSTOM_LAYOUT_DIR} 中的文件...`);
  
  let copyCount = 0;
  let targetPath = null;
  
  if (fs.existsSync(nodeModulesThemePath)) {
    targetPath = nodeModulesThemePath;
    hexo.log.info(`检测到 node_modules/hexo-theme-${THEME_NAME}/layout 目录`);
  } 
  else if (fs.existsSync(themesThemePath)) {
    targetPath = themesThemePath;
    hexo.log.info(`检测到 themes/${THEME_NAME}/layout 目录`);
  }
  else {
    hexo.log.warn(`未找到主题 ${THEME_NAME} 的 layout 目录，已跳过复制`);
    hexo.log.warn(`请检查以下路径是否存在:`);
    hexo.log.warn(`1. ${nodeModulesThemePath}`);
    hexo.log.warn(`2. ${themesThemePath}`);
    hexo.log.warn(`或者确认主题名 ${THEME_NAME} 是否正确`);
    return Promise.resolve();
  }
  
  customFiles.forEach(file => {
    try {
      const src = path.join(customLayoutPath, file);
      const dest = path.join(targetPath, file);
      
      if (!fs.existsSync(path.dirname(dest))) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
      }
      
      copyFile(src, dest);
      copyCount++;
      hexo.log.info(`已复制: ${file}`);
    } catch (err) {
      hexo.log.warn(`复制 ${file} 失败: ${err.message}`);
    }
  });
  
  if (copyCount > 0) {
    hexo.log.info(`完成! 共复制 ${copyCount} 个文件/文件夹`);
    hexo.log.info(`从 ${CUSTOM_LAYOUT_DIR} 复制到 ${path.relative(baseDir, targetPath)}`);
  } else {
    hexo.log.warn(`未复制任何文件`);
  }
  
  return Promise.resolve();
}

hexo.extend.console.register('copy', '复制自定义布局文件到主题目录', {
  options: []
}, function(args) {
  return copyLayoutFiles(this);
});

hexo.extend.console.register('c', 'hexo copy 的快捷方式', {
  options: []
}, function(args) {
  return copyLayoutFiles(this);
});