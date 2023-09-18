var countries = ["INDIA", "USA", "JAPAN"];

var states = new Array("Delhi", "Rajasthan", "Uttarakhand");

// Methods of array
// 1)- .length property -> prints the length of the array.
// console.log(countries.length);
// console.log(states.length);

// 2)- push() -> adds the element at the end of the array.
// states.push("Punjab");
// console.log(states);

// 3)- .pop() -> deletes the last element of the array.
// states.pop();
// console.log(states);

// // 4)- .shift() -> deletes the element at the start of the array.
// states.shift();
// console.log(states);

// // 5)- .unshift() -> add element at the start of the array.

// states.unshift("New State");
// console.log(states);

// // 6)- .indexOf() -> prints the index of the element you have passed
// console.log(states.indexOf("New State"));
// console.log(states.indexOf("Rajasthan"));
// console.log(states.indexOf("Not exisiting state"));

// // 7)- .from() -> converts other datatype to array
console.log(Array.from("Hi i am converted to array!!"));
console.table(Array.from("Array"));
