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
    addChild();
}
add();
