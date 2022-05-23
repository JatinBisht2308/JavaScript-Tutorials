function fn()
{
    console.log(a);
    var a = 10;
    console.log(a);
    if(a==10)
    {
        // here we are not assigining sometgin to a hence it value reamains same
        var a;
        console.log(a);
    }
    console.log(a);
}
fn();