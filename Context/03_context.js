increaseByFive(5);
increaseByFive("5");
console.log(`Checking before normal function is defined: ${typeof(increaseByFive)}`);

function increaseByFive(num) {
  var increased = parseInt(num);
  increased += 5;
  console.log(increased);
}
console.log(`Checking after normal function is defined: ${typeof(increaseByFive)}`);

// Doing similar thing by using variable function


// but cant work when calling before defining
// increaseByTen("200");
console.log(`Checking before variable function is defined: ${typeof(increaseByTen)}`);
var increaseByTen = function (num) {
    var increased = parseInt(num);
    console.log(increased + 10);
}
console.log(`Checking after variable function is defined: ${typeof(increaseByTen)}`);
// increaseByTen("100"); working fine when calling after defining variable function