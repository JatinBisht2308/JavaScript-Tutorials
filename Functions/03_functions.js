// Define a function that can answer the role of a user.
// A user can be on following roles:
// 1)- admin -> get full access to
// 2)- subadmin -> get access to create/delete courses
// 3)- testprep -> get access to create/delete tests
// 4)- user -> get access to the course as a consumer
// other -> trial user
// Input: getUserRole(name,role);


function getUserRole(name, role) {
  switch (role) {
    case "Admin":
      console.log(`Hey ${name} you are the ${role} for this Tutorial!.`);
      break;
    case "Sub Admin":
      console.log(`Hey ${name} you are the ${role} for this Tutorial!.`);
      break;
    case "Test Preperator":
      console.log(`Hey ${name} you are the ${role} for this Tutorial!.`);
      break;
    case "User":
      console.log(`Hey ${name} you are the ${role} for this Tutorial!.`);
      break;
    default:
      console.log(`Hey ${name} you are the ${role} for this Tutorial!.`);
      break;
  }
}

var role = "Anoynamous";
var name = "Jatin";

// calling the function
getUserRole(name,role);