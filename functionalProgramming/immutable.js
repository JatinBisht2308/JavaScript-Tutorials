// using object we can demonstarate that they are immutable
const person1 = {
  name: "John",
  age: 20,
};
const person2 = person1;

console.log(person1);
console.log(person2);

//  if we change the name of the person2 then it will also change the name for person1 object because they both refer to the same object in the actual memory

person2.name = "Bhola";
console.log(person1);
console.log(person2);

// now we have 2  methods like deep copy and shallow copy to get rid of this immutability but we will look into them in the coming tutorial for now what we can use Object.assign({},person1);

const person3 = Object.assign({}, person1);

// in the above line the properties of person1 will be copied to the empty object which we have already defined inside the assign function and then a new reference will be created which refer to the person3 object, lets check

console.log(person3);
console.log(person1);

person3.name = "Gendu Machar";
console.log(person3);
console.log(person1);

//  Another method is using a spread operator {...}
const person4 = { ...person1 };
console.log(person4);
console.log(person1);

//   as its name says spread that means make another reference for the new object
person4.name = "Khatti Toffee";
console.log(person4);
console.log(person1);
