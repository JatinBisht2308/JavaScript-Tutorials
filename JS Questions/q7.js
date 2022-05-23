let fruits = "apple"
console.log(fruits);
{
    let fruits;
    console.log(fruits);
     fruits = "orange";
     {
         console.log("block inside block",fruits);
     }
    console.log(fruits);

}
console.log(fruits);