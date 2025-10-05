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

