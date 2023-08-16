const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

const multiply = function(array) {
    let array2 = array;
    const sumValue2 = array2.reduce((a, b) => a*b);
    return sumValue2;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
    if (num < 0)
      return -1;
    else if (num == 0)
      return 1;
    else {
      return (num * factorial(num - 1));
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
