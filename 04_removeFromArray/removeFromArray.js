const removeFromArray = function (...args) {
  // console.log(value);
  // if (value.length > 1) {
  //   for (let x = 0; x < value.length; x++) {
  //     let indexToRemove = array.indexOf(value[x]);
  //     array.splice(indexToRemove, 1);
  //   }
  // } else {

  // The first argument is the array, the rest are the values to remove
  const array = args[0];
  const valuesToRemove = args.slice(1);

  // Return a new array, excluding any values that are included in valuesToRemove
  return array.filter((item) => !valuesToRemove.includes(item));

  // let indexToRemove1 = array.indexOf(value1);

  // if (indexToRemove1 !== -1) {
  //   array.splice(indexToRemove1, 1);
  // }

  // let indexToRemove2 = array.indexOf(value2);

  // if (indexToRemove2 !== -1) {
  //   array.splice(indexToRemove2, 1);
  // }

  // console.log(array);
  // return array;
};

// Do not edit below this line
module.exports = removeFromArray;
