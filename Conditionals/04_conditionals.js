// Switch case statements in javascript
// Create an applilcation with the following roles
// 1)- admin -> get full access to
// 2)- subadmin -> get access to create/delete courses
// 3)- testprep -> get access to create/delete tests
// 4)- user -> get access to the course as a consumer

var user = "Anoynamous";
switch (user) {
  case "Admin":
    console.log(`Hey ${user} you have access to everything.`);
    break;
  case "Sub Admin":
    console.log(`Hey ${user} you have access to create/delete the course only.`);
    break;
  case "Test Preperator":
    console.log(`Hey ${user} you have access to create/delete test only.`);
    break;
    case "User":
    console.log(`Hey ${user} you have access to learn the content and give test only.`);
    break;
  default:
      console.log(`Hey ${user} you have to buy the course first.`);
    break;
}
