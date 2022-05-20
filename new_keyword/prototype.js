var User = function(firstName,courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count of ${ firstName} is ${courseCount}`);
    };
};
// User is an object created with the help of function and new keyword makes an new instance of the same type  of the object User
var jatin = new User("Jatin",10);
// console.log(jatin);
jatin.getCourseCount();
var tushar = new User("Tushar",2);
// console.log(tushar);
// using the function getCourseCount
tushar.getCourseCount();

// using prototype(inserting new functions inside the object user from outside the object making given below)
User.prototype.getFirstName = function() {
    console.log(`Your first name is :${this.firstName}`);
};
// The below code ensures that the new function getFirstName() has added to the object User
jatin.getFirstName();
tushar.getFirstName();
//  Prototypes are used to insert new things(constructors,getters,setters,etc) iside the already exisitng obects