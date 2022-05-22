// functions inside functions

const app = ()=> {
    console.log("inside app");
    const insideFunction = ()=> {
        console.log("hello from inside function");
    }
    const sum = (a,b)=> {
        console.log(a+b);
    }
    const multiply = (a,b)=> {
        console.log(a*b);
    }
    // 🙌
    insideFunction();
    sum(10,10);
    multiply(10,10);
}
app();
//  if you want to call the function who are inside another function than you have to call them inside the function only they cannot be called from outside the function