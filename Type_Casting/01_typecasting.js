// Type casting, type coercion , truthy value falssy value some of these topics of javascript we will lean in this directory of TypeCasting

// Some of the values that you must aware about(These are known as falsy values in js.)
// 1)- undefined value -> if you dont give any value to an variable then it would be considered as the undefined data type 

var x ;
console.log(typeof(x));


// 2)- null -> null dataytype defines a specific value which repersents empty.
 var y = null;
if (y) {
    console.log("True");
}
else{
    console.log("False");
}

// But if we make a string as null then see it will run and give true

var str = "null";
if (str) {
    console.log("True");
}
else{
    console.log("False");
}
var str = "";
if (str) {
    console.log("True");
}
else{
    console.log("False");
}
// Falssy values return them as false.
// 3)- 0
// 4)- ' '
// 5)- Nan 