function sumSecond(seconds1, seconds2, seconds3) {
    let total = +seconds1 + +seconds2 + +seconds3;

    let minutes = 0;

    while (total >= 60) {
        total -= 60

        minutes++;
    }

    if (total < 10) {
        console.log(`${minutes}:0${total}`);
    } else {
        console.log(`${minutes}:${total}`);
    }
}

sumSecond("25", "17", "18");