// Lexical scope: if a variable has
function myApp() {
    const myVar = "val1";
    function myfun(){
        console.log("Inside myfun");
        // const myVar = "value59";
        console.log("inside myFun",myVar);
    };
    const myFun2 =  function(){};
    const myFun3 = ()=> {};
    console.log(myVar);
    myfun();
}
myApp();