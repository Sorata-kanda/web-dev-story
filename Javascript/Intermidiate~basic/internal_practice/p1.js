//Event bubbling

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){ 
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//     console.log("li was clicked");
// });
// }




//Task - 2
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");





btn.addEventListener("click", function(){
    if(inp.value === ""){
        return;
    }
    let listed = document.createElement("li");
    listed.innerText = inp.value;
    console.log(listed);
    ul.append(listed);

    let del = document.createElement("button");
    del.innerText = "❌";
    del.classList.add("delete");
    listed.appendChild(del);
    del.style.marginLeft = "10rem";
    inp.value = ""

})

// let btns = document.querySelectorAll(".delete");
// for(delbtn of btns){
//     delbtn.addEventListener("click", function(){
//         console.log("DELTEED");
//         let parent = this.parentElement;
//         parent.remove();
//     });
// }

ul.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        let parent = event.target.parentElement;
        parent.remove();
        
    }
    // console.log(event.target);
    // console.log(event.target.nodename);
    

});