/*BASIC'S OF JS PRINTING STATEMENTS ND ALL OTHER THINGS*/
console.log("Hello, World!") //used to print single statement
console.table({name: "Kushal sharma", age :19, position : "GDG Organizer" }) //Used to Print multiple values in tabular form
console.error("This is an error") //Used to print error message
const AccountId = 9886    
let Accountmail = "hello@gmail.com" //Always use let instead of var
var accountpsswrd = "@3213" //issue of scope like this changes while changing other password
AccountholderCity = "Noida"   //BAD PRACTICE
let company_name  //This gives Undefined
console.log(company_name) 
console.table({AccountId,accountpsswrd,AccountholderCity,company_name})
/* DATA TYPES */
"use strict"; //This is used to make the code more secure or we can say it enables modern javascript features in full code
//but nowadys it is not used as it is already enabled in modern js
console.log (3+3)
/*MDN documentation for js it is not official official is ECMA script (standarisation of javascript for engine development) */
/*now. ==> Range=(2^53)
bigint
string
boolean ==> true/false
null ==> standalone value
undefined ==> undefined value
symbol ==> unique value {mostly used in react}
object ==> key value pairs
*/
console.log(typeof 3) //number
console.log(typeof null) //object
console.log(typeof undefined) //undefined