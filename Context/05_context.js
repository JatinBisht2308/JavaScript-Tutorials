// Scope chaining in js-> scope chaining is the same concpet that global excuted variables can be obtained inside the function but the local variables inside the function cant be globally accessed.
var name = "Jatin";
console.log(`Globally executed ${name}`);
function sayMyName()
{
    console.log(`Name inside the function ${name}`);
}

sayMyName();

// You can see the difference by the error occuring in the code. Run and Learn
function sayMyChannel ()
{
    var channelName = " Two Genius";
    console.log(`Channel name inside the function ${channelName}`);
}

console.log(`Globally executed ${channelName}`);