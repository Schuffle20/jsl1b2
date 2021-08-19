const video = document.getElementById('video');

const play = document.getElementById('play'),
    stop = document.getElementById('stop'),
    timestamp = document.getElementById('timestamp');


// Play ANd Pause Video
function togglestatus() {
    // paused from video api
    if (video.paused) {
        video.play()
    } else {
        video.pause();
    }
}

// Update Play & Pause
function updateplayicon() {
    if (video.paused) {
        play.innerHTML = `<i class="fas fa-play fa-2x"></i>`;
    } else {
        play.innerHTML = `<i class="fas fa-pause fa-2x"></i>`
    }
}

// Update Progress and Timestamp
function updateprogress() {
    progress.value = (video.currentTime / video.duration) * 100;


    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = 0 + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }

    timestamp.textContent = `${mins}:${secs}`;
}

// Stop Video
function stopvideo() {
    video.currentTime = 0;
    video.pause();
}

// Set Time Progress
function setvideoprogress(e) {
    video.currentTime = (progress.value * video.duration) / 100;
}

// Event Listener
video.addEventListener('click', togglestatus);
video.addEventListener('play', updateplayicon);
video.addEventListener('pause', updateplayicon);
video.addEventListener('timeupdate', updateprogress);


play.addEventListener('click', togglestatus);
stop.addEventListener('click', stopvideo);

progress.addEventListener('click', setvideoprogress);