// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

/*function remove(arr, index) {
  let newArray = [...arr];
  newArray.splice(index, 1);
  return newArray;

}*/

function remove(arr, index) {
  var first = arr.slice(0, index);
  var second = arr.slice(index + 1, arr.length); // []
  return first.concat(second);
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, 1);

console.log(newNumbers);
console.log(newNames);

/*
  EXPECTED RESULT
  ---------------
  [1, 2]
  [Irina, Mozafar]
*/
