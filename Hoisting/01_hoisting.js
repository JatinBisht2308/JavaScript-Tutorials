// It is a mechanism where code gets memory in different section and execution in different section

console.log(x);
var x = 10;
console.log(x);

{
    var z = 1000;
}
// it will print the value 1000 becuase var have global scope value
console.log(z);