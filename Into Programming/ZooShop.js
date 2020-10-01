function ZooShop(dogs, animals) {
    const dogFoodPrice = 2.5;
    const animalFoodPrice = 4;
    let price = (dogFoodPrice * +dogs) + (animalFoodPrice * +animals)

    console.log(`${price.toFixed(1)} lv.`)
}

ZooShop("5", "4");