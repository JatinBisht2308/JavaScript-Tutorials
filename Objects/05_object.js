//  spread operator in object

const obj1 ={
    key1 : "val1",
    key2 : "val2"
}

const obj2 ={
    key1: "overrided key1 value",
    key3 : "val3",
    key4 : "val4"
}

// cloning of object
const obj3 = {...obj1,...obj2, newkey:"new value"};
console.log(obj3);

// here the index become the key and the value of the string becomes the key value
const obj4 = {..."abcde"};
console.log(obj4);