const instructorWithLongestName = function(instructors) {
  let longestName = instructors[0].name;
  let indexOf = 0;
  for (i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.length) {
      longestName = instructors[i].name;
      indexOf = i;
    } 
  } return instructors[indexOf];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


















/*
const instructorWithLongestName = (instructors) => {
  let nameLength = instructors[0];
  for (let i = 0; i < instructors.length; i++) {
    console.log(instructors[i].name.length);
    if (instructors[i].name.length > nameLength.name.length) {
      nameLength = instructors[i];
    }
  }
  return nameLength 
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));




/*
let anInstructor =  {name: "Samuel", course: "iOS"};
let anArrayOfInstructors = [
      {name: "Samuel", course: "iOS"},
      {name: "Jeremiah", course: "Web"}
    ];

console.log(anInstructor);
console.log(anInstructor.name);
console.log(anArrayOfInstructors[0]);
console.log(anArrayOfInstructors[0].course);
*/
