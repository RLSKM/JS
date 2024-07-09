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
// logic
let age = prompt("enter age");

if (age <= 12) {
    console.log("L kid");
}
else if (age <= 20) {
    console.log("L adult");
}

// loops
let fruits = ['apple', 'banana', 'orange', 'coconut'];

for (let i = 0); i < fruit.length; i++){
    console.log(fruits[i]);
}
for (let fruit of fruits){
    console.log(fruit;)
}

let counter = 30
while (counter > 0){
    console.log(counter);
    counter -- ;
}
console.log("U died")

// Arrays (lists)
let numArr = [1, 2, 3, 4, 5];
let schArr = ['ASR', 'EJC', 'AHS'];

console.log(numArr[0]);
schArr.push('TMJC');  // Appends to end of array
schArr.pop();  // Removes last element in array

// Objects (Dictionaries)

let person = {
    firstName: 'Andrew',
    lastName: 'Me',
    age: 12
};

person['age'] = 21;
console.log(person.age);  //either is fine
console.log(person['firstName']);

//Functions

function cube(x) {
    return x ** 3;
}

// Arrow function (short functions)
let magnitude = (x, y, z) => Math.sqrt(x**2 + y**2 + z**2);

