// It is a mechanism where code gets memory in different section and execution in different section

console.log(x);
var x = 10;
console.log(x);

{
    var z = 1000;
}
console.log(z);