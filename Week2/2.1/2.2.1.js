// create a constant variable (const)
const myConstName = "Michael";
// create a variable that can be reassigned (let)
let myName;
// create three variables and assign them values of different data types (=)
let str = "This is a string";
let num = 50;
let boo = true;

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof num);
console.log(typeof str);
console.log(typeof boo);
// change the value referenced by a variable (dynamic typing)
num = "25";
// print the type of the variable you just changed (typeof)
console.log(typeof num);

// create variables and give them values to complete the sentences that will print  below.
myName = "Tanya";
let language = "JavaScript";
let weeks = "A lot, but also never enough";
let masterStatus = false;

// Which variables need to be created?
// What type of data needs to go in each variable?

console.log(
  "Hello, my name is " +
    myName +
    ", and I am learning " +
    language +
    ". I have been practicing for only " +
    weeks +
    " weeks, so my status as a master is: " +
    masterStatus +
    "."
);