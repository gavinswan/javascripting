
const urlEncode = function(text) {
  let arr = [];
  for (i = 0; i < text.length; i++) {
    arr.push(text[i]);
    if (arr[i] === ' ') {
      arr.splice(i, 1, '%20');
    }
  }
  if ((arr[arr.length - 1]) === '%20') {
    arr.pop();
  }
  if (arr[0] === '%20') {
    arr.shift();
  }
  return arr.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));