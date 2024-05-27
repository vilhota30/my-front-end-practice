const firstInput = document.getElementById("timer-input-first");
const secondInput = document.getElementById("timer-input-second");
const firstTimerTick = document.getElementById("timer-tick-first");
const secondTimerTick = document.getElementById("timer-tick-second");
const firstBtnStart = document.getElementById("btn-start-first");
const secondBtnStart = document.getElementById("btn-start-second");
const firstBtnEnd = document.getElementById("btn-end-first");
const secondBtnEnd = document.getElementById("btn-end-second");

const timers = {
    first: {
        intervalId: null,
        timeInSeconds: 0,
        input: null,
        display: null
    },
    second: {
        intervalId: null,
        timeInSeconds: 0,
        input: null,
        display: null
    }
};

function timeToSeconds(timeString) {
    const timeParts = timeString.split(":");
    const minutes = parseInt(timeParts[0]);
    const seconds = parseInt(timeParts[1]);
    return (minutes * 60) + seconds;
}

function startTimer(timerId) {
    const timer = timers[timerId];
    timer.intervalId = setInterval(function() {
        if (timer.timeInSeconds <= 0) {
            clearInterval(timer.intervalId); 
            return;
        }
        const minutes = Math.floor(timer.timeInSeconds / 60);
        const seconds = timer.timeInSeconds % 60;
        timer.display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timer.timeInSeconds--; 
    }, 1000); 
}

firstBtnStart.addEventListener("click", function() {
    timers.first.timeInSeconds = timeToSeconds(firstInput.value);
    timers.first.input = firstInput;
    timers.first.display = firstTimerTick;
    startTimer('first');
});

secondBtnStart.addEventListener("click", function() {
    timers.second.timeInSeconds = timeToSeconds(secondInput.value);
    timers.second.input = secondInput;
    timers.second.display = secondTimerTick;
    startTimer('second');
});

firstBtnEnd.addEventListener("click", function() {
    clearInterval(timers.first.intervalId);
});

secondBtnEnd.addEventListener("click", function() {
    clearInterval(timers.second.intervalId); 
});
