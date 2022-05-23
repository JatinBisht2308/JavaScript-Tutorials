let fruits = "apple"
console.log(fruits);
{
    console.log("inside block",fruits);
     {
         console.log("block inside block",fruits);
     }
     fruits = "orange";//changing the global wala fruits beacause no other variable name as fruits exist inside the block so they are changing the global one
    console.log("inside bloock",fruits);

}
console.log("global block",fruits);