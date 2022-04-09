// Scope chaining 3rd level(god level)
// ICE-CREAM example for scope chaining
var name = "Jatin";

function sayMyName() {
    console.log(`Printing name in second level before :-> ${name}`);
    var name = "Jatin Bisht";
    console.log(`Printing name in second level after :-> ${name}`);
    sayNameAgain();
    function sayNameAgain() {
        console.log(`Printing name in third level ${name}`);
    }
}
sayMyName();
console.log(`Printing name in first(global) level ${name}`);
