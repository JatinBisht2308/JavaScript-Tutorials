// for loops in javascript
for (var i = 0;i<10;i++)
{
    console.log(i);
}

// learning loops concept using array
const nameChars = ["J","A","T","I","N",123,false,"B","I","S","H","T"];
for (let i = 0; i < nameChars.length; i++) {
    if (typeof (nameChars[i]) === "string") continue;
    console.log(nameChars[i]);
}