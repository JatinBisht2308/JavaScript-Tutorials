// Object destructuring
const obj1 ={
    key1 : "val1",
    key2 : "val2"
};

const obj2 ={
    key3 : "val3",
    key4 : "val4"
}

// destructuring it (the variable name should be same as the key name of an object)
let { key1, key2 } = obj1;
console.log(key1);
console.log(key2);