//  Higher order function are those functions which takes functions as arguments.
// 1)- map (iterates over the array and apply the logic to each item which is provided inside the return statement)

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((item) => {
  return item * item;
});
console.log(arr);
console.log(newArr);

//  2)- filter(filters the element in the array and the condition is in the return statement due to which it filters the array)
let filteredArray = arr.filter((x) => {
  return x % 2 == 0;
});
console.log(filteredArray);

// 3)- reduce ( returns a single value)
let sum = arr.reduce((accumulator, x) => {
  return accumulator + x;
}, 0);
//  here the 0 is the value of accumulator and the value of accumulator changes on every interation it goes on adding like 0+1, 1+2, 3+3, etc..
console.log(sum);
