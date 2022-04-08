// Show user a signout button if he/she is authenticated 
// other wise show him option to login/signup

var authenticated = true;
// if(authenticated) {
//     console.log("Show sign out button");
// }
// else{
//     console.log("Show login/sign up option");
// }

// 🔥 Using ternary operators
console.log(authenticated ? "Show sign out button" : "Show login/sign up button");
// Another way
authenticated ? console.log("Show sign out button") : console.log( "Show login/sign up button");