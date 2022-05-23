var varName = 10;
function fn() {
    // when a fucntion is called its own and new execution conntext is made automaticallly which is different fromt he global execution context
  var varName = 20;
  console.log(varName);
}
fn();