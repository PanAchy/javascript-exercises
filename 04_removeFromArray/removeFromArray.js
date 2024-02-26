const removeFromArray = function (array, value) {
  var emptyArray = [];
  var valueArray = emptyArray.push(value);
  console.log(valueArray);
  console.log(valueArray.length);
  for (let x = 0; x < valueArray.length; x++) {
    array.splice(array.indexOf(valueArray[x], 1));
    // console.log(array);
    // console.log("doqhdqowdjqwdq");
  }
  //   array.splice(array.indexOf(value), 1);
  //   console.log(array);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
