// {
//     var x = 10;
// }
// console.log(x);

// Functions
// Syntax
// function callMe() //function defination
// {
//     console.log("hello");
// }
// callMe();  // fucntion calling or invocation

// fucntion with parameters
// function func(param)
// {
//     console.log("Hi jatin",param);
//     return param;
// }
// func("hi jatin");
// func(123);
// func([1,2,3,4,5]);
// func({ask:"how are you"})
// func();
// let returnValue = func(12);
// console.log("Return value is",returnValue);

// function are first class citizens (function are treated as variables)
// let a = [1,2,3,4,5];
// let b = a;
// console.log(b);
// similarly we are having function expressions to assign function as variables
// let func = function fn(param) {
//     console.log("Hi jatin",param);
// }
// func("Bhadwa");
// anoynamous function
// let anoy = function ()
// {
//     console.log("Hi i am a anoynamous function");
// }
// anoy();

// IIFE -> Immediately invoked function expressions
// (function iffy()
// {
//     console.log("I am iffy function");
//     console.log("I will call myself automatically");
// })();

// arrow function
// let fn = (param) => {
//     console.log("I am arrow function",param);
// }
// fn("dekhle mereko");

// Why functions are first class citzens
// 1)- function can be asssigned -> expressions
// 2)- variable can be passed as argument so similarly we can pass function as arguments.
// eg)- function smaller()
// {
//     console.log("i am smaller function");
// }
// function passFunctionAsArgument(param)
// {
//     console.log("i am passFunctionAsArgument",param);
//     param();
// }
// passFunctionAsArgument(smaller);

// 3)- as we can return variables from function we can also return functions from function
// eg)- function x()
// {
//     console.log("Hi i am x");
//     return function y(){
//         console.log("hi i am y");
//     };
// }
// let yFunction = x();
// yFunction();

// ----------- HOW JS EXECUTED ----------------
// function real()
// {
//     console.log("I am real");
// }
// function real()
// {
//     console.log(" No i am the real function");
// }
// real();
// function real(){
//     console.log("You are not the real function i am");
// }


// Hoisting -> in variables
// console.log(" a is ",a);
// var a;
// console.log("a  is ",a);
// a = 10;
// console.log("a is ",a);

// Hoisting -> in functions
// fn();
// function fn(){
//     console.log("I can be called before my declaration");
// }
// fn();

// Question of hoisiting
// console.log("varName",varName);
// var varName;
// console.log("varName is ",varName);
// varName = " Jatin Bisht";
// console.log("varName is ",varName);
// fn();
// function fn(){
//     console.log("Hello from fn");
// }
// fn();
// var fnContainer = function(){
//     console.log(" I am expression");
// }
// fnContainer();

// -------------- Scope -> Lexical, Scope chaining --------------
// console.log("line number 1 ",varName);
// var varName = 10;

// function b()
// {
//     console.log("line number 5",varName);
// }
// console.log("line number 7 ",varName);
// function fn(){
//     console.log("line number 9",varName);
//     var varName = 20;
//     b();
//     console.log("line number 13",varName);
// }
// fn();

// ----------- Var in Depth --------------
// 1)-
// function fn()
// {
//     console.log(a);
//     var a = 10;
//     console.log(a);
//     if(a==10)
//     {
//         var a;
//         console.log(a);
//     }
//     console.log(a);
// }
// fn();
//  var a = 10;
// console.log("line number 2",a);
// function fn(){
//     console.log("line number 4",a);
//         var a = 20;
//         a++;
//         console.log("line number 7",a);
//         if(a)
//         {
//             var a = 30;
//             a++;
//             console.log("line number 11",a);
//         }
//     console.log("line number 13",a);
// }
// fn();
// console.log("line number 2",a);

// ----------------- Let and Const in Depth -----------------
// 1)-// let letfruit = "orange";
// var varfruit = "orange";
// console.log("letfruit",letfruit,"varFruit",varfruit);
// {
//     let letfruit = "apple";
//     var varfruit = "apple";
//     console.log("letfruit",letfruit,"varFruit",varfruit);
// }
// console.log("letfruit",letfruit,"varFruit",varfruit);
// 2)- Legal shadowing
//  var x = 10;
//  {
//     let x = 100;
//     console.log(x);
//  }
//  console.log(x);
// 3)- Illelegal shadowing
// let x = 10;
// console.log(x);
// {
//     var x = 100;
//     console.log(x);
// }
// console.log(x);

// ------------------ Objects in Javascript ------------------
// var obj = {
//     name:"Jatin",
//     age:20,
//     role:"SDE"
// }
// console.log(obj.name);
// console.log(obj["name"]);
// // traversing an object
// for(let key in obj)
// {
//     console.log(key,":",obj[key]);
// }
// obj.name = "piyush";
// console.log("Changing the stuff:");
// for(let key in obj)
// {
//     console.log(key,":",obj[key]);
// }
// console.table(obj);

// var obj = {
//     name:"Jatin",
//     age:20,
//     courseList:[],
//     buyCourse:function(courseName){
//         this.courseList.push(courseName);
//     },
//     courseCount : function(){
//         return `${this.name} is enrolled in total of ${this.courseList.length} courses`;
//     }
// }
// console.log(obj.courseList);
// obj.buyCourse("Javascript");
// obj.buyCourse(";asdhfhuoih");
// obj.buyCourse("jifjfsd");
// obj.buyCourse("asdf");
// obj.buyCourse("af");
// console.log(obj.courseList);
// console.log(obj.courseCount());

// ------------------ Array in Javascript ------------------
// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr.length);
// arr[0] = 1000;
// console.table(arr);
// var user = ["jaitn","jatin@jatin",100,true];
// console.table(user);
// fill and filter in array
// var arr = [1, 2, 3, 4, 5, 6, 7, 78, 8, 9];
// console.log(arr.fill(0));
// console.log(arr.fill("filled"));

// .fill(content,startindex,end index)
// console.log(arr.fill(0,3));
// console.log(arr.fill(0, 3, 4));

// filter

// const myNumber = [23, 45, 21, 67, 32, 67, 34, 45];
// const result = myNumber.filter((num) => num > 30);
// const result2 = myNumber.filter((num) => num < 30);
// const result3 = myNumber.filter((num) => num != 67);
// const result4 = myNumber.filter((num) => num == 67);
// const result5 = myNumber.filter((num) => num>1)

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

//  Slice and Spice in Array

var users = ["Jatin","Tushh","Naman","Piyush","Harshit","Sparsh"];
console.log(users.slice(1,3));
console.log(users.slice(1));

// users.splice(1,2,"XXXXXX");
// console.log(users);
// [ 'Jatin', 'XXXXXX', 'Piyush', 'Harshit', 'Sparsh' ]
users.splice(1,3,"YYYYYY");
console.log(users);

// users.splice(1,3,"zzzzzz");
// console.log(users);
//  ------------- Everything is objec in js ----------------

// const a = 10;
// const arr = [1,2,3,4,5];

// // How is it possible?
// console.log(arr);
// const object = {
//     name:"Jatin",
//     1:"100",
//     2:"200",
//     lastName:"Bisht"
// }
// console.log(object);
// // print every key value pair of object
// for(let key in object)
// {
//     console.log(key,":",object[key]);
// }

// Why we are saying that array is also an object?
// let arr = [1,2,3,4,5];
// arr.key = "Value";
// console.table(arr);
// arr.func = function(){
//     console.log("Hello");
// }
// console.log(arr);
// for(let key in arr)
// {
//     console.log(key,":",arr[key]);
// }

// q1)- How is it possible?
// const arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr);

//  Function as object in js
// function fn()
// {
//     console.log("Hello from fn");
// }
// // fn();
// fn.prop = "property of function";
// fn.chotaFn=function(){
//     console.log("Hello from chotaFn");
// }
// // console.log(fn);
// // for(let key in fn)
// // {
// //     console.log(key,":",fn[key]);
// // }
// fn.chotaFn();

// ------------------ Functional Programming ------------------
// Q)- Is the square of the number is even?
// Imperative Code writing
// const x = 4;
// const squared = x * x;
// let isEven;
// if(squared % 2 == 0)
// {
//     isEven = true;
// }
// else{
//     isEven = false;
// }
// console.log(isEven);
// // Declerative Code writing
// const isSqaureEven = (num) => {
//     if((num*num) % 2 ==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isSqaureEven(5));

// Impure function not recommended(Impure function is called impure because it is changing the value of the variable due to some outside/external function here it is a)
// let a = 7;
// function addNum1(b)
// {
//     console.log(a+b);
// }
// addNum1(5);
// // Pure Function(recommended in functional programming)(not dependent on any external variable/factor)
// function addNum(a,b)
// {
//     console.log(a+b);//side effect is console.log here changing the external factor here console is adding the result in the screen.
// }
// addNum(5,15);

// Immutable function
// const person1 ={
//     name:"Jatin",
//     age:"20"
// }
// const person2 = person1;
// // console.log(person1);
// // console.log(person2);
// // person2.name = "Tushh";
// // console.log(person1);
// // console.log(person2);

// const person3 = Object.assign({},person1);//solution that object reference will not be changed of the person1
// person3.name = "Dhinckachika";
// console.log(person3);
// console.log(person1);

// -------------- Highe Order Fuctions ----------------
// Map
// let myArr = [1,2,3,4];
// let newArr = myArr.map(function(x){
//     return x*2;
// })
// console.log(myArr);
// console.log(newArr);

// // Filter
// let filteredArray = myArr.filter(function (x){
//    return x%2===0;
// })

// console.log(filteredArray);

// // Reduce
// let reducedArray = myArr.reduce(function (accumulator,x){
//    return accumulator + x;
// },0)
// console.log(reducedArray);

//  --------------- Closures -----------------
// A function always bundeled with its lexical scope and it is called closure.
// function outer()
// {
//     var x = 10;
//     function inner()
//     {
//         console.log(x+5);
//     }
//     return inner;
// }
// let newFunc = outer();
// // at this point function outer is removed from the stack but still inner function is able to access the variable x because of closure.
// console.log(newFunc);
// newFunc();

// --------------- Callbacks -----------------
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// function a(x,callback) {
//  console.log(x);
//  callback(x);
// }
// function b(num)
// {
// console.log(num+5);
// }

// a(10,b);

// SetTimeout is a callback function
// console.log("Hello");
// setTimeout(function(){
//     console.log("FUNc 1");
// },1000);
// setTimeout(function(){
//     console.log("FUNc 2");
// },2000);
// console.log("World");   
// import React from 'react'

// const practice = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default practice
