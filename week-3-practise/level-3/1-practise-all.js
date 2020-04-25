/* Password Validation
  This program should check if each passwords in the array ("password[]") 
  contains valid Password (see below for password criterias) and return 
  new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, true, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];
var PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

//var symbols = /["S!", "#", "$", "%", "."]/;

//   if (arr.match(/[A-Z]/g) && arr.match(/[a-z]/g) && arr.match(/[0-9]/g) && arr.match(symbols) && arr.length >= 5) {

// for (let i = 0; i < password.length; i++) {
// let p=password[0];
// let isValid=true;
// if(PreviousPassword.includes(p)){

// }
// }

function validator(pass) {

   //return PreviousPassword.includes(pass);
   return /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass) && /[S!#$%.]/.test(pass) && pass.length >= 5 && !PreviousPassword.includes(pass);
}


var PasswordValidationResult = password.map(validator)

console.log(PasswordValidationResult)




/*
LEVEL 1:

Passwords must
- Have at least 5 characters,
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, true, true, true]
*/