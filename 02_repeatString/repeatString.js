const repeatString = function (string, num) {
  let emptyString = "";

  for (let i = 0; i < num; i++) {
    emptyString += string;
  }
  return emptyString;
};

// Do not edit below this line
module.exports = repeatString;
