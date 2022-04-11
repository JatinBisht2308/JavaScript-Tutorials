// fill and filter in array
var arr = [1, 2, 3, 4, 5, 6, 7, 78, 8, 9];
// console.log(arr.fill(0));
// console.log(arr.fill("filled"));

// .fill(content,startindex,end index)
// console.log(arr.fill(0,3));
console.log(arr.fill(0, 3, 4));

// filter

const myNumber = [23, 45, 21, 67, 32, 67, 34, 45];
const result = myNumber.filter((num) => num > 30);
const result2 = myNumber.filter((num) => num < 30);
const result3 = myNumber.filter((num) => num != 67);
const result4 = myNumber.filter((num) => num == 67);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

