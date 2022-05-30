// make a fucntion which has another function inside its parameters
let jatin = (x,y,anotherFun) => { 
 return anotherFun(x,y);
}

// define a function which will pass on the jatin function
let sum = (a,b) => {
    return (a+b);
}

// call the fucntion and print the value
console.log(jatin(10,20,sum));