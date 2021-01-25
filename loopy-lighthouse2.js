function loopyLighthouse(range, multiples, words) {
  for (let list = range[0]; list <= range[1]; list++) {
    if (list % multiples[0] === 0 && list % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (list % multiples[0] === 0) {
      console.log(words[0]);
    } else if (list % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(list);
    }
  }
}  
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);