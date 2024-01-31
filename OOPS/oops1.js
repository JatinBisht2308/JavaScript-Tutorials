// OOPS 1
// this keyword:- behaves differently in browser and in node.js
// further there are two modes strict and non-strict mode
// Now we will only see for the this keyword in node js non  strict mode

// check for the strict mode inside node by the below code.
'use strict'
// 1: normally it gives an empty object.
console.log("normal console log",this);

// 2: iniside a function it gives us an global object.
function showThis()
{
    console.log("inside a function",this);
}
showThis();

// 3: inside an object it gives us the object itself.

let obj = {
    name:"Jatin",
    func: function(){
        console.log("calling a function which is inside an object",this);
    }
}
obj.func();

// 4: inside an nested function in a function which is inside an object

let obj2 = {
    name:"Jatin nested",
    func2: function(){
        function nestedThis()
        {
            console.log("inside a nested function which is inside and object",this);
        }
        nestedThis();
    }
}
obj2.func2();