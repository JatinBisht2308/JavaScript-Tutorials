// promises chaining
let sumPromise = new Promise((resolve, reject) => {
    return "jatin";
})
sumPromise.then(function(firstname){
    console.log("firstname is " + firstname);
    return firstname+"bisht";
})
sumPromise.then(function(fullname){
   console.log("fullname is " + fullname);
   return "Name is submitted";
})
sumPromise.then(function(whatnext)
{
    console.log(whatnext);
});