//-----------------selecting Elements

let imgObj = document.getElementById("mainImg");
// imgObj.src = "assests/photo-1635805737707-575885ab0820.jpeg";
console.log(imgObj);

// document.getElementById("description");
console.dir(document.getElementById("description"));



//------------getelementbyClass

// console.dir(document.getElementsByClassName("oldImg"));

let smallImages = document.getElementsByClassName("oldImg");
for(let i=0; i<smallImages.length; i++){
    smallImages[i].src = "assests/photo-1635805737707-575885ab0820.jpeg"
    console.log(`value of small image no. ${i} is changed`);
    // console.dir(smallImages[i].src);
}

