function timePlus15Minutes(hour, minutes) {
    let minutesResult = +minutes + 15;

    if (+minutesResult >= 60) {
        if (+hour == 23) {
            hour = 0;
            minutesResult -= 60;
        } else {
            +hour++;
            minutesResult -= 60;
        }
    }

    if (minutesResult < 10) {
        console.log(`${hour}:0${minutesResult}`);
    } else {
        console.log(`${hour}:${minutesResult}`);
    }
}
timePlus15Minutes("12", "49")