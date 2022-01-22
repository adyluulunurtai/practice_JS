

let box = document.getElementById("box");
let circles = document.getElementsByClassName("circle");
let btns = document.getElementsByTagName("button");
let heart = document.querySelector(".heart");
let hearts = document.querySelectorAll(".heart");
let wrapper = document.querySelector('.wrapper');
//box.style.backgroundColor = "blue";
//box.style.width = '300px';

box.style.cssText = "background-color:blue; width:800px";
btns[1].style.borderRadius = '100%';
circles[0].style.cssText = "background-color:red ; width: 100px";

console.log(hearts);
hearts.forEach(item=>{
    item.style.backgroundColor = "black";
});

const div = document.createElement('div');
div.classList.add("black");

//wrapper.prepend(div);
wrapper.append(div);
//hearts[1].before(div);
//hearts[1].after(div);
div.innerHTML = "<h1>HEllo world!</h1>";
div.insertAdjacentHTML('beforebegin', '<h2>iooo</h2>')
//circles[0].remove();
//hearts[0].remove();
//wrapper.remove();
//hearts[0].replaceWith(circles[0]);


