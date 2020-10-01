function fishTank(length, width, height, percent) {
    let volume = length * width * height;
    let litres = volume * 0.001;
    percent *= 0.01;

    let all = litres * (1 - percent);

    console.log(all);
}

fishTank("105", "77", "89", "18.5");