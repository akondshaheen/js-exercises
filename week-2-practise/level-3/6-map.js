// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function





function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}
function captialise(str) {

  // complete this function
  /*let newArray = [...str];
  let mentorsTidy = newArray.map(tidyUpString);
  for (let i = 0; i < mentorsTidy.length; i++) { mentorsTidy[i] = mentorsTidy[i].charAt(0).toUpperCase() + mentorsTidy[i].slice(1); };

  return mentorsTidy;*/
  let newArr = str.split('');

  newArr[0] = newArr[0].toUpperCase();
  return newArr.join('');

}
var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

let mentorsTidy = mentors.map(tidyUpString);
var mentorsTidyAndCapitalised = mentorsTidy.map(captialise);
console.log(mentorsTidyAndCapitalised);

/*
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
