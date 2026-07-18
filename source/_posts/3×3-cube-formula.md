---
title: 魔方公式（三阶）
excerpt: ''
date: 2025-12-27 19:26:36
updated:
tags:
categories:
thumbnail: /2025/12/27-3×3-cube-formula/0.png
cover:
---

#### 1. 魔方基础
##### 1.1 旋转面
| 公式 | 旋转面 | Location |
| :---: | :---: | :---: |
| U | 上面 | （Up） |
| D | 下面 | （Down） |
| L | 左面 | （Left） |
| R | 右面 | （Right） |
| F | 前面 | （Front） |
| B | 后面 | （Back） |

##### 1.2 旋转方向和角度
| 公式 | 旋转方向和角度 |
| :---: | :---: |
| F |前（正）面顺时针旋转90° |
| F' |前面逆时针旋转90° |
| F2 |前面顺时针旋转180°（F2 = F'2） |
| M₂R |右侧第2层**单独**顺时针旋转90° |
| T₂R |右侧前2层**一起**顺时针旋转90° |

##### 1.3 国际配色
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: center; background-color: #f5f5f5; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); text-shadow: 0 0 1px #000; margin-bottom: 10px; font-size: 20px; font-weight: 800;">
    {% color yellow %}顶黄{% endcolor %}{% color white %}底白{% endcolor %}&nbsp;&nbsp;
    {% color blue %}前蓝{% endcolor %}{% color green %}后绿{% endcolor %}&nbsp;&nbsp;
    {% color orange %}左橙{% endcolor %}{% color red %}右红{% endcolor %}
  </div>
</div>

* 注意：我们一般选择前面作为正面，白色面作为底面。
{% asset_img 1.png 图1 %}

* [**原文链接**](https://mp.weixin.qq.com/s/pUPRQ3AhG4UVm9OsWUjIrw)

#### 2. 还原底层
##### 2.1 还原底层十字
<div style="text-align: center; padding: 10px; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; font-weight: 800; margin: 10px 0;">
下面公式中的左侧和右侧是指目标色块（白色块）在最左侧或最右侧时使用的公式。
</div>
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式1-1：M₂U F M₂U'<br>
    公式1-2：R' D R（右侧）/L D L'（左侧）
  </div>
</div>

还原底层十字包括还原底面十字和侧棱颜色对齐两部分。还原底层十字的情况千变万化，还原过程很灵活，没有统一的公式。大致思路分两种：
1. 思路一：还原底面十字和侧棱颜色对齐同时进行（白色中心作为顶面）
   1. 先将一个白色棱块旋转到顶面白色区域，并将棱块另一个面的颜色与侧边中心颜色对齐；
   2. 找到颜色为白色和与侧边中心颜色相同的颜色的棱块，只使用公式R、F、B、D（和其逆）将其移动到顶面，注意不要打乱已经与侧边中心对齐了的棱块；
   3. 下一步与上面一样，但注意只能旋转其中的三个面，注意不要打乱已经与侧边中心对齐了的棱块；
   {% asset_img 2.png 图2 %}
   4. 最后一步同理，但注意只能旋转其中两个面，注意不要打乱已经与侧边中心对齐了的棱块。
   * 若出现下面情况，使用**公式1-1**还原。
   {% asset_img 3.png 图3 %}
   * 若出现目标棱块位于已还原面的中间时，使用**公式1-2**将目标棱块移动到底层后再进行还原。
   {% asset_img 4.png 图4 %}
2. 思路二：还原底面十字和侧棱颜色对齐分步进行（黄色中心作为顶面）
   1. 不考虑棱块另一侧颜色，将所有带白色的棱块都翻到顶面黄色中心面；
   2. 旋转顶层，将顶层棱块与白色相邻的颜色和侧面中心颜色对齐；
   3. 颜色对齐后，直接旋转侧面这一层180°，将白色棱块翻到白色底面；
   4. 重复这个步骤，直至所有带白色的棱块都翻到了白色底面。
   {% asset_img 5.png 图5 %}

##### 2.2 还原底层四角
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式1-3：F D F'（右侧）/F' D' F（左侧）<br>
    公式1-4：F D2 F' D'（右侧）/F' D2 F D（左侧）
  </div>
</div>
<div style="text-align: left; margin-bottom: 5px; font-weight: 800;">
  <i class="fa-light fa-triangle-exclamation"></i> 下面三种情况白色中心作为顶面
</div>

1. 情况一：侧面最底层存在带白色的角块
旋转底层，将白色面旋转到正面，角块右侧（左侧）颜色与右侧面（左侧面）中心颜色一致，角块底面颜色与正面中心颜色一致，使用**公式1-3**还原。
{% asset_img 6.png 图6 %}
2. 情况二：侧面最上层存在带白色的角块
使用**公式1-3**将最上层带白色的角块移动到最底层，然后按照情况一的步骤还原。（情况二不需要颜色对齐的操作，因为可能会打乱已经把颜色对齐了的侧棱。）
{% asset_img 7.png 图7 %}
3. 情况三：底面存在带白色的角块
旋转底层，将带白色角块的另外两个面的颜色分别与其相邻面的中心颜色保持一致，使用**公式1-4**还原到情况一，再使用**公式1-3**还原。（情况三白色块的位置不准确区分左右侧，只与选择的正面有关。）
{% asset_img 8.png 图8 %}
{% asset_img 9.png 图9 %}

<div style="text-align: center; padding: 10px; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; font-weight: 800;">
以下步骤均默认黄色中心为顶面，白色中心为底面。
</div>

#### 3. 还原中层
如下图，还原中层分为向右转、向左转和侧棱翻转三种情况。（还原中层可使用的公式有很多，大家可选择自己合适的公式来练习。）
{% asset_img 10.png 图10 %}
* 情况一（向右转）：使用**公式1-5**、**公式1-8**或**公式1-10**还原。
* 情况二（向左转）：使用**公式1-6**、**公式1-9**或**公式1-11**还原。
* 情况三（侧棱翻转）：使用**公式1-7**还原。

①一般公式（参考上图）
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式1-5：U R U R' U' F' U' F<br>
    公式1-6：R' F' R U R U' R' F<br>
    公式1-7：R U2 R' U R U2 R' U F' U' F
  </div>
</div>

②顺逆公式
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式1-8：R U R U R U' R' U' R'（五顺四逆）<br>
    公式1-9：R' U' R' U' R' U R U R（五逆四顺）
  </div>
</div>

此公式的旋转正面如下图：
{% asset_img 11.png 图11 %}

③对称公式
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式1-10：U R U' R' U' F' U F<br>
    公式1-11：U' L' U L U F U' F'
  </div>
</div>

此公式的旋转正面如下图：
{% asset_img 12.png 图12 %}

#### 4. 还原顶层
##### 4.1 还原顶面十字
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800;">
    公式1-12：F R U R' U' F'
  </div>
</div>

还原顶面十字包括点阶段、折角阶段、横线阶段和十字阶段（最终阶段）。
{% asset_img 13.png 图13 %}
使用**公式1-12**可以将某一阶段变换到另一阶段，但是如果不调整顶面位置，可能会进入循环无法到达最终的十字阶段。
下图是顶面十字可能会出现的8种状态：
{% asset_img 14.png 图14 %}
下面是顶面十字某一状态使用一次**公式1-12**后顶面变换后的状态，根据以下规则和自己的顶面状态使用**公式1-12**和**公式U/U'**将顶面还原到十字阶段。
<div style="text-align: center;">
<div style="display: inline-flex; padding: 5px 20px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
<div style="display: inline-flex; justify-content: space-between; align-items: center;">
  <div style="display: inline-flex; text-align: center; margin-right: 5px;">
    Ⅰ<br>
    Ⅱ<br>
    Ⅲ<br>
    Ⅳ<br>
    Ⅴ<br>
    Ⅵ<br>
    Ⅶ<br>
    Ⅷ
  </div>
  <div style="display: inline-flex; text-align: center;">
    →<br>
    →<br>
    →<br>
    →<br>
    →<br>
    →<br>
    →<br>
    →
  </div>
  <div style="display: inline-flex; text-align: left; margin-left: 5px;">
    Ⅱ<br>
    Ⅵ<br>
    Ⅲ<br>
    Ⅶ<br>
    Ⅴ<br>
    Ⅰ<br>
    Ⅷ<br>
    Ⅳ
  </div>
</div>
</div>
</div>

##### 4.2 还原顶面
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
    公式1-13：R U R' U R U2 R'<br>
    公式1-14：R U2 R' U' R U' R'
  </div>
</div>

下图是完成顶面十字还原之后顶面可能会出现的7种状态。
{% asset_img 15.png 图15 %}
下面是7种状态所对应的还原公式：
<div style="text-align: center;">
<div style="display: inline-flex; padding: 5px 20px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800; line-height: 2;">
<div style="display: inline-flex; justify-content: space-between; align-items: center;">
  <div style="display: inline-flex; text-align: center; margin-right: 3px;">
    Ⅰ<br>
    Ⅱ<br>
    Ⅲ<br>
    Ⅳ<br>
    Ⅴ<br>
    Ⅵ<br>
    Ⅶ
  </div>
  <div style="display: inline-flex; text-align: center;">
    ：<br>
    ：<br>
    ：<br>
    ：<br>
    ：<br>
    ：<br>
    ：
  </div>
  <div style="display: inline-flex; text-align: left;">
    公式1-13<br>
    公式1-14<br>
    公式1-13 + 公式1-13<br>
    公式1-13 + U + 公式1-13<br>
    公式1-14 + U + 公式1-13<br>
    公式1-14 + U' + 公式1-13<br>
    公式1-13 + U2 + 公式1-14
  </div>
</div>
</div>
</div>

* 关于顶面更多状态的还原，请参考：[**三阶魔方顶面还原所有状态及其变换和还原**](/2025/12/28-cube-top/)

##### 4.3 还原顶层四角块
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800;">
    公式1-15：R' U L' U2 R U' R' U2 L R
  </div>
</div>

1. 首先寻找顶层侧边是否存在颜色相同的角块，如果存在，把有相同颜色角块的一面作为正面，使用**公式1-15**即可还原顶层侧边四个面左右两角块的颜色。
{% asset_img 16.png 图16 %}
2. 如果顶层侧边不存在颜色相同的角块，就将任意一个面作为正面，使用**公式1-15**后，会在某一面出现颜色相同的角块，然后把这一面作为正面，再次使用**公式1-15**即可还原。
{% asset_img 17.png 图17 %}
3. 最后旋转顶层，将顶层侧边四个面左右两角块的颜色与下面两层侧面颜色对齐。

##### 4.4 还原顶层中棱
<div style="text-align: center;">
  <div style="display: inline-flex; text-align: left; padding: 10px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); margin-bottom: 10px; font-size: 18px; font-weight: 800;">
    公式1-16：R U' R U R U R U' R' U' R2
  </div>
</div>

每使用**公式1-16**一次，都会进行如下图的变换：
{% asset_img 18.png 图18 %}
1. 首先寻找顶层侧边是否存在中棱颜色与左右两角块颜色相同的面，如果存在，把这一面的背面作为正面，使用**公式1-16**还原，如果没有还原，再使用一次**公式1-16**即可还原。
2. 如果顶层侧边不存在中棱颜色与左右两角块颜色相同的面，就将任意一个面作为正面，使用**公式1-16**后，会出现顶层侧边颜色对齐的一个面，把这一面的背面作为正面，使用**公式1-16**还原。
{% asset_img 19.png 图19 %}