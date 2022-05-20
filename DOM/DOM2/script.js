// selects all the element first by query selector

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const body = document.querySelector("body");
const center = document.querySelector(".center");

// window object has lots of methods one of them is getComputedStyle used to select the css of a particular elemenmt 
// console.log(window.getComputedStyle(red).backgroundColor);

const getBgColor = (selectedElement) => {
   return window.getComputedStyle(selectedElement).backgroundColor;
}

console.log(getBgColor(violet));

// evernt listeners and events 
// var orangeElement = getBgColor(orange);
// orange.addEventListener('mouseenter', ()=>{
//     center.style.backgroundColor = orangeElement;
// })

// magiccolor picker
const colorPicker = (element,color) => {
    return element.addEventListener("mouseenter", ()=> {
         center.style.backgroundColor = color;
     })
};

colorPicker(red,getBgColor(red));
colorPicker(violet,getBgColor(violet));
colorPicker(cyan,getBgColor(cyan));
colorPicker(orange,getBgColor(orange));
colorPicker(pink,getBgColor(pink));
colorPicker(body,getBgColor(body));