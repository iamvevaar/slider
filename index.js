console.log("hellooo saaab");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
let length = images.length;


for(let i=0 ; i<length ; i++){
    const circle = document.createElement("div");
    circle.className = "button";
    bottom.appendChild(circle);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBG = () => {
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent";
    })
}

buttons.forEach((button , i )=>{
    button.addEventListener("click" ,()=>{
        resetBG();
        slider.style.transform = `translateX(-${i * 800}px)`
        slideNumber = i+1;
        button.style.backgroundColor = "white";
    })
})



const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}

const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`;
    slideNumber--;
}

const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
}
console.log(length);

const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

right.addEventListener("click" , ()=>{
    slideNumber>=images.length ?  getFirstSlide() : nextSlide();
    resetBG();
    buttons[slideNumber - 1].style.backgroundColor="white";
})

left.addEventListener("click" , ()=>{
    slideNumber > 1 ? prevSlide() : getLastSlide();
    resetBG();
    buttons[slideNumber - 1].style.backgroundColor="white";
})

setInterval(() => {
    slideNumber>=images.length ?  getFirstSlide() : nextSlide();
    resetBG();
    buttons[slideNumber - 1].style.backgroundColor="white";
},2500);

