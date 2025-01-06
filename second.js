//<<================================TYPE CONVERSION===================================>>
// let score = "56"
// console.log(typeof (score));// use as method
// console.log(typeof score);
// let valueinNumber = Number(score);
// console.log(typeof valueinNumber);
//<<================================NaN===================================>>
// let marks = "ghy56"
// console.log(typeof(marks));
// let change2 =Number(marks);    //changing it's type to number from string **help's to filer out the data while taking from form**
// console.log(typeof(change2));
// console.log(change2);    //it return NaN(Not a Number) **as it don't convert it into number but show it is a number

let boolean5 = 1;
let trans = Boolean(boolean5);
console.log(typeof(trans));
console.log(trans)

/*
1) "" ==> false
2) "Kushal" ==> true
3) null ==> false
4) 778 ==> true
5) 0 ==> false ; 1 ==> true
*/