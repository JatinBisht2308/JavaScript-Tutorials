// Prototype :- is used to make custom function 
Array.prototype.myFunction = function(){
    console.log(this);
    console.log(this[1]);
}

let arr = [1,2,3,4];
arr.myFunction(); 