// Write a function that replaces an element in an array
// The function must:
// - NOT change the original array
// - return a new array with the replacement value inserted
// - insert the replacement value at the provided index

/*function replace(arr, index, value) {
  newArr = [...arr];
  newArr.splice(index, 1, value);
  return newArr; // complete this statement
}

]

function replace(arr, index, value) {
  var first = arr.slice(0, index);
  var second = arr.slice(index + 1, arr.length); // []
  var total = first.concat(second);
  return total.shift;
}
const replace = (arr, index, value) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  value,
  // part of the array after the specified index
  ...arr.slice(index + 1, arr.length)]
*/

function replace(arr, index, value) {
  var first = arr.slice(0, index);
  var second = arr.slice(index + 1); // []
  return first.concat([value]).concat(second);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 1, 2);
var newNames = replace(names, 2, "Rares");

console.log(numbers);
console.log(newNumbers);
console.log(names);
console.log(newNames);

/*
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Ashleigh, Rares]
*/
