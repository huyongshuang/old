const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');
const expressionInput = document.getElementById('expressionInput');
const clearBtn = document.getElementById('clearBtn');
const backspaceBtn = document.getElementById('backspaceBtn');
const statusMessage = document.getElementById('statusMessage');

let scale = 30;
let canvasWidth, canvasHeight;
let offsetX = 0;
let offsetY = 0;

function resizeCanvas() {
    const container = document.querySelector('.graph-section');
    canvas.width = container.clientWidth;
    canvas.height = 400;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    drawGrid();
    if (expressionInput.value.trim() !== '') {
        plotExpression(expressionInput.value);
    }
}

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

function drawGrid() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    const halfWidth = canvasWidth / (2 * scale);
    const halfHeight = canvasHeight / (2 * scale);
    const left = -halfWidth - offsetX;
    const right = halfWidth - offsetX;
    const top = -halfHeight - offsetY;
    const bottom = halfHeight - offsetY;
    
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    
    const firstVerticalLine = Math.ceil(left);
    const lastVerticalLine = Math.floor(right);
    for (let x = firstVerticalLine; x <= lastVerticalLine; x++) {
        const screenX = canvasWidth/2 + (x + offsetX) * scale;
        ctx.beginPath();
        ctx.moveTo(screenX, 0);
        ctx.lineTo(screenX, canvasHeight);
        ctx.stroke();
    }
    
    const firstHorizontalLine = Math.ceil(top);
    const lastHorizontalLine = Math.floor(bottom);
    for (let y = firstHorizontalLine; y <= lastHorizontalLine; y++) {
        const screenY = canvasHeight/2 - (y + offsetY) * scale;
        ctx.beginPath();
        ctx.moveTo(0, screenY);
        ctx.lineTo(canvasWidth, screenY);
        ctx.stroke();
    }
    
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    const xAxisY = canvasHeight/2 - offsetY * scale;
    if (xAxisY >= 0 && xAxisY <= canvasHeight) {
        ctx.beginPath();
        ctx.moveTo(0, xAxisY);
        ctx.lineTo(canvasWidth, xAxisY);
        ctx.stroke();
    }
    
    const yAxisX = canvasWidth/2 + offsetX * scale;
    if (yAxisX >= 0 && yAxisX <= canvasWidth) {
        ctx.beginPath();
        ctx.moveTo(yAxisX, 0);
        ctx.lineTo(yAxisX, canvasHeight);
        ctx.stroke();
    }
    
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let x = firstVerticalLine; x <= lastVerticalLine; x++) {
        if (x === 0) continue;
        const screenX = canvasWidth/2 + (x + offsetX) * scale;
        const screenY = canvasHeight/2 - offsetY * scale;
        
        if (screenY >= 0 && screenY <= canvasHeight) {
            ctx.fillText(x.toString(), screenX, screenY + 5);
            ctx.beginPath();
            ctx.moveTo(screenX, screenY - 5);
            ctx.lineTo(screenX, screenY + 5);
            ctx.stroke();
        }
    }
    
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let y = firstHorizontalLine; y <= lastHorizontalLine; y++) {
        if (y === 0) continue;
        const screenX = canvasWidth/2 + offsetX * scale;
        const screenY = canvasHeight/2 - (y + offsetY) * scale;
        
        if (screenX >= 0 && screenX <= canvasWidth) {
            ctx.fillText(y.toString(), screenX - 8, screenY);
            ctx.beginPath();
            ctx.moveTo(screenX - 5, screenY);
            ctx.lineTo(screenX + 5, screenY);
            ctx.stroke();
        }
    }
    
    const originX = canvasWidth/2 + offsetX * scale;
    const originY = canvasHeight/2 - offsetY * scale;
    if (originX >= 0 && originX <= canvasWidth && originY >= 0 && originY <= canvasHeight) {
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.arc(originX, originY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText('O', originX - 8, originY + 15);
    }
}

function customLog(base, x) {
    return Math.log(x) / Math.log(base);
}

function numericalDerivative(func, x, h = 0.0001) {
    try {
        return (func(x + h) - func(x - h)) / (2 * h);
    } catch (error) {
        return NaN;
    }
}

function numericalIntegrateFromZero(func, x, n = 1000) {
    if (Math.abs(x) < 0.001) return 0;
    
    const a = 0;
    const b = x;
    const h = (b - a) / n;
    let sum = func(a) + func(b);
    
    for (let i = 1; i < n; i++) {
        const xi = a + i * h;
        const coeff = (i % 2 === 0) ? 2 : 4;
        try {
            sum += coeff * func(xi);
        } catch (error) {
            return NaN;
        }
    }
    
    return sum * h / 3;
}

function preprocessExpression(expression) {
    let expr = expression;
    
    const expRegex = /exp\(([^()]*(\([^()]*\)[^()]*)*)\)/g;
    expr = expr.replace(expRegex, 'e^($1)');
    
    const secRegex = /sec\(([^()]*(\([^()]*\)[^()]*)*)\)/g;
    expr = expr.replace(secRegex, '1/cos($1)');
    
    const piPattern = /π(?=[a-zA-Z0-9(])/g;
    const ePattern = /e(?=[a-zA-Z0-9(])/g;
    
    expr = expr.replace(piPattern, 'π*');
    expr = expr.replace(ePattern, 'e*');
    
    const numberPiPattern = /(\d+)(?=π)/g;
    const numberEPattern = /(\d+)(?=e)/g;
    
    expr = expr.replace(numberPiPattern, '$1*');
    expr = expr.replace(numberEPattern, '$1*');
    
    const varPiPattern = /([a-zA-Z])(?=π)/g;
    const varEPattern = /([a-zA-Z])(?=e)/g;
    
    expr = expr.replace(varPiPattern, '$1*');
    expr = expr.replace(varEPattern, '$1*');
    
    const piNumberPattern = /π(?=\d)/g;
    const eNumberPattern = /e(?=\d)/g;
    
    expr = expr.replace(piNumberPattern, 'π*');
    expr = expr.replace(eNumberPattern, 'e*');
    
    return expr;
}

function plotExpression(expression) {
    drawGrid();
    
    if (!expression || expression.trim() === '') {
        statusMessage.textContent = "请输入函数表达式或曲线方程";
        return;
    }
    
    let expr = expression.trim();
    
    if (expr.startsWith('derivative(')) {
        plotDerivativeExpression(expr);
        return;
    }
    
    if (expr.startsWith('integrate(')) {
        plotIntegralExpression(expr);
        return;
    }
    
    expr = preprocessExpression(expr);
    
    let processedExpr = expr;
    let isImplicit = false;
    
    if (processedExpr.includes('=')) {
        isImplicit = true;
        const parts = processedExpr.split('=');
        if (parts.length !== 2) {
            statusMessage.textContent = "无效的方程格式，请使用 f(x,y)=0 格式";
            return;
        }
        processedExpr = `(${parts[0]})-(${parts[1]})`;
    }
    
    const logRegex = /log\(([^,]+),([^)]+)\)/g;
    processedExpr = processedExpr.replace(logRegex, 'customLog($1,$2)');
    
    let compiledExpr;
    try {
        processedExpr = processedExpr.replace(/π/g, 'pi')
                   .replace(/√/g, 'sqrt')
                   .replace(/\|x\|/g, 'abs')
                   .replace(/arcsin/g, 'asin')
                   .replace(/arccos/g, 'acos')
                   .replace(/arctan/g, 'atan')
                   .replace(/csc/g, '1/sin')
                   .replace(/cot/g, '1/tan');
        
        compiledExpr = math.compile(processedExpr);
    } catch (error) {
        statusMessage.textContent = `表达式错误: ${error.message}`;
        return;
    }
    
    const halfWidth = canvasWidth / (2 * scale);
    const halfHeight = canvasHeight / (2 * scale);
    const left = -halfWidth - offsetX;
    const right = halfWidth - offsetX;
    const top = -halfHeight - offsetY;
    const bottom = halfHeight - offsetY;
    
    if (!isImplicit) {
        plotExplicitFunction(compiledExpr, left, right, expression);
    } else {
        plotImplicitEquation(compiledExpr, left, right, top, bottom, expression);
    }
}

function plotExplicitFunction(compiledExpr, left, right, originalExpression) {
    ctx.strokeStyle = '#4a6fa5';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    let hasPoints = false;
    
    for (let screenX = 0; screenX <= canvasWidth; screenX++) {
        const x = left + (right - left) * screenX / canvasWidth;
        
        try {
            const scope = {
                x: x,
                y: 0,
                pi: Math.PI,
                e: Math.E,
                sqrt: Math.sqrt,
                abs: Math.abs,
                exp: Math.exp,
                log: Math.log,
                ln: Math.log,
                sin: Math.sin,
                cos: Math.cos,
                tan: Math.tan,
                asin: Math.asin,
                acos: Math.acos,
                atan: Math.atan,
                pow: Math.pow,
                customLog: customLog
            };
            
            const y = compiledExpr.evaluate(scope);
            
            if (typeof y === 'number' && !isNaN(y) && isFinite(y)) {
                const screenY = canvasHeight/2 - (y + offsetY) * scale;
                
                if (screenY >= 0 && screenY <= canvasHeight) {
                    if (!hasPoints) {
                        ctx.beginPath();
                        ctx.moveTo(screenX, screenY);
                        hasPoints = true;
                    } else {
                        ctx.lineTo(screenX, screenY);
                    }
                }
            }
        } catch (error) {
            continue;
        }
    }
    
    if (hasPoints) {
        ctx.stroke();
        statusMessage.textContent = `绘制函数: ${originalExpression}`;
    } else {
        statusMessage.textContent = "在可见范围内未找到有效点";
    }
}

function plotImplicitEquation(compiledExpr, left, right, top, bottom, originalExpression) {
    const step = 1 / scale;
    const threshold = 0.02;
    
    ctx.strokeStyle = '#4a6fa5';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    let pathStarted = false;
    
    for (let x = left; x < right; x += step) {
        let prevValue = null;
        let prevY = null;
        
        for (let y = top; y < bottom; y += step) {
            try {
                const scope = {
                    x: x,
                    y: y,
                    pi: Math.PI,
                    e: Math.E,
                    sqrt: Math.sqrt,
                    abs: Math.abs,
                    exp: Math.exp,
                    log: Math.log,
                    ln: Math.log,
                    sin: Math.sin,
                    cos: Math.cos,
                    tan: Math.tan,
                    asin: Math.asin,
                    acos: Math.acos,
                    atan: Math.atan,
                    pow: Math.pow,
                    customLog: customLog
                };
                
                const value = compiledExpr.evaluate(scope);
                
                if (prevValue !== null && 
                    ((prevValue < -threshold && value > threshold) || 
                     (prevValue > threshold && value < -threshold))) {
                    
                    const t = (0 - prevValue) / (value - prevValue);
                    const intersectY = prevY + t * step;
                    
                    const screenX = canvasWidth/2 + (x + offsetX) * scale;
                    const screenY = canvasHeight/2 - (intersectY + offsetY) * scale;
                    
                    if (screenX >= 0 && screenX <= canvasWidth && screenY >= 0 && screenY <= canvasHeight) {
                        if (!pathStarted) {
                            ctx.beginPath();
                            ctx.moveTo(screenX, screenY);
                            pathStarted = true;
                        } else {
                            ctx.lineTo(screenX, screenY);
                        }
                    }
                }
                
                prevValue = value;
                prevY = y;
            } catch (error) {
                prevValue = null;
                prevY = null;
            }
        }
    }
    
    if (pathStarted) {
        ctx.stroke();
    }
    
    if (!pathStarted) {
        ctx.fillStyle = '#4a6fa5';
        const points = [];
        
        for (let x = left; x < right; x += step) {
            for (let y = top; y < bottom; y += step) {
                try {
                    const scope = {
                        x: x,
                        y: y,
                        pi: Math.PI,
                        e: Math.E,
                        sqrt: Math.sqrt,
                        abs: Math.abs,
                        exp: Math.exp,
                        log: Math.log,
                        ln: Math.log,
                        sin: Math.sin,
                        cos: Math.cos,
                        tan: Math.tan,
                        asin: Math.asin,
                        acos: Math.acos,
                        atan: Math.atan,
                        pow: Math.pow,
                        customLog: customLog
                    };
                    
                    const value = compiledExpr.evaluate(scope);
                    
                    if (Math.abs(value) < threshold) {
                        points.push({x, y});
                    }
                } catch (error) {
                }
            }
        }
        
        const maxPoints = 10000;
        const skip = Math.max(1, Math.floor(points.length / maxPoints));
        
        for (let i = 0; i < points.length; i += skip) {
            const point = points[i];
            const screenX = canvasWidth/2 + (point.x + offsetX) * scale;
            const screenY = canvasHeight/2 - (point.y + offsetY) * scale;
            
            if (screenX >= 0 && screenX <= canvasWidth && screenY >= 0 && screenY <= canvasHeight) {
                ctx.beginPath();
                ctx.arc(screenX, screenY, 0.8, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    
    statusMessage.textContent = `绘制隐式方程: ${originalExpression}`;
}

function plotDerivativeExpression(expression) {
    const content = expression.substring(11, expression.length - 1);
    const parts = content.split(',').map(part => part.trim());
    
    let funcExpr, variable;
    
    if (parts.length === 1) {
        funcExpr = parts[0];
        variable = 'x';
    } else if (parts.length === 2) {
        funcExpr = parts[0];
        variable = parts[1];
    } else {
        statusMessage.textContent = "无效的求导表达式格式";
        return;
    }
    
    try {
        funcExpr = preprocessExpression(funcExpr);
        
        const logRegex = /log\(([^,]+),([^)]+)\)/g;
        funcExpr = funcExpr.replace(logRegex, 'customLog($1,$2)');
        
        funcExpr = funcExpr.replace(/π/g, 'pi')
                           .replace(/√/g, 'sqrt')
                           .replace(/\|x\|/g, 'abs')
                           .replace(/arcsin/g, 'asin')
                           .replace(/arccos/g, 'acos')
                           .replace(/arctan/g, 'atan')
                           .replace(/csc/g, '1/sin')
                           .replace(/cot/g, '1/tan');
        
        const compiledFunc = math.compile(funcExpr);
        
        const halfWidth = canvasWidth / (2 * scale);
        const left = -halfWidth - offsetX;
        const right = halfWidth - offsetX;
        
        ctx.strokeStyle = '#d32f2f';
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        let hasPoints = false;
        
        const func = (x) => {
            const scope = {
                x: x,
                [variable]: x,
                pi: Math.PI,
                e: Math.E,
                sqrt: Math.sqrt,
                abs: Math.abs,
                exp: Math.exp,
                log: Math.log,
                ln: Math.log,
                sin: Math.sin,
                cos: Math.cos,
                tan: Math.tan,
                asin: Math.asin,
                acos: Math.acos,
                atan: Math.atan,
                pow: Math.pow,
                customLog: customLog
            };
            return compiledFunc.evaluate(scope);
        };
        
        for (let screenX = 0; screenX <= canvasWidth; screenX++) {
            const x = left + (right - left) * screenX / canvasWidth;
            
            try {
                const derivativeValue = numericalDerivative(func, x);
                
                if (typeof derivativeValue === 'number' && !isNaN(derivativeValue) && isFinite(derivativeValue)) {
                    const screenY = canvasHeight/2 - (derivativeValue + offsetY) * scale;
                    
                    if (screenY >= 0 && screenY <= canvasHeight) {
                        if (!hasPoints) {
                            ctx.beginPath();
                            ctx.moveTo(screenX, screenY);
                            hasPoints = true;
                        } else {
                            ctx.lineTo(screenX, screenY);
                        }
                    }
                }
            } catch (error) {
                continue;
            }
        }
        
        if (hasPoints) {
            ctx.stroke();
            
            if (parts.length === 1) {
                statusMessage.textContent = `绘制导数: derivative(${funcExpr})`;
            } else {
                statusMessage.textContent = `绘制导数: derivative(${funcExpr}, ${variable})`;
            }
        } else {
            statusMessage.textContent = "在可见范围内未找到有效的导数值";
        }
    } catch (error) {
        statusMessage.textContent = `求导错误: ${error.message}`;
    }
}

function plotIntegralExpression(expression) {
    const content = expression.substring(10, expression.length - 1);
    const parts = content.split(',').map(part => part.trim());
    
    let funcExpr, variable;
    
    if (parts.length === 1) {
        funcExpr = parts[0];
        variable = 'x';
    } else if (parts.length === 2) {
        funcExpr = parts[0];
        variable = parts[1];
    } else {
        statusMessage.textContent = "无效的积分表达式格式";
        return;
    }
    
    try {
        funcExpr = preprocessExpression(funcExpr);
        
        const logRegex = /log\(([^,]+),([^)]+)\)/g;
        funcExpr = funcExpr.replace(logRegex, 'customLog($1,$2)');
        
        funcExpr = funcExpr.replace(/π/g, 'pi')
                           .replace(/√/g, 'sqrt')
                           .replace(/\|x\|/g, 'abs')
                           .replace(/arcsin/g, 'asin')
                           .replace(/arccos/g, 'acos')
                           .replace(/arctan/g, 'atan')
                           .replace(/csc/g, '1/sin')
                           .replace(/cot/g, '1/tan');
        
        const compiledFunc = math.compile(funcExpr);
        
        const halfWidth = canvasWidth / (2 * scale);
        const left = -halfWidth - offsetX;
        const right = halfWidth - offsetX;
        
        ctx.strokeStyle = '#2e7d32';
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        let hasPoints = false;
        
        const integrand = (x) => {
            const scope = {
                x: x,
                [variable]: x,
                pi: Math.PI,
                e: Math.E,
                sqrt: Math.sqrt,
                abs: Math.abs,
                exp: Math.exp,
                log: Math.log,
                ln: Math.log,
                sin: Math.sin,
                cos: Math.cos,
                tan: Math.tan,
                asin: Math.asin,
                acos: Math.acos,
                atan: Math.atan,
                pow: Math.pow,
                customLog: customLog
            };
            return compiledFunc.evaluate(scope);
        };
        
        for (let screenX = 0; screenX <= canvasWidth; screenX++) {
            const x = left + (right - left) * screenX / canvasWidth;
            
            try {
                const integralValue = numericalIntegrateFromZero(integrand, x, 2000);
                
                if (typeof integralValue === 'number' && !isNaN(integralValue) && isFinite(integralValue)) {
                    const screenY = canvasHeight/2 - (integralValue + offsetY) * scale;
                    
                    if (screenY >= 0 && screenY <= canvasHeight) {
                        if (!hasPoints) {
                            ctx.beginPath();
                            ctx.moveTo(screenX, screenY);
                            hasPoints = true;
                        } else {
                            ctx.lineTo(screenX, screenY);
                        }
                    }
                }
            } catch (error) {
                continue;
            }
        }
        
        if (hasPoints) {
            ctx.stroke();
            
            if (parts.length === 1) {
                statusMessage.textContent = `绘制积分: integrate(${funcExpr}) (常数C=0)`;
            } else {
                statusMessage.textContent = `绘制积分: integrate(${funcExpr}, ${variable}) (常数C=0)`;
            }
        } else {
            statusMessage.textContent = "在可见范围内未找到有效的积分值";
        }
    } catch (error) {
        statusMessage.textContent = `积分错误: ${error.message}`;
    }
}

let debounceTimer;
expressionInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        plotExpression(expressionInput.value);
    }, 300);
});

document.querySelectorAll('.calc-button[data-value]').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const input = expressionInput;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        
        let insertValue = value;
        if (value === 'pi') insertValue = 'π';
        
        input.value = input.value.substring(0, start) + insertValue + input.value.substring(end);
        input.selectionStart = input.selectionEnd = start + insertValue.length;
        input.focus();
        
        const event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
    });
});

clearBtn.addEventListener('click', function() {
    expressionInput.value = '';
    expressionInput.focus();
    drawGrid();
    statusMessage.textContent = "输入表达式后，图像将实时显示";
});

backspaceBtn.addEventListener('click', function() {
    const input = expressionInput;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    
    if (start === end && start > 0) {
        input.value = input.value.substring(0, start - 1) + input.value.substring(end);
        input.selectionStart = input.selectionEnd = start - 1;
    } else if (start !== end) {
        input.value = input.value.substring(0, start) + input.value.substring(end);
        input.selectionStart = input.selectionEnd = start;
    }
    
    input.focus();
    
    const event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
});

expressionInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        plotExpression(expressionInput.value);
        e.preventDefault();
    } else if (e.key === 'Escape') {
        expressionInput.value = '';
        drawGrid();
    }
});

drawGrid();

let isDragging = false;
let lastMouseX, lastMouseY;

canvas.addEventListener('mousedown', function(e) {
    isDragging = true;
    const rect = canvas.getBoundingClientRect();
    lastMouseX = e.clientX - rect.left;
    lastMouseY = e.clientY - rect.top;
});

canvas.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    
    const rect = canvas.getBoundingClientRect();
    const currentMouseX = e.clientX - rect.left;
    const currentMouseY = e.clientY - rect.top;
    
    const deltaX = currentMouseX - lastMouseX;
    const deltaY = currentMouseY - lastMouseY;
    
    offsetX += deltaX / scale;
    offsetY -= deltaY / scale;
    
    lastMouseX = currentMouseX;
    lastMouseY = currentMouseY;
    
    plotExpression(expressionInput.value);
});

canvas.addEventListener('mouseup', function() {
    isDragging = false;
});

canvas.addEventListener('mouseleave', function() {
    isDragging = false;
});

canvas.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const mathX = (mouseX - canvasWidth/2) / scale - offsetX;
    const mathY = (canvasHeight/2 - mouseY) / scale - offsetY;
    
    if (e.deltaY < 0) {
        scale *= 1.1;
    } else {
        scale /= 1.1;
    }
    
    offsetX = (mouseX - canvasWidth/2) / scale - mathX;
    offsetY = (canvasHeight/2 - mouseY) / scale - mathY;
    
    plotExpression(expressionInput.value);
});