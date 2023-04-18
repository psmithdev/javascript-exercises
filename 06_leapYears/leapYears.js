const leapYears = function (givenYear) {
  if (givenYear % 4 == 0 && givenYear % 100 !== 0) {
    return true;
  } else if (givenYear % 400 == 0) {
    return true;
  } else {
    return false;
  }
};
leapYears();

// Do not edit below this line
module.exports = leapYears;
