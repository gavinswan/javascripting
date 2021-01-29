const urlDecode = function(text) {
  let otherArr = ''; // Declare variable to hold manipulated text string.
  let objectKey = ''; // Declare variable to hold final object key.
  let objectValue = ''; // Declare variable to hold final object value.
  let finalObject = {}; // Declare variable to hold final object.
  let tempArr = text.split('&'); // Declare temperary variable and set = to text argument, split at '&'. Will save as an array after split.
  for (i = 0; i < tempArr.length; i++) { // Loop through tempArr.
    otherArr = (tempArr[i].split('=')); // Split tempArr[i] at '=' and save it to otherArr. Will turn it into an array.
    objectKey = otherArr[0]; // Set object key = to the first index of otherArr.
    objectValue = otherArr[1]; // Set object value = to second index of otherArr.
    objectValue = objectValue.split('%20'); // Split objectValue at '%20'. Stores it as an array of words.
    objectValue = objectValue.join(' '); // Join objectValue back together into a string with spaces between words.
    finalObject[objectKey] = objectValue; // Assign object key: value pairs.
  }
  return finalObject
};
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);