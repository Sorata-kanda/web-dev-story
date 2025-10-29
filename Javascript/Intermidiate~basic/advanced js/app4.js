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

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//     }
//     catch(err){
//         console.log(err);
//     }
      
// }

// getFacts();



//axios library (to use it I add a CDN link in the html file)

let url = "https://catfact.ninja/fact";


let btn = document.querySelector("button");
btn.addEventListener("click", async () =>{
    let factt = await getFacts();
    console.log(factt);

    let para = document.querySelector("#fact");
    para.innerText = factt;
});
async function getFacts(){  
    try{
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;
    }catch(e){
        console.log(e);
        return "No fact found!";
    }
}


let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#dogie");
btn2.addEventListener("click" , async ()=>{
    let result = await dogImg();
    let img = document.querySelector("#imgOfDog");
    img.setAttribute("src",result);
    // img.src = result;

})

async function dogImg(){
    try{
        let res = await axios.get(url2);
        console.log(res.data.message);
        return res.data.message;

    }catch(er){
        console.log(er);
        return "nothing found"
    }
}

//playing with headers
const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url3,config);
        console.log(res.data);
        
    }catch(err){
        console.log(err);
    }
}
//call getJokes() to get output;

//Updating query string:-

let url4 = "http://universities.hipolabs.com/search?name=";
let btn3 = document.querySelector("#btnn");
btn3.addEventListener("click", async () => {
    console.log("button was clicked");
    let country = document.querySelector("input").value;
    console.log("country name: ",country);
    

    let colArr = await getColleges(country);
    console.log(colArr);
    show(colArr);
})

function show(colArr){
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);

    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url4 + country);
        // console.log(res.data);
        return res.data;
          
    }catch(er){
        console.log(er);
    }
}
getColleges();