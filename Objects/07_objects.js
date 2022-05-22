//  objects inside and array

const users = [
  {
      userId:"Jatin",
      gender:"Male",
      age: 19
  },
  {
    userId:"Sparsh",
    gender:"Male",
    age: 20
  },
  {
    userId:"Tushar",
    gender:"Male",
    age: 20
  }
];

console.log(users);

// using for of loop
for(let user of users){
    console.log(user.userId);
}