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