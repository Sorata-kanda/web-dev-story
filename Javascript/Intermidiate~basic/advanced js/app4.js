// JSON -> Js objects

let jsonRes = 
'{"fact":"The first true cats came into existence about 12 million years ago and were the Proailurus.","length":91}';

let validRes = JSON.parse(jsonRes);
console.log("->",validRes.fact);

let heading = document.createElement("p");
heading.style.fontFamily = 'cursive';
heading.innerText = "-> "+validRes.fact;
document.body.appendChild(heading);



// Js object -> JSON

let student = {
    name: "Rahul",
    marks: 100,
    city: "Haryana"
};

let Tojson = JSON.stringify(student);
console.log(Tojson);