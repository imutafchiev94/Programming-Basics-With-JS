function toyShop(TripPrice, Puzzles, Dolls, TedyBears, Minions, Trucks) {
    let puzzlesPrice = +Puzzles * 2.60;
    let dollsPrice = +Dolls * 3;
    let tedyBearsPrice = +TedyBears * 4.10;
    let minionsPrice = +Minions * 8.2;
    let trucksPrice = +Trucks * 2;

    let total = puzzlesPrice + dollsPrice + tedyBearsPrice + minionsPrice + trucksPrice;

    let totalCount = +Puzzles + +Dolls + +TedyBears + +Minions + +Trucks;

    if (totalCount >= 50) {
        total -= total * 0.25;
    }

    let finalPrice = total - (total * 0.1);

    if (finalPrice >= +TripPrice) {
        console.log(`Yes! ${(finalPrice - +TripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(+TripPrice - finalPrice).toFixed(2)} lv needed.`);
    }
}

toyShop("320", "8", "2", "5", "5", "1");