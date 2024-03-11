let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

let singlePageHeight = screenHeight/5;

let headerEle = document.getElementById("header");

let doctorImageBlockEle = document.getElementById("doctorImageBlock");

screenHeight = screenHeight - 30;
screenWidth = screenWidth - 30;

let firstPageEle = document.getElementById("firstPage");

let menuButton1Ele = document.getElementById("menuButton1");
let menuButton2Ele = document.getElementById("menuButton2");
let menuButton3Ele = document.getElementById("menuButton3");
let menuButton4Ele = document.getElementById("menuButton4");

let secondPagePEle = document.getElementById("secondPageP");

let cardsDivEle = document.getElementById("cardsDiv");

let card1Ele = document.getElementById("card1");
let card2Ele = document.getElementById("card2");
let card3Ele = document.getElementById("card3");

let card1ImgEle = document.getElementById("card1Img");
let card2ImgEle = document.getElementById("card2Img");
let card3ImgEle = document.getElementById("card3Img");

firstPageEle.style.height = screenHeight + "px";
firstPageEle.style.width = screenWidth + "px";

headerEle.style.width = (screenWidth - 5) + "px";

doctorImageBlockEle.style.width = (screenWidth - 800 - 50) + "px";

secondPagePEle.style.left = (screenWidth - 100 - 400) + "px";

cardsDivEle.style.width = (screenWidth - 200) + "px";

card1Ele.style.width = (screenWidth - 200-60)/3 + "px";
card2Ele.style.width = (screenWidth - 200-60)/3 + "px";
card3Ele.style.width = (screenWidth - 200-60)/3 + "px";

card1ImgEle.style.width = ((screenWidth - 200-60)/3) - 30 + "px";
card2ImgEle.style.width = ((screenWidth - 200-60)/3) - 30 + "px";
card3ImgEle.style.width = ((screenWidth - 200-60)/3) - 30 + "px";

window.addEventListener("scroll",function() {
    if(this.window.scrollY != 0) {
        headerEle.classList.add("back-toggle-header");
    }
    else  {
        headerEle.classList.remove("back-toggle-header");
    }
});

window.addEventListener("scroll",function() {
    if(this.window.scrollY === (singlePageHeight)) {
        console.log("Hi");
        menuButton1Ele.classList.remove("menu-options-toggle");
        menuButton2Ele.classList.add("menu-options-toggle");
        menuButton3Ele.classList.add("menu-options-toggle");
        menuButton4Ele.classList.add("menu-options-toggle");
    }
    else if(this.window.scrollY === (singlePageHeight)*2) {
        menuButton1Ele.classList.add("menu-options-toggle");
        menuButton2Ele.classList.remove("menu-options-toggle");
        menuButton3Ele.classList.add("menu-options-toggle");
        menuButton4Ele.classList.add("menu-options-toggle");
    }
    else if(this.window.scrollY === (singlePageHeight)*3) {
        menuButton1Ele.classList.add("menu-options-toggle");
        menuButton2Ele.classList.add("menu-options-toggle");
        menuButton3Ele.classList.remove("menu-options-toggle");
        menuButton4Ele.classList.add("menu-options-toggle");
    }
    else if(this.window.scrollY === (singlePageHeight)*5) {
        menuButton1Ele.classList.add("menu-options-toggle");
        menuButton2Ele.classList.add("menu-options-toggle");
        menuButton3Ele.classList.add("menu-options-toggle");
        menuButton4Ele.classList.remove("menu-options-toggle");
    }
});

let smMenuEle = document.getElementById("smMenu");
let smMenuIconEle = document.getElementById("smMenuIcon");
let smMenuCrossIconEle  = document.getElementById("smMenuCrossIcon");

let smAboutUsEle = document.getElementById("smAboutUs");
let smHowItWorksEle = document.getElementById("smHowItWorks");
let smDoctorsEle = document.getElementById("smDoctors");
let smContactUsEle = document.getElementById("smContactUs");

smMenuIconEle.addEventListener("click",function(){
    smMenuEle.style.display = "block";
});

smMenuCrossIconEle.addEventListener("click",function(){
    smMenuEle.style.display = "none";
});

smAboutUsEle.addEventListener("click",function(){
    smMenuEle.style.display = "none";
});

smHowItWorksEle.addEventListener("click",function(){
    smMenuEle.style.display = "none";
});

smDoctorsEle.addEventListener("click",function(){
    smMenuEle.style.display = "none";
});

smContactUsEle.addEventListener("click",function(){
    smMenuEle.style.display = "none";
});