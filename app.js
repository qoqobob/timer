document.addEventListener('DOMContentLoaded', () => {
    const timer = document.getElementById('timer');
    const startBtn = document.getElementById('start-button');
    const deleteBtn = document.getElementById('delete-button');
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let runTimer = null;
    let zeroS = '';
    let zeroM = '';
    let zeroH = '';
    startBtn.addEventListener('click', function() {
        if (runTimer !== null) {
            clearInterval(runTimer);
            runTimer = null;
            startBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        } else {
            runTimer = setInterval(updateTimer, 1000);
            startBtn.innerHTML = '<i class="bi bi-pause-fill">';
        }
    });
    deleteBtn.addEventListener('click', function() {
        clearInterval(runTimer);
        runTimer = null;
        seconds = 0;
        minutes = 0;
        hours = 0;
        timer.innerText = '00:00:00';
        startBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
    });

    function updateTimer() {
        seconds++;
        if (seconds < 10) {
            zeroS = '0';
        } else {
            zeroS = '';
        };
        if (minutes < 10) {
            zeroM = '0';
        } else {
            zeroM = '';
        };
        if (hours < 10) {
            zeroH = '0';
        } else {
            zeroH = '';
        };
        if (seconds === 60) {
            minutes++;
            seconds = 0;
             
        };
        if (minutes === 60) {
            hours++;
            minutes = 0;
        };
        timer.innerText = zeroH + hours + ':' + zeroM + minutes + ':' + zeroS + seconds;
    };  
})