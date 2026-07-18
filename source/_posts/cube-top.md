---
title: 三阶魔方顶面还原所有状态及其变换和还原
excerpt: ''
date: 2025-12-28 18:19:52
updated:
tags:
categories:
thumbnail: /2025/12/28-cube-top/0.png
cover:
---

下面是三阶魔方顶面还原所有可能的状态：
<div style="display: flex; flex-direction: column; gap: 0; align-items: center; margin-bottom: 20px;">
  <img src="{% asset_path 8.png %}" style="pointer-events: none; user-select: none; display: block; margin: 0;">
  <img src="{% asset_path 1.png %}" style="pointer-events: none; user-select: none; display: block; margin: 0;">
  <img src="{% asset_path 2.png %}" style="pointer-events: none; user-select: none; display: block; margin: 0;">
  <img src="{% asset_path 3.png %}" style="pointer-events: none; user-select: none; display: block; margin: 0;">
  <img src="{% asset_path 4.png %}" style="pointer-events: none; user-select: none; display: block; margin: 0;">
  <img src="{% asset_path 5.png %}" style="pointer-events: none; user-select: none; display: block; margin: 0;">
  <img src="{% asset_path 6.png %}" style="pointer-events: none; user-select: none; display: block; margin: 0;">
  <img src="{% asset_path 7.png %}" style="pointer-events: none; user-select: none; display: block; margin: 0;">
</div>

下面是所有状态的变换和还原：
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式1：R U R' U R U2 R'<br>
    公式2：R U2 R' U' R U' R'
  </div>
</div>

| 状态 | 使用公式1后 | 使用公式2后 | 还原 |
| :---: | :---: | :---: | :---: |
| 目标状态 | Ⅱ-1 | Ⅰ-1 | \ |
| Ⅰ-1 | 目标状态 | Ⅲ-1 | 公式1 |
| Ⅰ-2 | Ⅵ-1 | Ⅳ-4 | U' + 公式1 |
| Ⅰ-3 | Ⅶ-1 | Ⅱ-3 | U2 + 公式1 |
| Ⅰ-4 | Ⅴ-1 | Ⅳ-1 | U + 公式1 |
| Ⅱ-1 | Ⅲ-2 | 目标状态 | 公式2 |
| Ⅱ-2 | Ⅳ-4 | Ⅴ-4 | U' + 公式2 |
| Ⅱ-3 | Ⅰ-3 | Ⅶ-1 | U2 + 公式2 |
| Ⅱ-4 | Ⅳ-1 | Ⅵ-2 | U + 公式2 |
| Ⅲ-1 | Ⅰ-1 | Ⅶ-3 | 公式1 + 公式1 |
| Ⅲ-2 | Ⅶ-3 | Ⅱ-1 | 公式2 + 公式2 |
| Ⅳ-1 | Ⅰ-4 | Ⅱ-4 | 公式1 + U + 公式1 |
| Ⅳ-2 | Ⅵ-4 | Ⅴ-3 | U' + 公式1 + U + 公式1 |
| Ⅳ-3 | Ⅴ-2 | Ⅵ-3 | U + 公式1 + U' + 公式1 |
| Ⅳ-4 | Ⅰ-2 | Ⅱ-2 | 公式1 + U' + 公式1 |
| Ⅴ-1 | Ⅶ-2 | Ⅰ-4 | 公式2 + U + 公式1 |
| Ⅴ-2 | Ⅴ-3 | Ⅳ-3 | U' + 公式2 + U + 公式1 |
| Ⅴ-3 | Ⅳ-2 | Ⅴ-2 | U + 公式1 + U' + 公式2 |
| Ⅴ-4 | Ⅱ-2 | Ⅶ-4 | 公式1 + U' + 公式2 |
| Ⅵ-1 | Ⅶ-4 | Ⅰ-2 | 公式2 + U' + 公式1 |
| Ⅵ-2 | Ⅱ-4 | Ⅶ-2 | 公式1 + U + 公式2 |
| Ⅵ-3 | Ⅳ-3 | Ⅵ-4 | U' + 公式1 + U + 公式2 |
| Ⅵ-4 | Ⅵ-3 | Ⅳ-2 | U + 公式2 + U' + 公式1 |
| Ⅶ-1 | Ⅱ-3 | Ⅰ-3 | 公式1 + U2 + 公式2 |
| Ⅶ-2 | Ⅵ-2 | Ⅴ-1 | U' + 公式1 + U2 + 公式2 |
| Ⅶ-3 | Ⅲ-1 | Ⅲ-2 | U2 + 公式1 + U2 + 公式2 |
| Ⅶ-4 | Ⅴ-4 | Ⅵ-1 | U + 公式1 + U2 + 公式2 |