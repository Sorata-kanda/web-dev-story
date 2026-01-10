// let task = document.querySelector("input");
let input = document.querySelector("input[type='text']");
let ul = document.querySelector("ul");
let btn = document.querySelector(".add");
let deleter = document.querySelector(".del");
function createTask(text){
    const taskDiv = document.createElement('div');
    taskDiv.className = 'lists';

    const createcheckbox = document.createElement('input');
    createcheckbox.type = 'checkbox';

    const li = document.createElement('li');
    li.textContent = text;

    createcheckbox.className = "myCheckbox";
    taskDiv.appendChild(createcheckbox);
    taskDiv.appendChild(li);
    ul.appendChild(taskDiv);
}
btn.addEventListener("click", function(){
    const tasktext = input.value;
    if(tasktext === ""){
        alert("Please enter a task");
        return;
    }
    createTask(tasktext);
    input.value = "";
})

input.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        const tasktext = input.value;
        if(tasktext === ""){
            alert("Enter something");
            return;
        }
        createTask(tasktext);
        input.value = "";
    }
})



deleter.addEventListener("click", ()=>{
    console.log("del button clicked");
    const box = document.querySelectorAll(".myCheckbox");
    box.forEach((box) => {
        if(box.checked){
        box.parentElement.remove();
    }
    });
});

document.addEventListener("keydown", (event)=>{
    if(event.key === "Delete"){
        deleter.click();
    }
});

ul.addEventListener("click", (event)=>{
    const clickedDiv = event.target.closest(".lists");  
    
    if(clickedDiv){
        const checkbox = clickedDiv.querySelector(".myCheckbox");
        checkbox.checked = !checkbox.checked;
    }
});

