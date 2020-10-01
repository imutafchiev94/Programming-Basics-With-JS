function fruitMarket(pricePerStrawberries, amountOfBananas, amountOfOranges, amountOfRasberries, amountOfStrawberries) {
    let pricePerRasberries = +pricePerStrawberries / 2;
    let pricePerOranges = pricePerRasberries - (pricePerRasberries * 0.4);
    let pricePerBananas = pricePerRasberries - (pricePerRasberries * 0.8);

    let priceForRasberries = pricePerRasberries * +amountOfRasberries;
    let priceForOranges = pricePerOranges * +amountOfOranges;
    let priceForBananas = pricePerBananas * +amountOfBananas;
    let priceForStrawberries = +pricePerStrawberries * +amountOfStrawberries;

    let total = priceForBananas + priceForOranges + priceForRasberries + priceForStrawberries;

    console.log(total);
}

fruitMarket("63.5", "3.57", "6.35", "8.15", "2.5");