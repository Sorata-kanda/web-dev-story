//Qs1. Write a JS program to delete all occurrences of element
//     ‘num’ in a given array.
// Example: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3 ];
let num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
    console.log(arr[i]);
}

console.log("\n");

//Qs2. Write a JS program to find the no of digits in a number.
// Example: if number = 287152, count = 6

let number = 287152;
let count =0;
for(let i=0; i<6; i++){
    let rem = number % 10;
    count ++;
    number/=10;
}
console.log(count);


//Qs3. Write a JS program to find the sum of digits in a number.
// Example: if number = 287152, sum = 25

let numm = 287152;
let sum = 0;
while(numm > 0){
    let rev = numm % 10;
    sum += rev;
    numm = Math.floor(numm / 10);
}
console.log(sum);


/*Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) 
0! Is always 1*/

let fact = 7;
let mul = 1;
for(let i=1; i<=fact; i++){
    mul *= i; 
}
console.log(mul);

//Qs5. Find the largest number in an array with only positive numbers.


let array = [1,2,3,4,44,5,5,6,7,10];
let maxi = -1;
for(let i=0; i<array.length; i++){
    if(arr[i]>maxi){
        maxi = array[i];
    }
}
console.log(maxi);


console.log("\n\nPart - 5")
//Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].



// let random = Math.floor(Math.random()*6 + 1);
// let roll = prompt("Type 'quit' to quit rolling\nType 'roll' to roll the dice\nRoll the dice: ");
// while(true){
//     if(roll == "roll"){
//         alert(`Number is: ${random}`);
//         roll = prompt("Type 'quit' to quit rolling\nType 'roll' to roll the dice\nRoll the dice: ");
//         random = Math.floor(Math.random() * 6 + 1);

//     }
//     else if(roll == "quit"){
//         alert("quited dice rolling succesfully");
//         break;
//     }
//     else{
//         alert("Enter value is not valid\nPlease try again:");
//         roll = prompt("Type 'quit' to quit rolling\nType 'roll' to roll the dice\nRoll the dice: ");

//     }
// }



//Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

let car = {
    name: "Ferrari",
    model: "F8 Tributo",
    color: "red"
}
console.log(car["name"]);


//Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

let person = {
    name : "Rahul",
    age : "18",
    city : "Hisar",
}
person.city = "New York"
person.county = "United States";

console.log(person);




//-----------------Part - 6

//Qs1. Write a JavaScript function that returns array elements larger than a number

function returner(strr){
    console.log(strr);
}

let str = "alkkkssasaswoiiiiasdsss";
returner(str);

// Qs2.Write a JavaScript function to extract unique characters from a string.
//     Example: str = “abcdabcdefgggh” ans = “abcdefgh”

function deleteer(str){
    let str1 = "";
    for(let i=0; i<str.length; i++){
        if(str[i]!=str[i+1])
        str1 += str[i];
    }
    console.log(str1);
}
let str2 = "Rahulll"
deleteer(str);


//Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
//     Example : country = ["Australia", "Germany", "United States of America"] output:
// "United States of America"


function longer(country){
    let bigger = "";
    for(let i=0;i<country.length; i++){
        
            if(country[i].length > bigger.length){
                bigger = country[i];
            }            

    }
    console.log(bigger);

}
let country = ["Australia", "Germany", "United States of America"];

longer(country);


//Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.

stringg = "Rahul";
let counter = 0;
for(let i=0; i<stringg.length; i++){
    let char = stringg[i].toLowerCase();
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        counter++;
    }
}
console.log(counter);


//Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).\

function randomiser(start,end){
    let diff = end - start;
    let ran = Math.floor(Math.random() * diff ) + start;
    return ran;
}

let start = 10;
let end = 30;
console.log(randomiser(start,end));


console.log("\n\n");


//------------------Part -7
try{

    //Qs1. Write a arrrow function name arrayAverage that accepts and 
    //array fo number and returns the average of those numbers.
    let arr1 = [90,18];
    let arrayAverage = (arr) =>{
        let count = 0;
        let sum =0;
        for(let i=0; i<arr.length;i++){
            count++;
            sum += arr[i];
        }
        console.log(`sum ${sum} and count ${count}`);
        let avg = sum/count;
        return avg;
    }

    console.log(arrayAverage(arr1));


    // Qs2. Write an arrow function named isEven() that takes a single number as argument
    // and returns if it is even or not.

    let num = 40;
    let Even = (n) =>{
        if(n%2==0){
            return(`The number ${n} is EVEN!!!`);
        }else{
            return(`The number ${n} is NOT EVEN!!!`);
        }
    }

    console.log(Even(num));


    // Qs3. What is the output of the following code :
    const object = {
        message: 'Hello, World! ',
        logMessage () {
            console.log (this.message);
        }
    };
    setTimeout(object.logMessage, 1000);

    // Qs4. What is the output of the following code :

    let length = 4;
    function callback(){
        console.log(this.length);
    }
    const obj = {
        length: 5,
        method(callbac){
            callback(123);
        },
    };

    console.log(obj.method(123));






}catch(err){
    console.log("We got fucked");
    console.log("Error is below");
    console.log("\n");
    console.log(err);

}