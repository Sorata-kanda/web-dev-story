// JSON -> Js objects

// let jsonRes = 
// '{"fact":"The first true cats came into existence about 12 million years ago and were the Proailurus.","length":91}';

// let validRes = JSON.parse(jsonRes);
// console.log("->",validRes.fact);

// let heading = document.createElement("p");
// heading.style.fontFamily = 'cursive';
// heading.innerText = "-> "+validRes.fact;
// document.body.appendChild(heading);



// // Js object -> JSON

// let student = {
//     name: "Rahul",
//     marks: 100,
//     city: "Haryana"
// };

// let Tojson = JSON.stringify(student);
// console.log(Tojson);



// //Ajax , http verbs(Hoppscothch.io)
// //first request 

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) =>{
//     // console.log(res);
//     // res.json().then((data) => console.log(data.fact));
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 1: ",data.fact);
//     return fetch(url);
// })
// .then((res) =>{
//     return res.json();
// })
// .then((data2) =>{
//     console.log("Data 2: ",data2.fact);
// })
// .catch((error) => {
//     console.log(error);
// })


//async and await function with fetch (commenting all the upper code)

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

    }
    catch(err){
        console.log(err);
    }
      
}

getFacts();