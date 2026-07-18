const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');
const nSlider = document.getElementById('nSlider');
const currentN = document.getElementById('currentN');
const nValue = document.getElementById('nValue');
const startResetBtn = document.getElementById('startResetBtn');
const pauseContinueBtn = document.getElementById('pauseContinueBtn');

let n = 0;
let animationId = null;
let isAnimating = false;
let isPaused = false;
let lastTime = 0;
const targetSpeed = 3.0;

const xMin = -2, xMax = 2;
const yMin = -2, yMax = 4;

function toCanvasX(x) {
    return ((x - xMin) / (xMax - xMin)) * canvas.width;
}

function toCanvasY(y) {
    return canvas.height - ((y - yMin) / (yMax - yMin)) * canvas.height;
}

function drawAxes() {
    ctx.save();
    ctx.strokeStyle = '#7f8c8d';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(0, toCanvasY(0));
    ctx.lineTo(canvas.width, toCanvasY(0));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(toCanvasX(0), 0);
    ctx.lineTo(toCanvasX(0), canvas.height);
    ctx.stroke();

    ctx.fillStyle = '#7f8c8d';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
        if (x === 0) continue;
        const canvasX = toCanvasX(x);
        ctx.beginPath();
        ctx.moveTo(canvasX, toCanvasY(0) - 5);
        ctx.lineTo(canvasX, toCanvasY(0) + 5);
        ctx.stroke();
        ctx.fillText(x, canvasX, toCanvasY(0) + 8);
    }

    for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
        if (y === 0) continue;
        const canvasY = toCanvasY(y);
        ctx.beginPath();
        ctx.moveTo(toCanvasX(0) - 5, canvasY);
        ctx.lineTo(toCanvasX(0) + 5, canvasY);
        ctx.stroke();
        ctx.textAlign = 'right';
        ctx.fillText(y, toCanvasX(0) - 8, canvasY - 6);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText('0', toCanvasX(0) - 5, toCanvasY(0) + 5);
    ctx.restore();
}

function calculateFunction(x) {
    const part1 = Math.pow(x * x, 1/3);
    const sqrtArg = 3.3 - x * x;
    
    if (sqrtArg < 0) {
        return NaN;
    }
    
    const part2 = 0.9 * Math.sqrt(sqrtArg) * Math.sin(n * Math.PI * x);
    return part1 + part2;
}

function drawFunction() {
    ctx.save();
    ctx.lineWidth = 2;

    ctx.strokeStyle = '#2980b9';
    ctx.beginPath();
    let isFirstPoint = true;
    const step = (xMax - xMin) / 500;
    
    for (let x = xMin; x <= xMax; x += step) {
        const y = calculateFunction(x);
        
        if (isNaN(y)) {
            isFirstPoint = true;
            continue;
        }
        
        const canvasX = toCanvasX(x);
        const canvasY = toCanvasY(y);
        
        if (y < yMin || y > yMax) {
            isFirstPoint = true;
            continue;
        }
        
        if (isFirstPoint) {
            ctx.moveTo(canvasX, canvasY);
            isFirstPoint = false;
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    
    ctx.stroke();

    ctx.strokeStyle = 'rgba(231, 76, 60, 0.7)';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    isFirstPoint = true;
    
    for (let x = xMin; x <= xMax; x += step) {
        const sqrtArg = 3.3 - x * x;
        
        if (sqrtArg < 0) {
            const canvasX = toCanvasX(x);
            
            if (isFirstPoint) {
                ctx.moveTo(canvasX, toCanvasY(yMin));
                isFirstPoint = false;
            }
            
            ctx.lineTo(canvasX, toCanvasY(yMax));
        } else {
            isFirstPoint = true;
        }
    }
    
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
}

function drawGrid() {
    ctx.save();
    ctx.strokeStyle = 'rgba(189, 195, 199, 0.3)';
    ctx.lineWidth = 0.5;

    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
        if (x === 0) continue;
        ctx.beginPath();
        ctx.moveTo(toCanvasX(x), 0);
        ctx.lineTo(toCanvasX(x), canvas.height);
        ctx.stroke();
    }

    for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
        if (y === 0) continue;
        ctx.beginPath();
        ctx.moveTo(0, toCanvasY(y));
        ctx.lineTo(canvas.width, toCanvasY(y));
        ctx.stroke();
    }
    
    ctx.restore();
}

function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawGrid();
    drawAxes();
    drawFunction();
}

function updateDisplay() {
    currentN.textContent = n.toFixed(1);
    nValue.textContent = n.toFixed(1);
}

function animate(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const elapsed = timestamp - lastTime;
    
    if (!isPaused && elapsed > 33) {
        n += targetSpeed * (elapsed / 1000);
        
        if (n > 100) {
            n = 0;
        }
        
        nSlider.value = n;
        updateDisplay();
        drawGraph();
        lastTime = timestamp;
    }
    
    if (isAnimating) {
        animationId = requestAnimationFrame(animate);
    }
}

function resetButtonState() {
    startResetBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> 开始`;
    pauseContinueBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> 暂停`;
    pauseContinueBtn.disabled = true;
}

function startButtonState() {
    startResetBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> 重置`;
    pauseContinueBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> 暂停`;
    pauseContinueBtn.disabled = false;
}

function pauseButtonState() {
    pauseContinueBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> 继续`;
}

nSlider.addEventListener('input', function() {
    n = parseFloat(this.value);
    updateDisplay();
    drawGraph();
    
    if (isAnimating) {
        isAnimating = false;
        isPaused = true;
        resetButtonState();
        
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    }
});

startResetBtn.addEventListener('click', function() {
    if (isAnimating) {
        n = 0;
        nSlider.value = 0;
        updateDisplay();
        drawGraph();
        isAnimating = false;
        isPaused = false;
        resetButtonState();
        
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    } else {
        isAnimating = true;
        isPaused = false;
        lastTime = 0;
        startButtonState();
        animate(0);
    }
});

pauseContinueBtn.addEventListener('click', function() {
    if (isAnimating) {
        isPaused = !isPaused;
        
        if (isPaused) {
            pauseButtonState();
        } else {
            pauseContinueBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> 暂停`;
            lastTime = 0;
            animate(0);
        }
    }
});

drawGraph();
updateDisplay();
resetButtonState();

window.addEventListener('resize', function() {
    drawGraph();
});