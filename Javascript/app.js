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





//Strings methods
// trim method :- remove whitespace from both end of strinf and return a new onw

let msg = "    h el  lo  ";
console.log(msg);
console.log(msg.trim()); //it does not affect the real value it make new value
//strings are immutable

let strsome = "Rahul jangra";
console.log(strsome);
console.log(strsome.toLowerCase());
console.log(strsome.toUpperCase());




//method areguments;

let name1 = "rahul";

console.log(name1.indexOf("ul")); //This will give the first letter of the string you are trying to find
console.log(name1.indexOf("b"));  // -1  when not found
console.log(name1.indexOf("L")); //-1 as this is case sensitve, //the string we passing is known as arguments  




//methos chaining

let msg2 =  "   helllo";
let newmsg = msg2.trim();
console.log(newmsg);
console.log("after trim: ", newmsg.toUpperCase());

let shortcut = msg2.trim().toUpperCase();
console.log(shortcut);


//slice

let ex = "ILoveCoding";
console.log(ex.slice(5));
console.log(ex.slice(1,5)); // last range is exclusive

console.log(ex.slice(-5,-2)); //-ve number will get minus from the length of the str , exmaple :- 11 - 5 = 6 , 11 - 2 = 9


//replace
console.log(ex.replace("Love", "Do")); //only repalce first occurance of that element
//repeat
console.log(ex.repeat(2)); 
let fruit = "Mango lassi sabse sasti.....\n";
console.log(fruit.repeat(5));


let space = "\n";
console.log(space.repeat(5));


//Arrays -----------------------------------------------------

let arr = ["aman", "Shradha", "Rahul"];
console.log(arr);


let nums = [2, 4, 6, 8];
console.log(nums[2]);
console.log(nums.length);
console.log(typeof(nums)); //  objects??



let info = ["aman" , 28, 89.9];
console.log(info);

let emyArr = [];
console.log(emyArr);

console.log(info[0][0]) // it will give element on 0 and it's 0th indx


//array are mutable

let fruits = ["mango", "apple", "kiwi"];
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);
fruits[11] = "papaya";
console.log(fruits); //now we have some empty indx in array


//array methods:-    push, pop, unshift, shift

let cars = ["BMW", "Toyota" , "Maruti", "Lamborgini", "Ferrari"];
console.log(cars);

cars.push("Porche");
console.log(cars);

cars.pop();
console.log(cars);

cars.shift() // delete something from start
console.log(cars);

cars.unshift("Auddi"); //add something in start
console.log(cars);


//question
let month = ["january", "july", "march", "August"];
//convert the rray to this:-   ["january", "june", "march", "August"]
// month[1] = 'june'; //mehtod: 2
month.shift();
month.shift();
month.unshift("june");
month.unshift("january");

console.log(month); 

let primary = ["red" , "green", "blue"];
console.log(primary.indexOf("blue"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("white"));

//incldues :- return true if found else flase 
console.log(primary.includes("red"));
console.log(primary.includes("green"));
console.log(primary.includes("white"));

//concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);
let arr4 = arr1.concat(arr2).reverse();
console.log(arr4);



// slice [do cahnge in a copy]

let arr5 = [1, 2, 3, 4, 5, 6];
console.log(arr5.slice(1, 4));
console.log(arr5.slice(1));
console.log(arr5.slice(-2));


//splice {do change in original array]}
// format - splice(start, deletecount, adding:- item1, item2, item3)
let colors = ["red", "green", "blue", "yellow"];
console.log(colors.splice(3));
console.log(colors);
console.log(colors.splice(0, 1, "black", "Grey"));
console.log(colors);


//sort {this conver your whole array to string then check the order , not good to use on integers}
// let arr6 = [1, 2, 3, 4, 5, 6];
// console.log(arr6.sort());
// console.log(arr6.reverse());
console.log(colors.sort());


//practice qusetion:-

let months = ['january', 'july', 'march', 'august'];
//convert to this :- ['july', 'june', 'march', 'august'] using splice
console.log(months.splice(0,2,'july','june'));
console.log(months);

let languages = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(languages.reverse());
console.log(languages.indexOf('javascript'));


//array refrences
let arrr7 = [];
let arrr = []
console.log(arrr == arrr7); // this will give false as arr sotres the address
let arr7 = [1, 2, 3];
let arr8 = arr7;
console.log(arr7);
console.log(arr8 == arr7);
console.log(`added arr 8 :- ${arr8.push('abra ka dabra')}`);
console.log(arr7);

//const :- //we can do any operations even after the making the const array but we can't change the whole array to a new array 

const arr9 = [1, 2, 3];
console.log(arr9);
arr9.push(4);
console.log(arr9);

//nested array

let arr10 = [[1,2], [3,4], [4,5]];
console.log(arr10);
console.log(arr10[0]);
console.log(arr10.length);  
console.log(arr10[0][1]);

//practice question:- creaet a nested array to show the following tic - tac - toe game

let ticTacToe = [
    ['X', null, 'O'],
    [null, 'X', null],
    ['O', null, 'X']
]
console.log(ticTacToe);

ticTacToe[0][1] = 'O';
console.log(ticTacToe);



//Practice sheet question:-

/* Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]*/

let arr11 = [7, 9, 0, -2];
let n11 = 3;
console.log(arr11.slice(0,n11));

/* Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]*/

console.log(arr11.reverse().slice(0,n11).reverse());


//Qs3. Write a JavaScript program to check whether a string is blank or not.

let string = "";
if(string  === ""){
    console.log("empty");
}else{
    console.log("string is not empty");
}

/*Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case. */

let string_arr = ['z','b','c'];
let idx = 2;
console.log(string_arr[idx].toLowerCase() === string_arr[idx]);


//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let love = "    And there is something and there is nothing ♫♫♫...  in your eyes there is a ...   "
console.log(love.trim());


//Done some practice question in chrome , so there is not much of code , on day 4


//Loops

for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log("\n");

for(let i =4 ; i >= 0; i--){
    console.log(i);
}

//pinting all odd numbers from 1 to 15
console.log("\n");

for(let i=1; i<=15; i++){
    if(i%2!=0){
        console.log(i);
    }
}

//pinting all even numbers from 1 to 15
console.log("\n");

for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("\n");

// table of user:- 

// let user_given = prompt("Enter your number");
// user_given = parseInt(user_given); //This will take int value from string if int is written in start of string!!
// for(let i=1; i<=10; i++){
//     console.log(`${user_given} x ${i} = ${user_given*i}`);
// }



//---------Nested loops---------------------
console.log("\n");
for(let i=1;i<=3; i++){
    console.log(`outer loop:- ${i}`)
    for(let j=1; j<=3;j++){
        console.log(j);
    }
}
console.log("\n");

//======while loop

let l=1;
while(l<=5){
    console.log(`While loop:- ${l}`);
        l++;
}


let u =0;
while(u<=20){
    console.log(u);
    u++;
}
console.log("\n");

//Ask user our favruite movie

// let fav = "Avatar";
// let user_guess = prompt("Enter the guess");
// console.log("press 1 to exit ,  2 to edit the movie name");

// while(user_guess!=fav){
//     if (user_guess == "1") {
//         break;
//     }
//     if(user_guess == "2"){
//         fav = prompt("Change movie name: ");
//         console.log(`"movie name change to :- ${fav}"`);
//         user_guess = prompt("Enter the guess again:- ");
//         if(user_guess == fav){
//             break;
//         }
//     }
//     alert("Wrong guess, Try again:- {Press 1 to exit}");
//     console.log("Wrong guess, Try again:- {Press 1 to exit}");
//     user_guess = prompt("Enter the guess again:- ");
    
// }
// if(user_guess == fav){
//     console.log("guess is right");
// }
// console.log("Game ended!");



//loops in arrays

let numbers = [1,2,3,4,5];
numbers.push("Fuck you");
for(let i=0; i<numbers.length; i++){
    console.log(`${i}, ${numbers[i]}`);
}
console.log("\n");

//nested array

let heros = [["Ironman", "spiderman", "Thore"], ["superman", "Batman", "Wonder woman"]];

for(let i=0;i<heros.length; i++){
    console.log(`----List #${i}`);
    for(let j=0;j<heros[i].length;j++){
        console.log(heros[i][j]);
    }
}
console.log("\n");

let students = [["aman",95], ["shradha", 94.5],["Rahul",32]];
for(let i=0; i<students.length; i++){
    console.log(`----student ❤︎${i}`);
    for(let j=0; j<students[i].length;j++){
        console.log(students[i][j]);
    }
}
console.log("\n\n");

//for of loop

for(fruit of fruits){
    console.log(fruit);
}
console.log("\n");

for(char of "Shriou Neko"){
    console.log(char);
}

//nested array by for of loop

for(list of heros){
    console.log(list);
    for(listed of list){
        console.log(listed);
    }
}


