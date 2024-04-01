const sumAll = function (start, end) {
  let sum = 0;
  if (Number.isInteger(start) && Number.isInteger(end) && start * end > 0) {
    for (x = 0; x <= Math.max(start, end) - Math.min(start, end) + 1; x++) {
      sum += x;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
