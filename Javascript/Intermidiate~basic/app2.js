// let btns = document.querySelectorAll("button");
// // btn.onclick = function(){
// //     console.log("Button wwas clicked");
// // };

// function sayHello (){
//     console.log("Hello!");
// }
// for(btn of btns){
//     btn.onclick = sayHello; //we shouldn't use parathesis after the funciton name
// }

// btn.onmouseenter = function(){console.log("you entered a button");};


//Event listners

// function listening(){console.log("Event listner")};
// for(btn1 of btns){
//     btn1.addEventListener("click", listening);
// }

let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("Para was clicked");
});

let div = document.querySelector("div");
div.addEventListener("mouseenter",function(){
    console.log("This box is clicked");
});


//Use of this:-

let btn2 = document.querySelector("#btn1");

btn2.addEventListener("click",function(){
    console.log(this.innerText); //This refers to the same button we are using here
});


//Keyboard Events
btn2.addEventListener("click",function(event){
    console.log(event); 
});

let input = document.querySelector("input");
input.addEventListener("keyup", function(event){
    console.log("key was pressed");
    console.log(event.key);
    console.log(event.code);
})



//form events

let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault(); //This will stop us from getting to another page
    console.log("Form was submitted");
});


//Extrating from Data

let form1 = document.querySelector("#form1");
form1.addEventListener("submit", function(event){
    event.preventDefault();
    // let un = document.querySelector("#username").value; 
    // let pas = document.querySelector("#password").value;
    // console.log(un);
    // console.log(pas);

    //instead of writing that whole code we can also write this:-
    console.log(this.elements[0].value);
    console.log(this.elements[1].value);
})

//change event

let pas = document.querySelector("#password");

pas.addEventListener("change", function(){
    console.log("change event");
    console.log(pas.value);
});

pas.addEventListener("input", function(){
    console.log("input event");
    console.log(pas.value);
});


//small activity
let para1 = document.querySelector("#para1");
let inp1 = document.querySelector("#copier");


inp1.addEventListener("input",function(){
    para1.innerText = inp1.value;
})

