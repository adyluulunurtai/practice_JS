

let box = document.getElementById("box");
let circles = document.getElementsByClassName("circle");
let btns = document.getElementsByTagName("button");
let heart = document.querySelector(".heart");
let hearts = document.querySelectorAll(".heart");

//box.style.backgroundColor = "blue";
//box.style.width = '300px';

box.style.cssText = "background-color:blue; width:800px";
btns[1].style.borderRadius = '100%';
circles[0].style.cssText = "background-color:red ; width: 100px";

console.log(hearts);
hearts.forEach(item=>{
    item.style.backgroundColor = "black";
});
