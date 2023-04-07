const removeFromArray = function (empty, removeItem) {
  const index = empty.indexOf(removeItem);
  if (index !== -1) {
    empty.splice(index, 1);
  }
  return empty;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
