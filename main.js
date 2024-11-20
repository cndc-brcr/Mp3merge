const validCredentials = {
    username: 'username',
    password: 'password'
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    if (username === validCredentials.username && password === validCredentials.password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('mp3-player').style.display = 'block';
        message.textContent = '';
    } else {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
    }
}

function changeTrack() {
    const select = document.getElementById('track-select');
    const audio = document.getElementById('audio');
    const selectedTrack = select.value;

    if (selectedTrack) {
        audio.src = selectedTrack;
        audio.load(); // Load the new track
    }
}

let currentTrackIndex = 0;
const tracks = [
    "/BINI - _Lagi_ Color-coded Lyrics.mp3", 
    "/BINI - Salamin Salamin (Lyrics).mp3", 
    "/bini_pantropiko_lyrics_mp3_30602.mp3", 
    "/Huwag Muna Tayong Umuwi - BINI (Color Coded Lyrics).mp3"
];

function play() {
    const audio = document.getElementById('audio');
    if (audio.src) {
        audio.play();
    } else {
        alert('Please select a track first');
    }
}

function pause() {
    const audio = document.getElementById('audio');
    audio.pause();
}

function stop() {
    const audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    const nextTrack = tracks[currentTrackIndex];
    document.getElementById('track-select').value = nextTrack;
    changeTrack();
    play();
}

// Automatically play the next track when the current one ends
document.getElementById('audio').addEventListener('ended', () => {
    nextTrack();
});
