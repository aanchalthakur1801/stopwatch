let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
        isRunning = false;
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').textContent = 'Stop';
        isRunning = true;
    }
}

function reset() {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTime();
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    const display = document.getElementById('display');
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
