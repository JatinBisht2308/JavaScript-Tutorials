let fruits = "apple"
console.log(fruits);
{
    console.log(fruits);//temporal deadzone
    let fruits;
    console.log(fruits);
     fruits = "orange";
    console.log(fruits);
}
console.log(fruits);