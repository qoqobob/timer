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
            startBtn.removeAttribute('id');
            startBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
            startBtn.setAttribute('id', 'start-button');
        } else {
            runTimer = setInterval(updateTimer, 1000);
            startBtn.removeAttribute('id');
            startBtn.innerHTML = '<i class="bi bi-pause-fill">';
            startBtn.setAttribute('id', 'pause-button')
        }
    });
    deleteBtn.addEventListener('click', function() {
        clearInterval(runTimer);
        runTimer = null;
        seconds = 0;
        minutes = 0;
        hours = 0;
        timer.innerText = '00:00:00';
        startBtn.removeAttribute('id');
        startBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        startBtn.setAttribute('id', 'start-button');
        
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