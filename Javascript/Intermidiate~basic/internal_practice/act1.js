let btn = document.querySelector("button");
let box = document.querySelector("div");
let heading = document.querySelector("h1");


function changer(){
    let red = Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
};


btn.addEventListener("click",function(){
    console.log("Generate random color");
    let random = changer();
    heading.innerText = random;

    box.style.backgroundColor = random;

    
});

