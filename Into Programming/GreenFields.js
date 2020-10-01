function Green(meters) {
    const pricePerMeter = 7.61;
    const discountPercent = 0.18;

    let price = +meters * pricePerMeter
    let discount = price * discountPercent;

    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

Green("550");