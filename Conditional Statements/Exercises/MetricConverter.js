function metricConverter(num, oldMetric, newMetric) {

    let result = 0;
    switch (oldMetric) {
        case "m": {
            switch (newMetric) {
                case "cm": {
                    result = +num * 100;
                    break;
                }
                case "mm": {
                    result = +num * 1000;
                    break;
                }

            }
            break;
        }
        case "cm": {
            switch (newMetric) {
                case "m": {
                    result = +num * 0.01;
                    break;
                }
                case "mm": {
                    result = +num * 10;
                    break;
                }
            }

            break;
        }
        case "mm": {
            switch (newMetric) {
                case "m": {
                    result = +num * 0.001;
                    break;
                }
                case "cm": {
                    result = +num * 0.1;
                    break;
                }
            }
            break;
        }
    }

    console.log(result.toFixed(3));

}

metricConverter("45", "cm", "mm");