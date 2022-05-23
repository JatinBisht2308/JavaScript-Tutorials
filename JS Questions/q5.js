function fn()
{
    console.log(a);
    var a = 10;
    console.log(a);
    if(a==10)
    {
        // if you reasign some value to the variable having the same then it will change the value of the variable
        var a =20;
        console.log(a);
    }
    console.log(a);
}
fn();