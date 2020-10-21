const keys = document.querySelectorAll(".key");
const keyboard = ["A","S","D","F","G","H","J","K","L"]

var soundBoom = new Audio("sounds/boom.wav")
var soundClap = new Audio("sounds/clap.wav")
var Hihat = new Audio("sounds/hihat.wav")
var soundKick = new Audio("sounds/kick.wav")
var soundOpenhat = new Audio("sounds/openhat.wav")
var soundRide = new Audio("sounds/ride.wav")
var soundSnare = new Audio("sounds/snare.wav")
var soundTink = new Audio("sounds/tink.wav")
var soundTom = new Audio("sounds/tom.wav")

keys.forEach(key =>{
    key.addEventListener('click', ()=>{
        playSound(key.id)
    })
})

document.addEventListener("keydown", e => {
    const key = e.key;
    const keyboardIndex = keyboard.indexOf(key.toUpperCase());

    if (keyboardIndex > -1) {
        playSound(keyboard[keyboardIndex])
    }
})

function playSound(key){
    //console.log("Entro playsound")
    switch (key) {
        case "A":
            soundBoom.currentTime = 0;
            soundBoom.play();
            break;
        case "S":
            soundClap.currentTime = 0;
            soundClap.play();
            break;
        case "D":
            Hihat.currentTime = 0;
            Hihat.play();
            break;
        case "F":
            soundKick.currentTime = 0;
            soundKick.play();
            break;
        case "G":
            soundOpenhat.currentTime = 0;
            soundOpenhat.play();
            break;
        case "H":
            soundRide.currentTime = 0;
            soundRide.play();
            break;
        case "J":
            soundSnare.currentTime = 0;
            soundSnare.play();
            break;
        case "K":
            soundTink.currentTime = 0;
            soundTink.play();
            break;
        case "L":
            soundTom.currentTime = 0;
            soundTom.play();
            break;
    }
    animation(key);
}

function animation(key){
    const keyA = document.getElementById(key);

    keyA.classList.add("active");
    setTimeout(() => keyA.classList.remove("active"), 100);
}