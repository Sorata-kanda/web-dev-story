const students = {
    name : "Rahul",
    age : 20,
    marks : 94.4,
    city : "Delhi"
}

console.log(students);

const items = {
    price : 100.99,
    discount : 50,
    colors : ["red", "blue", "green"],
    student : {
        name : "Rahul",
        age : 20,
        marks : 94.4,
        city : "Delhi"
    }
}

console.log(items);

//creating a thread/twitter post object

const post = {
    username : "@shirou_neko",
    content : "This is my first tweet",
    likes : 100,
    repost : 50,
    tags : ["@cat", "@neko"]
}
console.log(post);

//2 ways to access the values
console.log(post["username"]);
console.log(post.username);

console.log(post["likes"]);
console.log(post.likes);

let val = "likes";
console.log(post[val]);
// console.log(post.val);  // we can't use this now here...


//js converts all things inside the object into a string

let obj = {
    1 : "Rahul",
    2 : 20,
    null : 94.4,
    undefined : "Delhi"
};
console.log(obj);
console.log(obj[1]); // This 1 here is not index, js converts this to string then ceck inside the object

//also
// console.log(obj.1); //This will not work, dot methos doesn't change teh int to string;



//--------------------Changing the object values:-

const student = {
    name : "shirou",
    age : 23,
    marks : 94.4,
    city : "Delhi"
};
console.log(student);
student.city = "Haryana";
student.gender = "Male";
console.log(student);

delete student.marks;
console.log(student);

//object of objects

const classInfo = {
    Rahul : {
        grade : "D",
        city : "Haryana"
    },

    Shirou : {
        grade : "SSS",
        city : "Universal"
    }
};

console.log(classInfo);
console.log(classInfo.Shirou.city);

//Same logic with array

const class_info = [
    {
        name : "Rahul",
        grade : "F"
    },

    {
        name: "Shirou",
        grade: "SSS"  
    }
];

console.log(class_info);
console.log(class_info[1].grade);


//Math objects

console.log(Math);

console.log(Math.abs(-10)); //ablolute value give postive value
console.log(Math.max(10, 5, 8, 2, 6, 9, 1));
console.log(Math.min(10, 5, 8, 2, 6, 9, 1));
console.log(Math.floor(3.9)); // this will round off to the nearest lowest whole number
console.log(Math.ceil(3.1)); // this will round off to the nearest highest whole number

console.log(Math.random()); //random number between 0 and 1 & 1 is exclusive

//Random number generator

let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log(step3);



// question :- generate a random number between 1 and 100

let s1 = Math.random();
let s2 = s1 * 100;
let s3 = Math.floor(s2);
let s4 = s3 +1;
console.log(s4);


//making a guessting game


// let max = parseInt(prompt("Enter the max range: "));

// while(true){
    
//     let gamer = Math.floor(Math.random() * max + 1);
//     console.log(`machine guess: ${gamer}\nNote: you can press quit to exit`);
//     let guess = prompt("Enter the number between 2 to 10: ");

//     if (guess == "quit") {
//         alert("Game over. Exiting the game...");
//         break;
//     }
//     else if(parseInt(guess) == gamer){
//         alert("Congrats, you win!\nExiting the game now...");
//         break;

//     } else{
        
//         alert("Try Again: ");
//     }
// }


//----------------------------Part - 6-----------
//functions:-

function fun(){
    console.log("hello, this is a function");
}

fun();

function printer(){
    for(let i=1; i<=5 ; i++){
        console.log(i);
    }
}
printer();

function isAdult(){
    let age = 18;
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Not Adult");
    }
}

isAdult();


function Print(){
    console.log("Twinkle Twinkle little star\nhow i wonder what you are?")
}

Print();

//quest :- make a funciton of dice roller:-


function dice(){
    let random = Math.floor(Math.random()*6 + 1);
    let roll = prompt("Type 'quit' to quit rolling\nType 'roll' to roll the dice\nRoll the dice: ");
    while(true){
        if(roll == "roll"){
            alert(`Number is: ${random}`);
            roll = prompt("Type 'quit' to quit rolling\nType 'roll' to roll the dice\nRoll the dice: ");
            random = Math.floor(Math.random() * 6 + 1);

        }
        else if(roll == "quit"){
            alert("quited dice rolling succesfully");
            break;
        }
        else{
            alert("Enter value is not valid\nPlease try again:");
            roll = prompt("Type 'quit' to quit rolling\nType 'roll' to roll the dice\nRoll the dice: ");

        }
    }
}
dice();

