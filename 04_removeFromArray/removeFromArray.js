const removeFromArray = function (empty, removeItem) {
  let emptyArray = [];
  return (emptyArray += empty.splice(0, removeItem));
};

removeFromArray();

// Do not edit below this line
module.exports = removeFromArray;
