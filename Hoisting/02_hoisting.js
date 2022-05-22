// hoisting
hello();
function hello()
{
    console.log("hello boy");
}

//  above code is possible in function decleration but not in function expression
sayhello();
var sayHello = function(){
    console.log("hello boy from say hello");
}
