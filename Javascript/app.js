// console.log("hello world");
// console.log("Shirou neko");

let a = 10;
let b = 5;
console.log("sum is: ", a + b);


let pencil = 10;
let eraser = 5;
let output = "Total price: "+ (pencil + eraser) +" $"
// console.log("Total price: ", pencil + eraser+"$"); // comma (,) will give a space while plus(+) doesn't
console.log(output);
//using template litrals
console.log(`Total price by template litreal: ${pencil + eraser} ruppes`);



//Operators

//Operators arithemetic 
let  aa = 10;
let bb = 5;
console.log(a+b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

//Operators unary 
console.log("\n");
console.log(aa++);
console.log(aa--);
console.log(++aa);
console.log(++aa);


//Operators assiment

b = a; //+=, -=, /=, *=
console.log("\n");
console.log(b);


//comparison operators

let age = 18; //>= , <= , < , ==, !=
console.log(age>18);

//Important things you should know!

let str = '5';
let num = 5;
console.log(str==num); //This will just check the values
console.log(str===num); //This will check the datatype
 
console.log(0 == ' '); //This is true
console.log(null == undefined); //True
console.log(null === undefined); //False

console.log(0 == false); //True 
console.log(0 === false); //False


//comparison for non - numbers
console.log("\n");
console.log('a' < 'b');
console.log('a' < 'A'); //false //uniques value know as {unicode}
console.log('*' < '&');
console.log('*' > '&');


//conditional statments

console.log("\n");
let agee = 23;
if(agee >= 18){
    console.log("you are eligible to vote");
}else{
    console.log("you are not eligible to vote");
}


//question :- make a traffic light system

let color = "blue";

if(color == "red"){
    console.log("STOP!");
}
else if(color == "yellow"){
    console.log("You should be ready to go");
}else if(color == "green"){
    console.log("You can go!");
}else{
    console.log("NOT A VALID LIGHT");
}

//popcorn question:-
console.log("\n");
let size = "XL";

if(size === "XL"){
    console.log(`price: Rs.${250}`);
}else if(size === "L"){
    console.log(`price: Rs.${200}`);
}else if(size === "M"){
    console.log(`price: Rs.${100}`);
}else if(size === "S"){
    console.log(`price: Rs.${50}`);
}else{
    console.log(`Required packet doesn't exists`);
} 

//Logical Operators
// logical not :- !

console.log("\n");

let marks  = 33;
if(!(marks<33)){
    console.log("Congrats:- you are passed");
    console.log("Grade :- A");
}
console.log("\n");

//question :- good string or not?

let str1 = "aoai";
if((str1[0] == 'a' || str1[0] == 'A') && str1.length > 3){
    console.log("GOOD str");
}else{
    console.log("BAD str");
}


//undefined and null , false, NaNm,  "", On  values 


//swtich statment

let colour = "red";

switch(colour){
    case "red" :
        console.log("Stop");
        break;
    
    case "yellow" :
        console.log("Ready to go");
        break;

    case "green" :
        console.log("GO Go Go");
        break;

    default :
        console.log("Not a valid light");
}

console.log("\n");
//day question

let day = 4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("Not a valid day");
        break;
}

console.log("\n");
//Alerts and promts

// alert("This is a simple alert");
// console.log("This is a log msg");
// console.error("This is a error msg"); 
// console.warn("This is a error msg");


// //promts

// let named = prompt("Fill your name:- ");
// console.log(named);

// let fn = prompt("Enter first name only");
// let ln = prompt("Enter last name");
// console.log(`WELCOME: ${fn} ${ln}`);

// let msg = `WELCOME: ${fn} ${ln}`;
// alert(msg);





