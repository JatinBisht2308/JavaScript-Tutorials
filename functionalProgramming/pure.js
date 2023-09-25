//  impure function

let a = 9
// her the  function  is called impure because it is dependent on a variable which is outside of the function scope and for the same argument i.e 1 it can give different results depending on the value of the variable a hence its is called an example of impure function. And it is the rule of functional programming that no function should be dependent on anything outside the function scope.
function addNum(b)
{
    console.log("The sum is",a+b);
}
addNum(1);

//  Pure function

const addNumPure = (a,b) => {
    console.log("The sum with side effect is",a+b);// this console.log is side effect because it is using and external resource i.e consoling the data so to make it 100% pure we have to just replace this console.log with return statement.
    return a+b;
}
addNumPure(3,4);
console.log("This sum without side effect is",addNumPure(3,4));
//  A pure function is a function that will always return same result for the same set of arguments. 