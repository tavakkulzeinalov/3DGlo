const timer = (deadline) => {
    const timer = document.getElementById('timer');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const timerDeys = document.getElementById('timer-deys');

    let interval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let deys = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        const dDeys = deys < 10 ? '0' + deys : deys;
        const hHours = hours < 10 ? '0' + hours : hours;
        const mMinutes = minutes < 10 ? '0' + minutes : minutes;
        const sSeconds = seconds < 10 ? '0' + seconds : seconds;
        timer.textContent = `${dDeys} : ${hHours} : ${mMinutes} : ${sSeconds}`;
        if (timeRemaining <= 0) {
            clearInterval(interval);
            timer.textContent = `00 : 00 : 00 : 00`;
        }

        return {
            timeRemaining,
            deys,
            hours,
            minutes,
            seconds
        };
    };
    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerDeys.textContent = getTime.deys;
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.timeRemaining > 0) {
            setInterval(updateClock, 1000);
        }
    };
    updateClock();
    interval = setInterval(updateClock, 1000);
};

export default timer;