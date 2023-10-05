function calculate(a,b)
{
    // you can initialize it with any keyword var, let
    let result = a + b;
    return result;
}
console.log(calculate(2,3));
// We can not access any variable that is function scoped out of the function scope.
// console.log(result);

// Lexical Scope :- a child function has the access of all the variable of its parent function
function add(){
    let a = 4;
    function addChild(){
        console.log(a + 5);
    }
     return addChild;
}
// now lets see that if we return the function addChild from the function add then still we get value of a inside the child function as the add function is already returned and it is removed from the stack.
let catchAdd = add();
// catch add has the child function addChild
console.log(catchAdd);
// now lets run the cathchAdd function and check whether we can acess the a variable still or not
catchAdd();
// here you can see we can still have the access of the parent variable after returning the parent function also.
// A function is always bundled with its lexical scope i.e it always has the access of its lexical variables this behaviour of js is called a closure.