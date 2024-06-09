// generate a random colour

const hex = "0123456789ABCDEF"

const randomColor = function () {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color
}
const Color= randomColor()
console.log(Color)

let intervalId;

const startChangingColor= function(){
    intervalId= setInterval(changeBgColor,1000)
    function changeBgColor(){
        document.body.style.backgroundColor= randomColor(); 
    }
}
const stopChangingColor= function(){
    clearInterval(intervalId)
    
}

document.querySelector(".start").addEventListener('click', startChangingColor);
document.querySelector(".stop").addEventListener("click", stopChangingColor);

