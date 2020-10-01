function Bonus(num) {

    let bonus = 0;

    if (+num <= 100) {
        bonus = 5;
    } else if (+num > 100 && +num <= 1000) {
        bonus += num * 0.2;
    } else {
        bonus += num * 0.1;
    }

    if (+num % 2 === 0) {
        bonus += 1;
    }
    if (num[num.length - 1] === "5") {

        bonus += 2;
    }

    console.log(bonus);

    console.log(+num + bonus);
}

Bonus("15875");