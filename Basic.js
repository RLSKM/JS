let variable = 123;  //create variable

//creates a constant(cannot be changed)
const birthday = "12-09-07";
let isHuman = true; //Capital not required

console.log(variable);  //print

let a = Math.random();  //No need to import
let b = Math.round(12.438);
let c = Math.E ** 2;

//Strings
let firstName = 'Andrew';
let nameLength = firstName.length;

let language = 'english';
console.log(language[0]);
console.log(language.substring(2, 5));  //from index 2 to 4
console.log(language.toUpperCase());
console.log(language.replace('eng', 'eye'));
//if includes java, return true
console.log(language.includes('Java'));
console.log(`I hate ${language.toLowerCase()}`)  //f string

