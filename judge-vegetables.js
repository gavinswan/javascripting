const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let winner = '';
  let plump = 0;
  let red = 0;
  for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[1][i].plumpness)
    if ((metric === 'redness') && (vegetables.redness > red)) {
        winner = vegetables.submitter;
    } else if ((metric === 'plumpness') && (vegetables.plumpness > plump)) {
        winner = vegetable.submitter;
    }
    return winner;
  }
}
  
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)