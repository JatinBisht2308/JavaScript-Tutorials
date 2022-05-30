// promises chaining
let sumPromise = new Promise((resolve, reject) => {
   resolve("jatin")
})
.then(function(firstname){
    console.log("firstname is " + firstname);
   return new Promise((resolve, reject) => {
       resolve(firstname+" bisht")
   })
})
.then(function(fullname){
   console.log("fullname is " + fullname);
   return new Promise((resolve, reject) => {
    resolve("Name is submitted")
})
})
.then(function(whatnext)
{
    console.log(whatnext);
});