let musicData = [];
let currentMusicIndex = 0;
let isPlaying = false;
let isLooping = false;
let playbackRate = 1.0;
let lyrics = [];
let currentLyricIndex = -1;
let lyricElements = [];
let isDarkTheme = false;
let musicDurations = {};
let albumRotation = 0;
let rotationPausedAngle = 0;
let isLyricsAnimating = false;
let lyricPositions = Array(9).fill(null);
let lyricTexts = Array(9).fill('');

const audioPlayer = new Audio();
const musicList = document.getElementById('musicList');
const albumCover = document.getElementById('albumCover');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');
const albumStatus = document.getElementById('albumStatus');
const lyricsWrapper = document.getElementById('lyricsWrapper');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTimeDisplay');
const totalTimeDisplay = document.getElementById('totalTimeDisplay');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');
const loopBtn = document.getElementById('loopBtn');
const speedBtn = document.getElementById('speedBtn');
const themeBtn = document.getElementById('themeBtn');
const speedSelector = document.getElementById('speedSelector');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const musicListContainer = document.getElementById('musicListContainer');
const musicListCloseBtn = document.getElementById('musicListCloseBtn');
const mobileOverlay = document.getElementById('mobileOverlay');

async function loadMusicData() {
    try {
        const response = await fetch('config.yml');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const yamlText = await response.text();
        
        if (typeof jsyaml === 'undefined') {
            throw new Error('js-yaml库未加载，请在HTML中添加: <script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>');
        }
        const config = jsyaml.load(yamlText);
        
        if (!config || !config.songs) {
            throw new Error('YAML文件格式错误，缺少songs字段');
        }
        
        musicData = config.songs;
        console.log('音乐数据加载成功:', musicData.length, '首歌曲');
    } catch (error) {
        console.error('加载音乐配置失败:', error);
        
        musicData = [
            {
                id: 1,
                title: "梦与创造",
                artist: "胡永双",
                src: "https://music.huyongshuang.top/胡永双 - 梦与创造.mp3",
                cover: "https://music.huyongshuang.top/cover/根新.jpg",
                smallCover: "https://music.huyongshuang.top/cover/根新.jpg",
                lrcFile: "/music/lrc/胡永双 - 梦与创造.lrc"
            },
            {
                id: 2,
                title: "一个人想着一个人",
                artist: "Lone",
                src: "https://music.huyongshuang.top/Lone - 一个人想着一个人.mp3",
                cover: "https://music.huyongshuang.top/cover/Lone.jpg",
                smallCover: "https://music.huyongshuang.top/cover/Lone.jpg",
                lrcFile: "/music/lrc/Lone - 一个人想着一个人.lrc"
            }
        ];
        
        const errorMessage = document.createElement('div');
        errorMessage.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: #ff6b6b;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            z-index: 10000;
            font-size: 14px;
            max-width: 300px;
        `;
        errorMessage.innerHTML = `
            <strong>配置加载失败:</strong><br>
            ${error.message}<br>
            <small>使用默认音乐数据</small>
        `;
        document.body.appendChild(errorMessage);
        
        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    }
}

function initMusicList() {
    musicList.innerHTML = '';
    
    musicData.forEach((music, index) => {
        const musicItem = document.createElement('div');
        musicItem.className = `music-item ${index === currentMusicIndex ? 'active' : ''}`;
        musicItem.dataset.index = index;
        
        musicItem.innerHTML = `
            <img src="${music.smallCover}" alt="${music.title}" class="music-cover-small">
            <div class="music-info">
                <div class="music-title">${music.title}</div>
                <div class="music-artist">${music.artist}</div>
            </div>
            <div class="music-duration">${musicDurations[index] ? formatTime(musicDurations[index]) : '加载中...'}</div>
        `;
        
        musicItem.addEventListener('click', () => {
            selectMusic(index);
            closeMusicList();
        });
        
        musicList.appendChild(musicItem);
        if (!musicDurations[index]) {
            preloadMusicDuration(index);
        }
    });
}

function preloadMusicDuration(index) {
    const tempAudio = new Audio();
    const music = musicData[index];
    
    tempAudio.addEventListener('loadedmetadata', () => {
        if (!isNaN(tempAudio.duration) && tempAudio.duration > 0) {
            musicDurations[index] = tempAudio.duration;
            
            const musicItem = musicList.querySelector(`.music-item[data-index="${index}"] .music-duration`);
            if (musicItem) {
                musicItem.textContent = formatTime(tempAudio.duration);
            }
        }
        tempAudio.remove();
    });
    
    tempAudio.addEventListener('error', () => {
        tempAudio.remove();
    });
    
    tempAudio.src = music.src;
    tempAudio.load();
}

function updateAlbumCoverRotation() {
    if (!albumCover.style.animation) {
        albumCover.style.animation = 'rotate 20s linear infinite';
        albumCover.classList.add('playing');
    }
    
    if (isPlaying && albumCover.classList.contains('paused')) {
        albumCover.classList.remove('paused');
        albumCover.classList.add('playing');
        albumCover.style.animationPlayState = 'running';
    } else if (!isPlaying && albumCover.classList.contains('playing')) {
        albumCover.classList.remove('playing');
        albumCover.classList.add('paused');
        albumCover.style.animationPlayState = 'paused';
    }
}

async function loadLrcFile(lrcFilePath) {
    try {
        const response = await fetch(lrcFilePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const lyricsText = await response.text();
        return lyricsText;
    } catch (error) {
        console.error('加载歌词文件失败:', error);
        return null;
    }
}

async function selectMusic(index) {
    currentMusicIndex = index;
    
    document.querySelectorAll('.music-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    
    const currentMusic = musicData[index];
    
    audioPlayer.src = currentMusic.src;
    albumCover.src = currentMusic.cover;
    albumCover.alt = currentMusic.title;
    nowPlayingTitle.textContent = currentMusic.title;
    nowPlayingArtist.textContent = currentMusic.artist;
    albumStatus.textContent = isPlaying ? '正在播放' : '已暂停';
    
    albumCover.style.animation = 'none';
    setTimeout(() => {
        albumCover.style.animation = 'rotate 20s linear infinite';
        if (isPlaying) {
            albumCover.classList.add('playing');
            albumCover.classList.remove('paused');
            albumCover.style.animationPlayState = 'running';
        } else {
            albumCover.classList.remove('playing');
            albumCover.classList.add('paused');
            albumCover.style.animationPlayState = 'paused';
        }
    }, 10);
    
    if (currentMusic.lrcFile) {
        const lyricsText = await loadLrcFile(currentMusic.lrcFile);
        if (lyricsText) {
            parseLyrics(lyricsText);
            updateLyricsOnLoad();
        } else {
            parseLyrics('');
        }
    } else {
        parseLyrics('');
    }
    
    if (isPlaying) {
        setTimeout(() => {
            audioPlayer.play();
        }, 100);
    } else {
        audioPlayer.load();
        updateProgress();
    }
}

function parseLyrics(lyricsText) {
    lyrics = [];
    currentLyricIndex = -1;
    
    if (!lyricsText) {
        for (let i = 0; i < 9; i++) {
            lyricTexts[i] = i === 4 ? '暂无歌词' : '';
            lyricPositions[i] = null;
        }
        createLyricElements();
        return;
    }
    
    const lines = lyricsText.split('\n');
    
    lines.forEach(line => {
        const timeMatch = line.match(/\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/);
        
        if (timeMatch) {
            const minutes = parseInt(timeMatch[1]);
            const seconds = parseInt(timeMatch[2]);
            const milliseconds = timeMatch[3] ? parseInt(timeMatch[3]) / (timeMatch[3].length === 2 ? 100 : 1000) : 0;
            const time = minutes * 60 + seconds + milliseconds;
            const text = line.replace(/\[\d{2}:\d{2}(?:\.\d{2,3})?\]/g, '').trim();
            
            if (text) {
                lyrics.push({ time, text });
            }
        }
    });
    
    lyrics.sort((a, b) => a.time - b.time);
    
    if (lyrics.length === 0) {
        for (let i = 0; i < 9; i++) {
            lyricTexts[i] = i === 4 ? '暂无歌词' : '';
            lyricPositions[i] = null;
        }
    }
    
    createLyricElements();
    updateLyricsOnLoad();
}

function createLyricElements() {
    lyricsWrapper.innerHTML = '';
    lyricElements = [];
    
    for (let i = 0; i < 9; i++) {
        const lyricLine = document.createElement('div');
        lyricLine.className = 'lyric-line';
        lyricLine.textContent = lyricTexts[i];
        lyricsWrapper.appendChild(lyricLine);
        lyricElements.push(lyricLine);
    }
}

function updateLyricsOnLoad() {
    if (lyrics.length === 0) return;
    
    const startIndex = Math.max(0, 0 - 4);
    const endIndex = Math.min(lyrics.length - 1, 0 + 4);
    
    const displayStart = Math.max(0, 4 - 0);
    const displayEnd = Math.min(8, 4 + (lyrics.length - 1 - 0));
    
    for (let i = displayStart; i <= displayEnd; i++) {
        const lyricIndex = 0 - 4 + i;
        if (lyricIndex >= 0 && lyricIndex < lyrics.length) {
            lyricElements[i].textContent = lyrics[lyricIndex].text;
            lyricElements[i].classList.remove('active');
            lyricPositions[i] = lyricIndex;
            lyricTexts[i] = lyrics[lyricIndex].text;
        }
    }
    
    for (let i = 0; i < displayStart; i++) {
        lyricElements[i].textContent = '';
        lyricPositions[i] = null;
        lyricTexts[i] = '';
    }
    
    for (let i = displayEnd + 1; i < 9; i++) {
        lyricElements[i].textContent = '';
        lyricPositions[i] = null;
        lyricTexts[i] = '';
    }
    
    currentLyricIndex = -1;
}

function updateLyrics() {
    if (lyrics.length === 0 || isLyricsAnimating) return;
    
    const currentTime = audioPlayer.currentTime;
    
    let newIndex = -1;
    for (let i = lyrics.length - 1; i >= 0; i--) {
        if (lyrics[i].time <= currentTime + 0.1) {
            newIndex = i;
            break;
        }
    }
    
    if (newIndex !== currentLyricIndex && newIndex !== -1) {
        const oldIndex = currentLyricIndex;
        currentLyricIndex = newIndex;
        
        const oldCenterIndex = oldIndex !== -1 ? lyricPositions.indexOf(oldIndex) : -1;
        const newCenterIndex = Math.min(Math.max(4, currentLyricIndex), lyrics.length - 1 - 4) + 4 - currentLyricIndex;
        
        if (oldIndex !== -1 && oldIndex < currentLyricIndex) {
            isLyricsAnimating = true;
            
            lyricsWrapper.style.transform = 'translateY(-20px)';
            lyricsWrapper.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                const startIndex = Math.max(0, currentLyricIndex - 4);
                const endIndex = Math.min(lyrics.length - 1, currentLyricIndex + 4);
                
                const displayStart = Math.max(0, 4 - currentLyricIndex);
                const displayEnd = Math.min(8, 4 + (lyrics.length - 1 - currentLyricIndex));
                
                for (let i = displayStart; i <= displayEnd; i++) {
                    const lyricIndex = currentLyricIndex - 4 + i;
                    if (lyricIndex >= 0 && lyricIndex < lyrics.length) {
                        lyricElements[i].textContent = lyrics[lyricIndex].text;
                        lyricElements[i].classList.remove('active');
                        lyricPositions[i] = lyricIndex;
                        lyricTexts[i] = lyrics[lyricIndex].text;
                        
                        if (lyricIndex === currentLyricIndex) {
                            lyricElements[i].classList.add('active');
                        }
                    }
                }
                
                for (let i = 0; i < displayStart; i++) {
                    lyricElements[i].textContent = '';
                    lyricPositions[i] = null;
                    lyricTexts[i] = '';
                }
                
                for (let i = displayEnd + 1; i < 9; i++) {
                    lyricElements[i].textContent = '';
                    lyricPositions[i] = null;
                    lyricTexts[i] = '';
                }
                
                lyricsWrapper.style.transform = 'translateY(0)';
                
                setTimeout(() => {
                    isLyricsAnimating = false;
                }, 300);
            }, 50);
        } else {
            const startIndex = Math.max(0, currentLyricIndex - 4);
            const endIndex = Math.min(lyrics.length - 1, currentLyricIndex + 4);
            
            const displayStart = Math.max(0, 4 - currentLyricIndex);
            const displayEnd = Math.min(8, 4 + (lyrics.length - 1 - currentLyricIndex));
            
            for (let i = displayStart; i <= displayEnd; i++) {
                const lyricIndex = currentLyricIndex - 4 + i;
                if (lyricIndex >= 0 && lyricIndex < lyrics.length) {
                    lyricElements[i].textContent = lyrics[lyricIndex].text;
                    lyricElements[i].classList.remove('active');
                    lyricPositions[i] = lyricIndex;
                    lyricTexts[i] = lyrics[lyricIndex].text;
                    
                    if (lyricIndex === currentLyricIndex) {
                        lyricElements[i].classList.add('active');
                    }
                }
            }
            
            for (let i = 0; i < displayStart; i++) {
                lyricElements[i].textContent = '';
                lyricPositions[i] = null;
                lyricTexts[i] = '';
            }
            
            for (let i = displayEnd + 1; i < 9; i++) {
                lyricElements[i].textContent = '';
                lyricPositions[i] = null;
                lyricTexts[i] = '';
            }
        }
    }
}

function updateProgress() {
    if (!isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        currentTime.textContent = formatTime(audioPlayer.currentTime);
        totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
        totalTime.textContent = formatTime(audioPlayer.duration);
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        if (!audioPlayer.src || audioPlayer.src.includes('blob:')) {
            selectMusic(currentMusicIndex);
            return;
        }
        
        audioPlayer.play().then(() => {
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            albumStatus.textContent = '正在播放';
            updateAlbumCoverRotation();
        }).catch(error => {
            console.error('播放失败:', error);
        });
    }
}

function playPrev() {
    currentMusicIndex = (currentMusicIndex - 1 + musicData.length) % musicData.length;
    selectMusic(currentMusicIndex);
}

function playNext() {
    currentMusicIndex = (currentMusicIndex + 1) % musicData.length;
    selectMusic(currentMusicIndex);
}

function toggleLoop() {
    isLooping = !isLooping;
    audioPlayer.loop = isLooping;
    loopBtn.classList.toggle('active', isLooping);
}

function toggleSpeedSelector() {
    speedSelector.classList.toggle('show');
}

function selectSpeed(speed) {
    playbackRate = speed;
    audioPlayer.playbackRate = playbackRate;
    speedBtn.innerHTML = `<span>${playbackRate}x</span>`;
    speedBtn.classList.add('active');
    
    document.querySelectorAll('.speed-option').forEach(option => {
        option.classList.remove('active');
        if (parseFloat(option.dataset.speed) === speed) {
            option.classList.add('active');
        }
    });
    
    speedSelector.classList.remove('show');
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function seekTo(event) {
    if (!audioPlayer.duration || audioPlayer.duration <= 0) return;
    
    const progressBarRect = progressBar.getBoundingClientRect();
    const clickPosition = event.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    const percentage = Math.max(0, Math.min(1, clickPosition / progressBarWidth));
    const seekTime = percentage * audioPlayer.duration;
    
    audioPlayer.currentTime = seekTime;
    
    if (!isPlaying) {
        updateProgress();
        updateLyrics();
    }
}

function openMusicList() {
    musicListContainer.classList.add('active');
    mobileOverlay.classList.add('active');
}

function closeMusicList() {
    musicListContainer.classList.remove('active');
    mobileOverlay.classList.remove('active');
}

function initEventListeners() {
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrev);
    nextBtn.addEventListener('click', playNext);
    
    progressBar.addEventListener('click', seekTo);
    
    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value / 100;
    });
    
    loopBtn.addEventListener('click', toggleLoop);
    speedBtn.addEventListener('click', toggleSpeedSelector);
    themeBtn.addEventListener('click', toggleTheme);
    
    document.querySelectorAll('.speed-option').forEach(option => {
        option.addEventListener('click', () => {
            selectSpeed(parseFloat(option.dataset.speed));
        });
    });
    
    mobileMenuBtn.addEventListener('click', openMusicList);
    musicListCloseBtn.addEventListener('click', closeMusicList);
    mobileOverlay.addEventListener('click', closeMusicList);
    
    document.addEventListener('click', (event) => {
        if (!speedBtn.contains(event.target) && !speedSelector.contains(event.target)) {
            speedSelector.classList.remove('show');
        }
    });
    
    audioPlayer.addEventListener('timeupdate', () => {
        updateProgress();
        updateLyrics();
    });
    
    audioPlayer.addEventListener('ended', () => {
        if (!isLooping) {
            playNext();
        } else {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        }
    });
    
    audioPlayer.addEventListener('loadedmetadata', () => {
        updateProgress();
    });
    
    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        albumStatus.textContent = '已暂停';
        updateAlbumCoverRotation();
    });
    
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        albumStatus.textContent = '正在播放';
        updateAlbumCoverRotation();
    });
    
    audioPlayer.addEventListener('seeked', () => {
        updateLyrics();
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeMusicList();
        }
    });
}

function initApp() {
    loadMusicData().then(() => {
        if (musicData.length > 0) {
            initMusicList();
            initEventListeners();
            selectMusic(0);
            audioPlayer.volume = volumeSlider.value / 100;
            selectSpeed(1.0);
        } else {
            console.error('没有可用的音乐数据');
            nowPlayingTitle.textContent = '无法加载音乐';
            nowPlayingArtist.textContent = '请检查配置文件';
        }
    });
}

document.addEventListener('DOMContentLoaded', initApp);