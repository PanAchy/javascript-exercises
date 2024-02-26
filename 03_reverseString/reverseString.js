const reverseString = function (input) {
  let reverseInput = "";
  for (let step = input.length - 1; step >= 0; step--) {
    reverseInput = reverseInput.concat("", input[step]);
  }
  return reverseInput;
};

// Do not edit below this line
module.exports = reverseString;
