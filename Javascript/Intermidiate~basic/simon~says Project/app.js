let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red", "purple" , "green"];

let started = false;
let level = 0;
let heading = document.querySelector("h2");
let high = -1;
let scored = document.querySelector(".high");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;
        
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    if(high < level){
        high = level;
    }
    heading.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor); 
    console.log(gameSeq);
    
    btnflash(randbtn);

}

function checker(idx){
    console.log(`curr level: ${level}`);
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        console.log("same value");
        let aud = new Audio();
        aud.src = "./assests/mixkit-modern-click-box-check-1120.mp3";
        aud.play();
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        heading.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.body.style.backgroundColor = "red";
        let audio = new Audio();
        audio.src = "./assests/mixkit-click-error-1110.mp3";
        audio.play();
        setTimeout(function(){
            document.body.style.backgroundColor = "white";
        },150);
        scored.innerText = `Highest Score: ${high}`;
        reset();
    }
}

function btnPress(){
    // console.log("btn was pressed");
    let btn = this;
    userflash(btn);
    let color = btn.getAttribute("id");
    userSeq.push(color);
    console.log(userSeq);
    console.log(color);
    
    checker(userSeq.length-1);
    

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}
