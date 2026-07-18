---
title: 魔方公式（五阶）
excerpt: ''
date: 2026-01-04 11:27:13
updated:
tags:
categories:
thumbnail: /2026/1/4-5×5-cube-formula/0.png
cover:
---

#### 1. 还原中心块
##### 1.1 还原顺序
1. 五阶魔方的六个中心块是由3×3九个块组成的，推荐先还原六个中心块的十字，再还原中心块的四角块，或者先还原一个面的中心块十字，再还原这个面的中心块四角块，然后还原剩余面的中心块。
{% asset_img 1.png 图1 %}
2. 为了方便还原，避免打乱已经还原了的中心块，推荐六个中心块的还原顺序为：先还原与魔方某一个角相邻的三个面的中心块，然后还原剩余三个面的中心块。
{% asset_img 2.png 图2 %}

##### 1.2 还原步骤
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式4-1：T₂R U T₂R'<br>
    公式4-2：T₂R U T₂R' U T₂R U2 T₂R'
  </div>
</div>

1. 还原中心块十字
   1. 还原第一个中心块十字：这一步没有具体的公式，通过旋转各个面和各层，还原第一个中心块的十字。
   2. 还原剩余中心块十字：这一步仍可通过旋转各个面和各层来还原中心块十字，但如果会打乱已经还原了的十字，则将魔方旋转为如下图所示的位置，使用**公式4-1**还原。
{% asset_img 3.png 图3 %}
2. 还原中心块四角块
将魔方旋转为如下图所示的位置，使用**公式4-2**还原。
{% asset_img 4.png 图4 %}
* 在上面还原过程中，如果目标十字块和目标角块位于待还原面的背面，则使用**公式4-1**将目标块从待还原面的背面移动到与待还原面相邻的面，再按照上述步骤还原。

#### 2. 还原棱块
##### 2.1 思路一：间位对齐优先
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式4-3：T₂U' R F' U R' F T₂U<br>
    公式4-4：R F' U R' F<br>
    公式4-5：T₂R2 B2&#12288;T₂R' U2 T₂R' U2&#12288;B2 T₂R' B2 T₂R B2 T₂R'&#12288;B2 T₂R2<br>
    公式4-6：M₂R2 B2&#12288;U2 M₂L U2 M₂R'&#12288;U2 M₂R U2&#12288;F2 M₂R F2 M₂L'&#12288;B2 M₂R2<br>
    公式4-7：M₃U' R U R' F R' F' R M₃U
  </div>
</div>

1. 间位对齐
这一步操作与四阶魔方还原棱块的步骤一样，先将两个颜色一样的棱块移动到同一个面上（下图以红蓝块为例）。
   1. 情况一：两个棱块位于同一层
使用**公式4-3**，即可将两个红蓝棱块拼到一侧的棱上（两个棱块在上层或下层都可以）。
   {% asset_img 5.png 图5 %}
   2. 情况二：两个棱块不在同一层
使用**公式4-4**后，两个棱块就位于同一层了，然后按照情况一进行还原即可。
   {% asset_img 6.png 图6 %}
2. 还原中棱块
如下图所示，将目标中棱块和待还原棱块移动到同一个面上，使用**公式4-5**即可还原。
{% asset_img 7.png 图7 %}
3. 处理翻棱
   1. 单个棱块翻棱
在上面的还原中棱块步骤完成后，可能会出现如下图所示的情况，使用**公式4-6**即可还原。
   {% asset_img 8.png 图8 %}
   2. 成对棱块翻棱
如果有多个需要翻棱的棱块，可以将其中两个待还原棱块移动到同一个面上的两侧，再使用**公式4-7**即可一次还原两个棱。
   {% asset_img 9.png 图9 %}

##### 2.2 思路二：邻位对齐优先
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式4&nbsp;-&nbsp;8：T₂U' R F' U R' F T₂U<br>
    公式4&nbsp;-&nbsp;9：T₂D R F' U R' F T₂D'<br>
    公式4-10：T₂U R F' U R' F T₂U'<br>
    公式4-11：T₂D' R F' U R' F T₂D<br>
    公式4-12：R F' U R' F（右侧）/L' F U' L F'（左侧）
  </div>
</div>

1. 邻位对齐
如下图，把中间的棱块放到右边，需要和它组合的棱块放到左边，如果在左边第二层，使用**公式4-8**还原；如果在左边第四层，使用**公式4-9**还原。
{% asset_img 10.png 图10 %}
2. 还原第三个棱块
   1. 第三个棱块在偏下层
如下图，把上一步已经拼好的两个棱块放到右边偏下的位置，需要和它组合的棱块放到左边偏下的位置。
参考下图中各个棱块颜色的相对位置，若上一步拼好的棱块颜色已经对齐了，使用**公式4-10**还原；若上一步拼好的棱块颜色没有对齐，使用**公式4-9**还原。
   {% asset_img 11.png 图11 %}
   2. 第三个棱块在偏上层
如下图，把上一步已经拼好的两个棱块放到右边偏上的位置，需要和它组合的棱块放到左边偏上的位置。
参考下图中各个棱块颜色的相对位置，若上一步拼好的棱块颜色已经对齐了，使用**公式4-11**还原；若上一步拼好的棱块颜色没有对齐，使用**公式4-8**还原。
   {% asset_img 12.png 图12 %}
* 如果需要调整左右两侧棱块的颜色，使用**公式4-12**将棱块两侧颜色进行翻转。
   {% asset_img 13.png 图13 %}

#### 3. 还原三阶魔方
还原中心块和棱块之后，就可以按照还原三阶魔方的步骤进行还原了。
[**1. 还原底层**](/2025/12/27-3×3-cube-formula/#2-还原底层)
[**2. 还原中层**](/2025/12/27-3×3-cube-formula/#3-还原中层)
[**3. 还原顶层**](/2025/12/27-3×3-cube-formula/#4-还原顶层)