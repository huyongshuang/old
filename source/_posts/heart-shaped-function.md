---
title: 心形函数
excerpt: ''
date: 2026-01-11 16:28:13
updated:
tags:
categories:
thumbnail: /2026/1/11-heart-shaped-function/0.png
cover:
mathjax: true
---
* **温馨提示：Excel心形曲线文件下载链接在** [**最后**](#3-3-文件下载)。

### 1. 函数公式
{% notel green fa-regular fa-function 心形函数公式 %}
$$
y = \left(x^2\right)^{\frac{1}{3}} + 0.9 \cdot \left(3.3 - x^2\right)^{\frac{1}{2}} \cdot \sin(\mathbf{n} \pi x)
$$
{% endnotel %}
其中，n 是参数，函数图像随着 n 值的变化而变化。函数定义域为：[-1.81,1.81]

### 2. 图像在线演示
<iframe 
    src="/html/heart-shaped-function/index.html" 
    width="100%" 
    height="1000px" 
    frameborder="0" 
    scrolling="no"
    style="border: none; max-width: 900px; margin: 0 auto; display: block;">
</iframe>

### 3. Excel中实现
#### 3.1 制作步骤
{% notel blue 1. 变量 x %}
1. 新建一个Excel表格，在`A1`和`B1`单元格内分别写上`X`、`Y`；
2. 在`A2`单元格内写上`-1.81`（定义域左端点）；
3. 选中`A2`单元格，在`开始`选项卡下找到`编辑`→`填充`→`序列`，打开该选项，选择序列产生在`列`，步长值填`0.01`，终止值填`1.81`（定义域右端点）；
4. 这样，就在第 A 列生成了函数所有可能的变量 x 的值。
{% endnotel %}
{% asset_img 1.png 图1 %}
{% notel blue 2. 变量 y %}
1. 在`B2`单元格内写入公式：`=(A2^2)^(1/3)+0.9*(3.3-A2^2)^(1/2)*SIN($D$2*PI()*A2)`，其中，`D2`单元格为参数 n，`$D$2`为绝对引用（F4键）；
2. 选中`B2`单元格，把鼠标移动到`B2`单元格的右下角，鼠标指针变为黑色十字（填充柄），双击左键，自动向下填充公式，并计算出 A 列对应的 y 值。
{% endnotel %}
```Excel公式
=(A2^2)^(1/3)+0.9*(3.3-A2^2)^(1/2)*SIN($D$2*PI()*A2)
```
{% asset_img 2.png 图2 %}
{% asset_img 3.png 图3 %}
{% notel blue 3. 创建图形 %}
1. 选中`A1`单元格，按`Ctrl + Shift + →`键，再按`Ctrl + Shift + ↓`键，选中第 A 列和第 B 列的所有数据；
2. 在`插入`选项卡下找到`图表`→`插入散点图(X、Y)或气泡图`→`带平滑线的散点图`，创建心形散点图；
3. 点击图表中的 X 轴，按`Delete`键删除，点击图表中的 Y 轴，按`Delete`键删除，删除图表标题和图例。
{% endnotel %}
{% asset_img 4.png 图4 %}
{% asset_img 5.png 图5 %}
{% notel blue 4. 迭代计算 %}
1. 在`D2`单元格中输入公式：`=D2+0.1`，回车；
2. 选中`D2`单元格，点击Excel左上角的`文件`选项卡，选择左下角`更多`、`选项`、`公式`；
3. 右侧`计算选项`部分，勾选`启用迭代计算`，设置`最多迭代次数`为`1`，点击`确定`保存设置；
4. 按住键盘上的`F9`键（或`Fn+F9`键）不放，心形函数图像开始`跳动`的动画效果。
{% endnotel %}
{% asset_img 6.png 图6 %}
{% asset_img 7.png 图7 %}
**效果图：**
{% asset_img 8.gif 图8 %}
#### 3.2 Excel宏代码实现运算控制
* 打开你的Excel文件，点击Excel左上角的`文件`选项卡，选择`另存为`，保存类型为：`Excel启用宏的工作簿(*.xlsm)`。
* 点击左上角`文件`选项卡，选择左下角`更多`、`选项`、`自定义功能区`，右侧`自定义功能区`勾选`开发工具`，点击`确定`保存。
##### （1）表单控件：按钮
点击`开发工具`，点击`Visual Basic`，输入以下代码：
```vba
Public isLooping As Boolean
Public i As Double

Sub 心形图()
    isLooping = Not isLooping
    If isLooping Then
        i = 0
        Do While isLooping And i <= 1000
            Range("D2").Value = i / 10
            i = i + 1
            DoEvents
            If i Mod 1 = 0 Then
                DoEvents
            End If
        Loop
        isLooping = False
    End If
End Sub
```
插入一个`表单控件：按钮`，指定宏为：`心形图`，点击`确定`，将按钮命名为`开关`。
{% asset_img 9.png 图9 %}
##### （2）表单控件：启动开关和连续开关
点击`开发工具`，点击`Visual Basic`，输入以下代码：
```vba
Public isLooping As Boolean
Public i As Double
Public continue As Boolean

Sub 心形图()
    isLooping = Not isLooping
    If isLooping Then
        If Not continue Then
            i = 0
        End If
        Do While isLooping And i <= 1000
            Range("D2").Value = i / 10
            i = i + 1
            DoEvents
            If i Mod 1 = 0 Then
                DoEvents
            End If
        Loop
        isLooping = False
    End If
End Sub

Sub 连续开关()
    continue = Not continue
End Sub
```
插入一个`表单控件：按钮`，指定宏为：`心形图`，点击`确定`，将按钮命名为`启动开关`，用于控制启停；
插入一个`表单控件：按钮`，指定宏为：`连续开关`，点击`确定`，将按钮命名为`连续开关`，用于控制参数n是否连续。
{% asset_img 10.png 图10 %}
##### （3）ActiveX控件：按钮
插入一个`ActiveX控件：按钮`，在`开发工具`选项卡下打开`设计模式`，右键刚创建的按钮，选择`查看代码`，输入以下代码：
```vba
Public isLooping As Boolean
Public i As Double

Private Sub CommandButton1_Click()
    isLooping = Not isLooping
    If isLooping Then
        CommandButton1.Caption = "停止"
        i = 0
        Do While isLooping And i <= 1000
            Range("D2").Value = i / 10
            i = i + 1
            DoEvents
            If i Mod 1 = 0 Then
                DoEvents
            End If
        Loop
        isLooping = False
        CommandButton1.Caption = "开始"
    Else
        isLooping = False
        CommandButton1.Caption = "开始"
    End If
End Sub
```
{% asset_img 11.png 图11 %}
##### （4）表单控件：滚动条
插入一个`表单控件：滚动条`，右键滚动条，选择`设置控件格式`，在`控制`选项下，设置`最小值：0`、`最大值：100`、`步长：1`、`单元格链接：$D$2`。
{% asset_img 12.png 图12 %}
##### （5）ActiveX控件：滚动条
插入一个`ActiveX控件：滚动条`，在`开发工具`选项卡下打开`设计模式`，右键刚创建的滚动条，选择`查看代码`，输入以下代码：
```vba
Private Sub ScrollBar1_Change()
Range("D2") = ScrollBar1.Value / 10
End Sub
```
{% asset_img 13.png 图13 %}
#### 3.3 文件下载
{% btn center large::点击下载::/2026/1/11-heart-shaped-function/心形曲线.zip?download::fa-solid fa-download %}