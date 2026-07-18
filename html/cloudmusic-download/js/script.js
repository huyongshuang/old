document.addEventListener('DOMContentLoaded', function() {
    const songUrlInput = document.getElementById('songUrl');
    const downloadBtn = document.getElementById('downloadBtn');
    const copyBtn = document.getElementById('copyBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultBox = document.getElementById('resultBox');
    const downloadLink = document.getElementById('downloadLink');
    const toast = document.getElementById('toast');
    
    let currentDownloadUrl = '';
    let lastValidUrl = '';
    
    songUrlInput.addEventListener('input', function() {
        autoGenerateLink();
    });
    
    songUrlInput.addEventListener('paste', function() {
        setTimeout(autoGenerateLink, 10);
    });
    
    songUrlInput.addEventListener('blur', function() {
        autoGenerateLink();
    });
    
    function autoGenerateLink() {
        const url = songUrlInput.value.trim();
        
        if (!url || url === lastValidUrl) {
            if (!url) {
                resultBox.classList.remove('show');
                currentDownloadUrl = '';
            }
            return;
        }
        
        const songId = extractSongId(url);
        
        if (!songId) {
            resultBox.classList.remove('show');
            currentDownloadUrl = '';
            return;
        }
        
        currentDownloadUrl = `https://music.163.com/song/media/outer/url?id=${songId}.mp3`;
        lastValidUrl = url;
        
        downloadLink.textContent = currentDownloadUrl;
        
        resultBox.classList.add('show');
        
        downloadLink.onclick = function() {
            if (currentDownloadUrl) {
                window.open(currentDownloadUrl, '_blank');
            }
        };
    }
    
    copyBtn.addEventListener('click', function() {
        if (!currentDownloadUrl) {
            showAlert('请先输入有效的网易云音乐链接！');
            songUrlInput.focus();
            return;
        }
        
        copyToClipboard(currentDownloadUrl);
    });
    
    downloadBtn.addEventListener('click', function() {
        if (!currentDownloadUrl) {
            autoGenerateLink();
            
            if (!currentDownloadUrl) {
                showAlert('请先输入有效的网易云音乐链接！');
                songUrlInput.focus();
                return;
            }
        }
        
        window.open(currentDownloadUrl, '_blank');
    });
    
    clearBtn.addEventListener('click', function() {
        songUrlInput.value = '';
        resultBox.classList.remove('show');
        currentDownloadUrl = '';
        lastValidUrl = '';
        songUrlInput.focus();
    });
    
    function extractSongId(url) {
        const patterns = [
            /[?&]id=(\d+)/,
            /song\/(\d+)/,
            /song\?id=(\d+)/
        ];
        
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
        }
        
        return null;
    }
    
    function showAlert(message) {
        alert(message);
    }
    
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast('链接已复制到剪贴板！');
            })
            .catch(err => {
                console.error('复制失败: ', err);
                copyToClipboardFallback(text);
            });
    }
    
    function copyToClipboardFallback(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showToast('链接已复制到剪贴板！');
            } else {
                showAlert('复制失败，请手动复制链接');
            }
        } catch (err) {
            showAlert('复制失败，请手动复制链接: ' + text);
        }
        
        document.body.removeChild(textArea);
    }
    
    songUrlInput.value = 'https://music.163.com/#/song?id=1815120094';
    
    setTimeout(autoGenerateLink, 100);
});