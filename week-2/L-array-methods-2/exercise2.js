/*
Array methods - .join()
-------------------------
Complete the capitalise function 
It should return a string with the first letter in uppercase
For example, capitailise("hello") should return "Hello"
Tip: use the string method .split() and the array method .join()
*/

/*------One way to solve
function capitalise(str) {
  const spl = str.charAt(0).toUpperCase() + str.slice(1);
  return spl;
} ----*/



function capitalise(str) {
  let strsplit = str.split("");
  strsplit[0] = strsplit[0].toUpperCase();
  return strsplit.join('');

}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/*
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
