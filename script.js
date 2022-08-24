const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');
const speed = document.querySelector('.player-speed');

// Play & Pause ----------------------------------- //

function showPlayIcon() {
    playBtn.innerText = "play_arrow";
}

function togglePlay() {
    if (video.paused) {
        playBtn.innerText = "pause";
        video.play();
    } else {
        video.pause();
        showPlayIcon();
    }
}

// Progress Bar ---------------------------------- //

// display time format

function displayTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`;
}

function updateProgress() {
    progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
    currentTime.textContent = `${displayTime(video.currentTime)} /`;
    duration.textContent = `${displayTime(video.duration)}`;
}

// click to seek 

function setProgress(e) {
    const newTime = e.offsetX / progressRange.offsetWidth;
    progressBar.style.width = `${newTime * 100}%`;
    video.currentTime = newTime * video.duration;
}


// Volume Controls --------------------------- //


let lastVolume = 1;



// volume bar
function changeVolume(e) {
    let volume = e.offsetX / volumeRange.offsetWidth;
    volumeIcon.innerText = "volume_up";
    //  rounding volume up or down
    if (volume < 0.1) {
        volume = 0;
        volumeIcon.innerText = "volume_off";
    }
    if (volume > 0.9) {
        volume = 1;
    }
    volumeBar.style.width = `${volume * 100}%`;
    video.volume = volume;
    lastVolume = volume;
}

// mute / unmute
function toggleMute() {
    if (video.volume) {
        lastVolume = video.volume;
        video.volume = 0;
        volumeBar.style.width = 0;
        volumeIcon.innerText = "volume_off";
    } else {
        video.volume = lastVolume;
        volumeBar.style.width = `${lastVolume * 100}%`;
        volumeIcon.innerText = "volume_up";
    }
}

// Change Playback Speed -------------------- //

function changeSpeed() {
    video.playbackRate = speed.value;
}

// Fullscreen ------------------------------- //

// eventlisteners
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
// on video end show play btn
video.addEventListener('ended', showPlayIcon);

video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);

progressRange.addEventListener('click', setProgress);
volumeRange.addEventListener('click', changeVolume);
volumeIcon.addEventListener('click', toggleMute);
speed.addEventListener('change', changeSpeed);

