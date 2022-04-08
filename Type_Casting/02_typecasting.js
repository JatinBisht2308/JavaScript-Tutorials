// Implicit conversion brainstroms
console.log(2+2);//-> return integer

console.log(2 + "2");//-> return string

// A tricky example

var x="2";

if(2 == x)//-> here the js will only check for the value 2 not its data type(loosly check)
{
    console.log("True");
}

// Here the js will check for both value as well as the data type(strict check)
if(2 === x)
{
    console.log("True"); 
}
else{
    console.log("False");
}