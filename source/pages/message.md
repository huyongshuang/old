---
title: 留言板
---
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css"/>
<style>
#waline .wl-emoji {
  pointer-events: none;
  cursor: pointer !important;
}
#waline .wl-power {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
}
</style>
<div id="waline"></div>
<script type="module">
  import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
  init({
    el: '#waline',
    serverURL: 'https://comment.huyongshuang.top',
    requiredMeta: ['nick'],
    emoji: [
      'https://unpkg.com/@waline/emojis@1.4.0/qq',
      'https://unpkg.com/@waline/emojis@1.4.0/weibo',
      'https://unpkg.com/@waline/emojis@1.4.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.4.0/bmoji',
      'https://unpkg.com/@waline/emojis@1.4.0/tw-emoji'],
  });
</script>