const v1 = document.querySelector("#projectVideo1");
const v2 = document.querySelector("#projectVideo2");
const v3 = document.querySelector("#projectVideo3");
const hoverSign = document.querySelector(".hover-sign");

const video_list = [v1,v2,v3];

video_list.forEach(function(video){
    video.addEventListener("mouseover", function(){
        video.play();
        hoverSign.classList.add("active");
    })
    video.addEventListener("mouseout", function(){
        video.pause();
        hoverSign.classList.remove("active");

    })
})