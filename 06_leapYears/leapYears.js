const leapYears = function (year) {
  if (year % 400 != 0 && year % 100 == 0) {
    console.log("2");
    return false;
  } else if (year % 4 == 0) {
    console.log("1");
    return true;
  } else {
    console.log("3");
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
