let arr1 = ["item1","item2"];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr1.push(1);
console.log(arr1);


// 1 will automatically pushed in array2 b/c array is reference variable and also array is object datatype and objects are store in heap memory and when we push some element in arr1 then arr2 is also pointing towards the same arr1 so arr2 will also print same as arr1
console.log(arr2);
console.log(arr1==arr2);


//1)- to make a perfect clone of an array we have to give the same value to the another array this will create 2 different array in the heap
let a1 = [1,2,3];
let a2 = [1,2,3];
a1.push(4);
console.log(a1);
console.log(a2);
console.log(a1===a2);

// 2)- using slice() method
let array1 = ["item1", "item2", "item3"];
let array2 = array1.slice(0);
console.log("Using slice method:");
console.log(array1===array2);

// 3)- using concat
let array3 = [].concat(array2);
console.log("Using concat method and empty array->");
console.log(array2===array3);

// 4)- using spread operator
let array4 = [...array2];
console.log("Using spread operator->");
console.log(array4===array2);


//  These four ways will make new array in the heap

//  if you want to add more items in the clone array while cloning then ->
let array5 = [...array4,"item4","item5"];
console.log(array5);
let array6 = ["item4","item5"];
console.log("Concating 2 clone array using spread operator->");
let array7 = [...array2,...array6];
console.log(array7);