// Assignment operator have right ot left flow of percendence
console.log(a = b =10);  // a = (b=5) similar to this.

// Arithematic operation flow also goes from left to right
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the division operator (/)
console.log(echo("left", 6) / echo("right", 2));

