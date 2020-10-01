function charity(days, bakers, cakes, waffles, pancakes) {
    let cakesPerDayByOneBaker = +cakes * 45;
    let wafflesPerDayByOneBaker = +waffles * 5.8;
    let pancakesPerDayByOneBaker = +pancakes * 3.2;

    let moneyPerDayByOneBaker = cakesPerDayByOneBaker + wafflesPerDayByOneBaker + pancakesPerDayByOneBaker;
    let moneyPerDay = +bakers * moneyPerDayByOneBaker;

    let allMoney = moneyPerDay * +days;

    let collectedMoney = allMoney - (allMoney / 8);

    console.log(collectedMoney);
}

charity("131", "5", "9", "33", "46");