function areaOfFigures(figure, num1, num2 = null) {
    switch (figure) {
        case "square": {
            let area = +num1 * +num1;
            console.log(area.toFixed(3));
            break;
        }
        case "rectangle": {
            let area = +num1 * +num2;
            console.log(area.toFixed(3));
            break;
        }
        case "circle": {
            let area = Math.PI * Math.pow(+num1, 2);
            console.log(area.toFixed(3));
            break;
        }
        case "triangle": {
            let area = +num1 * (+num2 / 2);
            console.log(area.toFixed(3));
            break;
        }
    }
}

areaOfFigures("circle", "6");