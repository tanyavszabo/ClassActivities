// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1",
};
//will print the value of 'key' variable as property of 'obj' obkect.
//will print the value of the key property directly on the obj object.
//pwill rint the value of the "key" property as a string key of the obj object.  

// what will the following lines print?
console.log(obj[key]);
console.log(obj.key);
console.log(obj["key"]);

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const book = {
    opening: "Hey!",
    pages: 42,
    fiction: true,
    collections: ["red", "blue", "orange"]
  };
  


// Access a value in the "collection" property
const showCollection = book.collections[2];
console.log(showCollection);


// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

const myNestedObject = {
    key: "value",
    1: {
      method: "GET",
      favorites: ["red", "blue", "orange"],
      list: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Alice" }
      ]
    }
  };
  
// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "10",
  number: 0,
  color: ""
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things

// Access the values "b", 4, and 6 from obj.list