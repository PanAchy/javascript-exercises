const convertToCelsius = function (input) {
  let output = parseFloat(((5 / 9) * (input - 32)).toFixed(1));
  return output;
};

const convertToFahrenheit = function (input) {
  let output = parseFloat((32 + (input * 9) / 5).toFixed(1));
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
