// promises chaining
let sumPromise = new Promise((resolve, reject) => {
   resolve("jatin")
})
sumPromise.then(function(firstname){
    console.log("firstname is " + firstname);
    let full = firstname+" bisht";
    return full;
})
sumPromise.then(function(fullname){
   console.log("fullname is " + fullname);
   return "Name is submitted";
})
sumPromise.then(function(whatnext)
{
    console.log(whatnext);
});