document.addEventListener('DOMContentLoaded', function() {
    // 初始颜色
    let currentColor = '#dee2e6';
    let hexUpperCase = false;
    
    // 获取DOM元素
    const colorPreview = document.getElementById('colorPreview');
    const hexValue = document.getElementById('hexValue');
    const pickColorBtn = document.getElementById('pickColor');
    const toggleCaseBtn = document.getElementById('toggleCase');
    const copyHexBtn = document.getElementById('copyHex');
    const colorTable = document.getElementById('colorTable');
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    // 初始化颜色预览
    colorPreview.style.backgroundColor = currentColor;
    
    // 检查浏览器是否支持EyeDropper API
    if (!window.EyeDropper) {
        pickColorBtn.disabled = true;
        pickColorBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> 浏览器不支持EyeDropper API';
        pickColorBtn.style.backgroundColor = '#e74c3c';
        showNotification('您的浏览器不支持EyeDropper API，请使用Chrome或Edge浏览器', 'error');
    }
    
    // 打开颜色拾取器
    pickColorBtn.addEventListener('click', async () => {
        try {
            const eyeDropper = new EyeDropper();
            const result = await eyeDropper.open();
            
            // 更新当前颜色
            currentColor = result.sRGBHex;
            updateColorDisplay();
            showNotification('颜色已成功拾取', 'success');
        } catch (err) {
            // 用户取消取色操作
            if (err.toString().includes('AbortError')) {
                console.log('用户取消了取色操作');
            } else {
                console.error('取色错误:', err);
                showNotification('取色过程中发生错误', 'error');
            }
        }
    });
    
    // HEX大小写切换
    toggleCaseBtn.addEventListener('click', () => {
        hexUpperCase = !hexUpperCase;
        updateHexDisplay();
    });
    
    // 复制HEX颜色
    copyHexBtn.addEventListener('click', () => {
        const hexToCopy = hexUpperCase ? currentColor.toUpperCase() : currentColor.toLowerCase();
        copyToClipboard(hexToCopy);
        showNotification(`HEX颜色 ${hexToCopy} 已复制到剪贴板`);
    });
    
    // 初始化颜色表格
    initColorTable();
    
    // 更新颜色显示
    function updateColorDisplay() {
        // 更新颜色预览
        colorPreview.style.backgroundColor = currentColor;
        
        // 更新HEX显示
        updateHexDisplay();
        
        // 更新所有颜色格式
        updateAllColorFormats();
    }
    
    // 更新HEX显示
    function updateHexDisplay() {
        hexValue.textContent = hexUpperCase ? currentColor.toUpperCase() : currentColor.toLowerCase();
    }
    
    // 初始化颜色表格
    function initColorTable() {
        const colorFormats = [
            { name: 'RGB', format: 'rgb' },
            { name: 'RGBA', format: 'rgba' },
            { name: 'HSL', format: 'hsl' },
            { name: 'HSLA', format: 'hsla' },
            { name: 'HSV', format: 'hsv' },
            { name: 'HSVA', format: 'hsva' },
            { name: 'CMYK', format: 'cmyk' },
            { name: 'CMYKA', format: 'cmyka' }
        ];
        
        colorFormats.forEach(format => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="color-name">${format.name}</td>
                <td>
                    <div class="color-row">
                        <div class="color-value" id="${format.format}Value">${getColorValue(format.format)}</div>
                    </div>
                </td>
                <td class="actions-cell">
                    <button class="copy-btn" data-format="${format.format}">
                        <i class="far fa-copy"></i> 复制
                    </button>
                </td>
            `;
            colorTable.appendChild(row);
        });
        
        // 添加复制按钮事件监听器
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const format = this.getAttribute('data-format');
                const valueElement = document.getElementById(`${format}Value`);
                const value = valueElement.textContent;
                
                copyToClipboard(value);
                showNotification(`${format.toUpperCase()}颜色已复制到剪贴板`);
                
                // 添加复制成功视觉反馈
                this.classList.add('copied');
                this.innerHTML = '<i class="fas fa-check"></i> 已复制';
                
                setTimeout(() => {
                    this.classList.remove('copied');
                    this.innerHTML = '<i class="far fa-copy"></i> 复制';
                }, 2000);
            });
        });
    }
    
    // 更新所有颜色格式
    function updateAllColorFormats() {
        const formats = ['rgb', 'rgba', 'hsl', 'hsla', 'hsv', 'hsva', 'cmyk', 'cmyka'];
        
        formats.forEach(format => {
            const element = document.getElementById(`${format}Value`);
            if (element) {
                element.textContent = getColorValue(format);
            }
        });
    }
    
    // 获取颜色值
    function getColorValue(format) {
        // 将HEX转换为RGB
        const r = parseInt(currentColor.slice(1, 3), 16);
        const g = parseInt(currentColor.slice(3, 5), 16);
        const b = parseInt(currentColor.slice(5, 7), 16);
        
        switch(format) {
            case 'rgb':
                return `rgb(${r},${g},${b})`;
            case 'rgba':
                return `rgba(${r},${g},${b},1.00)`;
            case 'hsl':
                return rgbToHsl(r, g, b, false);
            case 'hsla':
                return rgbToHsl(r, g, b, true);
            case 'hsv':
                return rgbToHsv(r, g, b, false);
            case 'hsva':
                return rgbToHsv(r, g, b, true);
            case 'cmyk':
                return rgbToCmyk(r, g, b, false);
            case 'cmyka':
                return rgbToCmyk(r, g, b, true);
            default:
                return currentColor;
        }
    }
    
    // RGB转HSL
    function rgbToHsl(r, g, b, includeAlpha) {
        r /= 255;
        g /= 255;
        b /= 255;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        
        if (max === min) {
            h = s = 0; // 灰色
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            
            h /= 6;
        }
        
        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);
        
        if (includeAlpha) {
            return `hsla(${h},${s}%,${l}%,1.00)`;
        }
        
        return `hsl(${h},${s}%,${l}%)`;
    }
    
    // RGB转HSV
    function rgbToHsv(r, g, b, includeAlpha) {
        r /= 255;
        g /= 255;
        b /= 255;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, v = max;
        
        const d = max - min;
        s = max === 0 ? 0 : d / max;
        
        if (max === min) {
            h = 0; // 灰色
        } else {
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            
            h /= 6;
        }
        
        h = Math.round(h * 360);
        s = Math.round(s * 100);
        v = Math.round(v * 100);
        
        if (includeAlpha) {
            return `hsva(${h},${s}%,${v}%,1.00)`;
        }
        
        return `hsv(${h},${s}%,${v}%)`;
    }
    
    // RGB转CMYK
    function rgbToCmyk(r, g, b, includeAlpha) {
        if (r === 0 && g === 0 && b === 0) {
            if (includeAlpha) {
                return 'cmyka(0,0,0,100,1.00)';
            }
            return 'cmyk(0,0,0,100)';
        }
        
        r /= 255;
        g /= 255;
        b /= 255;
        
        const k = 1 - Math.max(r, g, b);
        const c = (1 - r - k) / (1 - k);
        const m = (1 - g - k) / (1 - k);
        const y = (1 - b - k) / (1 - k);
        
        const cVal = Math.round(c * 100);
        const mVal = Math.round(m * 100);
        const yVal = Math.round(y * 100);
        const kVal = Math.round(k * 100);
        
        if (includeAlpha) {
            return `cmyka(${cVal},${mVal},${yVal},${kVal},1.00)`;
        }
        
        return `cmyk(${cVal},${mVal},${yVal},${kVal})`;
    }
    
    // 复制到剪贴板
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('文本已复制到剪贴板:', text);
        }).catch(err => {
            console.error('复制失败:', err);
            // 备用方法
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        });
    }
    
    // 显示通知
    function showNotification(message, type = 'success') {
        notificationText.textContent = message;
        
        if (type === 'error') {
            notification.style.backgroundColor = '#e74c3c';
        } else {
            notification.style.backgroundColor = '#2ecc71';
        }
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // 使用示例图片中的初始值
    function initializeWithExample() {
        currentColor = '#44bb85';
        updateColorDisplay();
    }
    
    // 初始化示例颜色
    initializeWithExample();
});