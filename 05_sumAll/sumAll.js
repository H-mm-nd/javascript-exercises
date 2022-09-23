const sumAll = function(number1, number2) {
    let total = 0;
    if (typeof number1 != "number" || typeof number2 != "number") {
        return('ERROR');
    }
        //could be better written as if (Number.isInteger(number1) \\ NumberisInteger(number2))
    if (number1 < 0 || number2 < 0) {
        return('ERROR');
    }
    
    if (number1 < number2) {
        for (let step = number1; step <= number2; step++) {
            total += step;
        }
        return total;
    } else if (number1 > number2) {
        for (let step = number2; step <= number1; step++) {
            total += step;
        }
        return total;
    }
};

//instead the if statment, TOR used an if statement to switch variable values if
//the first is bigger than the second
//if (number1 > number2) {
//    const temp = number1;
//    number1 = number2;
//    number2 = temp;
//  }

// Do not edit below this line
module.exports = sumAll;
