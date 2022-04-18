// Objects are the mostly used term or data type in js after fuctions and it is mostly used in the web API's where you have to use and fetch data which are presents in the browse in the form of objects 

// making user object
var user = {
//  the data stored inside the objects are in the form of key:value pair
 firstName:"Jatin",
 lastName:"Bisht",
 role:"admin",
 loginCount:10,
 facebookSignedIn:true
};

// first way to access the value from the object is using the dot notation
console.log(user.firstName);
// another way to access the value from the object is using the square brackets notation
console.log(user["firstName"]);

// you can change the value form outside the object

user.loginCount = 100;
console.log(user.loginCount);
// using the .table functon or key
console.table(user);