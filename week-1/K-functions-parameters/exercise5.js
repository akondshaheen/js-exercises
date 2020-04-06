// Declare your function here
//*****************************************************Question: age is supposed to be a integer but on result shows as string.  */

var age = 0;
function createLongGreeting(name, age) {
    var longGreeting = "Hello, my name is ", name, " and I'm ", age, "years old.";
    return longGreeting;
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
