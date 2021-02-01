const repeatNumbers = function(data) {
  let finalString = '';
  for (let arr of data) {
    let tempString = '';
    for (x = 0; x < arr[1]; x++) {
      tempString += arr[0];
    }
    if (finalString === '') {
      finalString += tempString;
    } else {
      finalString += ', ' + tempString;
    }
  }
  return finalString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
