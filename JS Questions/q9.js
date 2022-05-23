// illegal shadowing
// let fruits = "apple";
// console.log(fruits);
// {
//     var fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);

// legal shadowing
var fruits = "apple";
console.log(fruits);
{
    let fruits = "orange";
    console.log(fruits);
}
console.log(fruits);