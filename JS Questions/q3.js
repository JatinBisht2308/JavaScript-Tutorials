console.log("1",varname);
var varname = 10;

function b()
{
    console.log("5",varname);
}
console.log("7",varname);
function fn() {
    console.log("9",varname);
    var varname = 20;
    b();
    console.log("13",varname);
}
fn();