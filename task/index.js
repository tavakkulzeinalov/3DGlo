setInterval(() => {
    const oclock = document.getElementById('oclock');
    const oclock1 = document.getElementById('oclock1');
    const oclock2 = document.getElementById('oclock2');
    const oclock3 = document.getElementById('oclock3');



    let tim = new Date();

    function setTime(time) {
        if (time < 12 && time >= 4) {
            oclock.textContent = 'Доброе утро';
        } else if (20 > time && time >= 12) {
            oclock.textContent = 'Добый день';
        } else if (23 > time && time >= 20) {
            oclock.textContent = 'Добый вечер';
        } else {
            oclock.textContent = 'Добой ночи';
        }
    }
    setTime(tim.getHours());


    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const d = new Date();
    const n = d.getDay();
    oclock1.textContent = `Сегодня: ${days[n]}`;


    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        oclock2.textContent = `Текущее время: ${strTime}`;
    }
    formatAMPM(new Date());

    function daysLeftNewYear() {
        today = new Date();
        //Можно установить любую дату  
        nextDate = new Date("December 31, 2022");
        //Количество миллисекунд в одном дне  
        msPerDay = 24 * 60 * 60 * 1000;
        //Высчитываем количество дней  
        daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
        dayname = "";
        ds = "" + daysLeft;
        //Вырезаем последнею цифру  
        dd = parseInt(ds.substr(ds.length - 1));
        //Склоняем слово ДЕНЬ  
        if (daysLeft > 4 && daysLeft < 21) dayname = " дней";
        else
        if (dd == 1) dayname = " день";
        else
        if (dd == 2 || dd == 3 || dd == 4) dayname = " дня";
        else dayname = " дней";
        oclock3.textContent = `До нового года осталось ${daysLeft} ${dayname}`;
    }
    daysLeftNewYear();
}, 1000);