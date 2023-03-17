const removeFromArray = function (array, numbers) {
  return array.slice(0, numbers).concat(array.slice(numbers + 1));
};

// Do not edit below this line
module.exports = removeFromArray;
