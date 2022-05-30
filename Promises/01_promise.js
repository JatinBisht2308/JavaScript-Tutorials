// this is an async code (promises are also async)
let fs = require("fs");
console.log("before");
let promise = fs.promises.readFile("f1.text");
console.log(promise);

// if the promise get fullfilled
promise.then( (resolved) => {
  console.log(resolved+"");
})
// if the promise is not full filled
promise.catch( (err) => {
    console.log(err);
})
console.log("after");