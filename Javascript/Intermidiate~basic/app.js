//-----------------selecting Elements

let imgObj = document.getElementById("mainImg");
// imgObj.src = "assests/photo-1635805737707-575885ab0820.jpeg";
console.log(imgObj);

// document.getElementById("description");
console.dir(document.getElementById("description"));



//------------getelementbyClass

// console.dir(document.getElementsByClassName("oldImg"));

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "assests/photo-1635805737707-575885ab0820.jpeg"
//     console.log(`value of small image no. ${i} is changed`);
//     // console.dir(smallImages[i].src);
// }

console.log(document.getElementsByTagName("p")[0]);


//-----------------Query selectors-------------------

console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector('.oldImg'));
console.dir(document.querySelector("div a")); //a is the anchor tag
console.dir(document.querySelectorAll("div a"));



//Using properetied and methods

let para = document.querySelector("p");
console.dir(para);
console.dir(para.innerText);    //show all content only
console.dir(para.innerHTML);    // show content + html tags
console.dir(para.textContent);  //shows how your content is written in IDE

para.innerText = "Hi, I am Peter Parker <b>yoyo</b>";
console.dir(para.innertext);

let heading = document.querySelector("h1");
// heading.innerText = "Spider Man";
heading.innerHTML = `<u>${heading.innerText}</u>`;



//manipulating attributes

let img = document.querySelector("img");
console.dir(img.getAttribute("id"));

img.setAttribute("id", "mainImg");
console.dir(img.getAttribute("id"));


console.dir(img.style);

console.dir(heading.style);
heading.style.backgroundColor = "Yellow";


let links  = document.querySelectorAll(".box a");
for(let i=0; i<links.length; i++){
    links[i].style.color = "hotpink";
}

for(link of links){
    link.style.color = "teal";
}

//classList, add, remove, toggle, contains

console.dir(img.classList);
console.dir(heading.classList);

heading.classList.add("abc");
heading.classList.add("green");
heading.classList.add("underline");


console.dir(heading.classList)

heading.classList.remove("underline");
console.log(heading.classList);
console.log(heading.classList.contains("underline"));

console.log(heading.classList.toggle("underline")); //it was not there but toggle adds it and returns true
console.log(heading.classList);

console.log(heading.classList.toggle("underline")); //it was not there but toggle adds it and returns true
console.log(heading.classList);

let box = document.querySelector(".box");
console.log(box.classList.toggle("yellowbg"));


//navigation
let heading4 = document.querySelector('h4');
console.log(heading4.parentElement);
console.log(box.children);

let ul = document.querySelector("ul");
console.log(ul.children);

console.log(ul.children[0]);
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

console.log(img.previousElementSibling);
img.previousElementSibling.style.color = "skyblue";
img.previousElementSibling.style.backgroundColor = "black";

//Adding Elements:- append, appendChils, prepend, insertAdjancent(where,elemen)


let newP = document.createElement('p'); 
newP.innerText = "Hi, I am a new P";

let body = document.querySelector("body");

box.appendChild(newP);
// newP.style.backgroundColor = "lightgray";

let btn = document.createElement("button");
btn.innerText = "Click Me";
box.appendChild(btn);
newP.append(" This is new text")
newP.append(btn);
newP.prepend("This is new prepend text. ");

let btn1 = document.createElement("button");
btn1.innerText = "New  Button!!!";

p = document.querySelector("p");
// p.insertAdjacentElement("beforebegin", btn1);
p.insertAdjacentElement("beforeend", btn1);
// p.insertAdjacentElement("afterend", btn1);

p.removeChild(btn1);
p.remove(); //another function to remove things

