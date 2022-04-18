// Method and Objects
// making user object
var user = {
  //  the data stored inside the objects are in the form of key:value pair
  firstName: "Jatin",
  lastName: "Bisht",
  role: "admin",
  loginCount: 10,
  loggedinVia: "facebook",
  courseList:[],
  buyCourse:function (courseName) {
    //   this simply refers to the object user
     this.courseList.push(courseName);
  },
  getCourseCount:function () {
      return `${this.firstName} has enrolled in ${this.courseList.length} courses`;
  },
  info: function () {
      return `${this.firstName} ${this.lastName} is the ${this.role} and he is logged in via ${this.loggedinVia} his login count are ${this.loginCount} and he enrolled in ${this.courseList.length} courses.`
  }
};
console.log(user.firstName);
var courseList = true;
// lets play with the object now
console.log(user.getCourseCount());
// adding some course to the course list
user.buyCourse("JavaScript");
console.log(user.getCourseCount());
user.buyCourse("Java");
user.buyCourse("Devops");
console.log(user.getCourseCount());

// using the last method i.e for homework
console.log(user.info());


