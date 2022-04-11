// callback function
// every do the particular operation with every single element inside the array

function isEven(num)
{
    return num%2 == 0;
}
var result = [2,4,6,8].every(isEven);
console.log(result);
// making function here only
var result = [2,4,5,8].every((num) => (num%2 == 0) );
console.log(result);