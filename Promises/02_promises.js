// promises chaining
let sumPromise = new Promise((resolve, reject) => {
    return "jatin"
})
.then(function(firstname){
    console.log("firstname is " + firstname);
    return firstname+"bisht";
})
.then(function(fullname){
   console.log("fullname is " + fullname);
   return "Name is submitted";
})
.then(function(whatnext)
{
    console.log(whatnext);
});