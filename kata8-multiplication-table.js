const multiplicationTable = function(maxValue) {
  let string = '';
  for (let row = 1; row <= maxValue; row++) {
    for (let column = 1; column <= maxValue; column++) {
      string += column * row + ' '; 
    }
    if (row < maxValue) {
      string += '\n';
    }
  } return string + '\n';
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));