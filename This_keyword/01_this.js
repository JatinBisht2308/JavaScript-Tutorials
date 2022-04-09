// part:"1" of this keyword-> this keyword gives refrence to the global context 
console.log(this);

var game = "football";

function sayGame()
{
    console.log(game);
    console.log(this);
}
sayGame();
