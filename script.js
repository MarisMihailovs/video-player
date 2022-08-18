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

function updateProgress() {
    console.log('current time', video.currentTime, 'duration', video.duration);
}


// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //

// eventlisteners
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
// on video end show play btn
video.addEventListener('ended', showPlayIcon);

video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);