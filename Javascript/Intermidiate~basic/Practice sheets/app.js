/*Qsl. Create a new input and button element on the page using JavaScript only. Set the
text of button to "Click me'

Qs2. Add following attributes to the element :
Change placeholder value of input to "username"
Change the id of button to "btn'

Qs3. Access the btn using the querySelector and button id. Change the button background
color to blue and text color to white.

Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
Change its color to purple.

Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
where Delta is bold. */

let input = document.createElement("input");
document.body.appendChild(input);
input.placeholder = "username";

let btn = document.createElement("button");
document.body.appendChild(btn);
btn.innerText = "Click Me!";


btn.id = "btn";
console.dir(btn.id);


let btn1 = document.querySelector("#btn");
btn1.style.backgroundColor = "blue";
btn1.style.color = "white";


let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
document.body.prepend(heading);
heading.style.color = "purple";


let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice"
document.body.append(para);



/*Qs1. Try out the following events in Event Listener on your own :
- mouseout
- keypress
- Scroll
- load
[Use MDN for help]

Qs2. Create a button on the page using JavaScript. Add an event listener to the button
that changes the button’s color to green when it is clicked.

Qs3. Create an input element on the page with a placeholder ”enter your name” and an
H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s name so it should only input
letters from a-z, A-Z and space (all other characters should not be detected).
Whenever the user inputs their name, their input should be dynamically visible inside
the heading.
[Please note that no other character apart from the allowed characters should be
visible in the heading] */


let box = document.querySelector(".box");
document.body.appendChild(box);

box.addEventListener("mouseout",function(){
    console.log("something is happened");
});

input.addEventListener("keypress",function(){
    console.log("clicked");
});


//This will smoothly scroll the box element to the top and left coordinates (100, 150) over a short period of time.
el = document.querySelector(".para");
document.body.appendChild(el);

window.addEventListener("scroll", function(){
    console.log("moved by 1 px");
});
window.addEventListener("load", function(){
    box.style.backgroundColor = "cyan";   //triggers when everything is loaded!
});

let but = document.createElement("button")
but.innerText = "☆*: .｡. o(≧▽≦)o .｡.:*☆"
box.parentNode.insertBefore(but, box.nextSibling);

but.addEventListener("click", function(){
    but.style.backgroundColor = "pink"
});

let lover = document.querySelector(".together1");
let lover2 = document.querySelector(".together2");
document.body.append(lover);
document.body.append(lover2);

lover2.addEventListener("input", function(){
    let text = lover2.value;
    text = text.replace(/[^a-zA-Z\s]/g, '');
    lover.innerText = text;
});

