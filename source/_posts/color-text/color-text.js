// 自定义 color 标签插件
hexo.extend.tag.register('color', function(args, content) {
  // args[0] 是颜色值，content 是要着色的文字
  const color = args[0] || 'black';
  return `<span style="color: ${color};">${content}</span>`;
}, { ends: true });