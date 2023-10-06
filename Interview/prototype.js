// Prototype :- is used to make custom function 
Array.prototype.myFunction = function(){
    console.log(this);
    console.log(this[1]);
}

let arr = [1,2,3,4];
arr.myFunction(); 

// Lets create custom map(polyfills) and custom filter(polyfills) functions using prototype

Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let i=0;i<this.length;i++){
        newArr[i] = cb(this[i]);
    }
return newArr;
}
let ans = arr.myMap((item) =>{
  return item * item;
});
console.log(ans);

// myFilter
Array.prototype.myFilter = function(cb){
  let filteredArray = [];
  for(let i=0;i<this.length;i++){
     if(cb(this[i])){
        filteredArray.push(this[i]);
     }
  }
  return filteredArray;
}
let ansArray = arr.myFilter((item) =>{
    return item%2==0;
});
console.log(ansArray);