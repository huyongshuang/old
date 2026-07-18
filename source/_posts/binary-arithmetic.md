---
title: 二进制的加减乘除运算
excerpt: 'Minecraft二进制的加减乘除运算，包括逻辑门电路、半加器、全加器、加法器、加减法模块、乘法器、除法器等等。'
date: 2026-02-17 23:14:39
updated:
tags:
categories:
thumbnail: /2026/2/17-binary-arithmetic/0.png
cover:
---
[PDF在线文档](/pdf/binary-arithmetic.pdf)
<a href="{% asset_path 二进制的加减乘除运算.pdf %}" download="二进制的加减乘除运算.pdf">PDF文件下载</a>
<a href="{% asset_path 二进制的加减乘除运算.wsd %}" download="二进制的加减乘除运算.wsd">EduEditer文件下载</a>
[EduEditer官网](http://eduediter.com/)
* 若下方内容仍未加载，请点击<a href="/2026/2/17-binary-arithmetic/index.html" onclick="event.preventDefault(); location.href=this.href + '?t=' + new Date().getTime(); return false;">**此处**</a>重新加载。

<div id="pdf-container" style="width: 100%; margin: 0 auto; padding: 0;"></div>
<style>
  #pdf-container {
    width: 100% !important;
    margin: 0 auto !important;
    padding: 0 !important;
    overflow: auto !important;
  }
  #pdf-container canvas {
    max-width: 100% !important;
    height: auto !important;
    margin: 0 auto !important;
  }
  @media (max-width: 768px) {
    #pdf-container canvas {
      max-width: 100vw !important;
    }
  }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
<script>
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
  async function loadAndRenderPdf() {
    const container = document.getElementById('pdf-container');
    container.innerHTML = '';
    const pdfUrl = '二进制的加减乘除运算.pdf';
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`文件不存在或路径错误（HTTP状态：${response.status}）`);
      }
      const pdfDoc = await pdfjsLib.getDocument({
        url: pdfUrl,
        cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/cmaps/',
        cMapPacked: true,
        disableAutoFetch: false,
        disableFontFace: false
      }).promise;
      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum);
        const baseScale = 2.0;
        const dpr = window.devicePixelRatio || 1;
        const renderScale = baseScale * dpr;
        const viewport = page.getViewport({ scale: renderScale });
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${viewport.width / dpr}px`;
        canvas.style.height = `${viewport.height / dpr}px`;
        canvas.style.border = 'none';
        canvas.style.outline = 'none';
        canvas.style.display = 'block';
        canvas.style.margin = '0 auto';
        canvas.style.imageRendering = 'optimizeQuality';
        await page.render({
          canvasContext: ctx,
          viewport: viewport
        }).promise;
        container.appendChild(canvas);
      }
    } catch (error) {
      container.innerHTML = `
        <div style="text-align: center; color: #ff0000; padding: 20px; font-size: 15px;">
          <p>❌ PDF加载失败：${error.message}</p>
        </div>
      `;
      console.log('PDF加载错误：', error);
    }
  }
  function initPdfViewer() {
    if (document.getElementById('pdf-container')) {
      loadAndRenderPdf();
    }
  }
  if (document.readyState === 'complete') {
    initPdfViewer();
  } else {
    window.addEventListener('load', initPdfViewer);
  }
  document.addEventListener('pjax:complete', initPdfViewer);
</script>