const sumLargestNumbers = function(data) {
  let temp = ''
  for (i = 0; i < data.length; i++) {
    //console.log(data[i]);
    if (data[i] < data[i + 1]) {
      temp = data.slice([i]);
      //console.log(temp);
    }
  }return temp
};

//console.log(sumLargestNumbers([1, 10]));
//console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));