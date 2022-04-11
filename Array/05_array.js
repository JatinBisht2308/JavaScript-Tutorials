// Slice and Spice in Javascript

var users = ["Jatin","Tushh","Naman","Piyush","Harshit","Sparsh"];
console.log(users.slice(1,3));
console.log(users.slice(1));

users.splice(1,2,"XXXXXX");
console.log(users);
// [ 'Jatin', 'XXXXXX', 'Piyush', 'Harshit', 'Sparsh' ]
users.splice(1,3,"YYYYYY");
console.log(users);

users.splice(1,4,"zzzzzz");
console.log(users);