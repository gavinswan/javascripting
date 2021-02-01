const sumLargestNumbers = function(data) {
  let num1 = 0;
  let num2 = 0;
  let arr = [];
  let sum = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i] > num1) {
      num1 = data[i];
      arr[0] = num1;
    } 
  }
  for (let j = 0; j < data.length; j++) {
    if ((data[j] < arr[0]) && (data[j] > num2)) {
      num2 = data[j]
      arr[1] = num2;
      sum = arr[0] + arr[1];
    }
  } return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));