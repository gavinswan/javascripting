const organizeInstructors = function(instructors) {
  let output = {};
  let b = [];
  let i = [];
  let w = [];
  for (let j = 0; j < instructors.length; j++) {
    if (instructors[j].course === "iOS") {
      i.push(instructors[j].name);
      output.iOS = i;
    } else if (instructors[j].course === "Web") {
      w.push(instructors[j].name);
      output.Web = w;
    } else if (instructors[j].course === "Blockchain") {
      b.push(instructors[j].name);
      output.Blockchain = b;
    }
  }return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));