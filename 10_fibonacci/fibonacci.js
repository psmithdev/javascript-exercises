const fibonacci = function(count) {
    let firstNumber = 0;
    let secondNumber = 1;

    for (let i = 1; i < count; i++) {
        if (count == 0) {
            return 0;
        } if (count == 1) {
            return 1;
        } else {
            sumTwo = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = sumTwo;
        }     
    }
    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;

// function Fibonacci(number) {
//     if (number == 0) {
//         return 0;
//     } if (number == 1) {
//         return 1;
//     } else {
//         return Fibonacci(number - 1) + Fibonacci(number - 2);
//     }
// }