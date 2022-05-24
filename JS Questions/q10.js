let object = {
    name :"jatin",
    lastname :"bisht",
    sayHi: ()=>{
     console.log("hi from object");
    }
};
console.log(object);
// some key which is not inside the object did not gives error it gives undefined
console.log(object[1]);
console.log(object.length);