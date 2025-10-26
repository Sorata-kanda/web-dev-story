// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }

// three();
// //understood the breakpoint and call stack

// let a =25;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a+b);

//let's understand more by commenting out the upper code


//------------------Callback hell

// h1 = document.querySelector('h1');
// function changeColor(color,delay,nextColor){   
//     setTimeout(() => {
//         h1.style.color = color;  
//         if (nextColor) nextColor();
//     },delay)
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,() =>{
//         changeColor("green",1000,() => {
//             changeColor("blue",1000,() => {
//                 changeColor("violet",1000,() =>{
//                     changeColor("hotpink",1000);
//                 });
//             })
//         })
//     });
// }); 

//callback nesting -> callback hell (not good though)


//----------------------promises

// function  save(data,success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//         console.log(data);
//     }else{
//         failure();
//     }
    
// }

// save("SHIROU NEKO",() => {
//     console.log("1. your data is saved");
//     save("Rahul", () => {
//             console.log("2. your data is saved");
//             save("Sorata", () => {
//                     console.log("3. your data is saved");
//                 }
//                 ,() => {
//                     console.log("3. weak connection your data is not saved");
//                 }
//             );
//         },
//         () => {
//             console.log("2. weak connection your data is not saved");
            
//         }
//     );
        
// },() => {
//     console.log("1. weak connection. your data is not saved");
   
// })


// same upper logic with promises

// function  save(data){
//     return new Promise((resolve,reject) => {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success: your data is saved");
//             console.log(data);
//         }else{
//             reject("failure: weak connection.");
//         }
//     });   
// }

// let request = save("SHIROU NEKO");
// request.then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// })

//the more corect way to write the upper step from line 102 -> 110

// save("SHIROU NEKO").then(() => {
//     console.log("promise was resolved"); 
// })
// .catch(()=>{
//     console.log("promise was rejected"); 
// })



//----------------------promises Improved version(prmoise chaining)

// save("SHIROU NEKO").then((result) => {
//         console.log("D1 saved! promise was resolved"); 
//         console.log(result);
//         return save("Rahul");
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("D2 saved");
//         return save("Sorata");
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("D3 saved");
//     })
//     .catch((error) =>{
//     console.log("Failed! promise was rejected");
//     console.log(error);

// });


//-----------------writing the same color changing code using promises

h1 = document.querySelector('h1');
function changeColor(color,delay){   
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");  
        },delay);

        // reject("Failure");
    });
}

changeColor("red",1000)
    .then(()=>{
        console.log("red completed");
        return changeColor("hotpink",1000);
    })
    .then(() => {
        console.log("hotpink completed");
        return changeColor("teal",1000);
    })
    .then(() => {
        console.log("teal completed");
        return changeColor("skyblue",1000);
    });
