const diceOne = document.querySelector(".dice-one")
const diceTwo = document.querySelector(".dice-two")
const scoreOne = document.querySelector(".player-one-score")
const currentOne = document.querySelector(".player-one-current")
const scoreTwo = document.querySelector(".player-two-score")
const currentTwo = document.querySelector(".player-two-current")
const textP1 = document.querySelector(".text-p1")
const textP2 = document.querySelector(".text-p2")

//false = playerOne
//true = playerTwo
let playerTurn = false;
let numRandom = ()=>{
    return Math.floor(Math.random() * 6) + 1;
}

let playerOneScore = 0;
let playerTwoScore = 0;
let sumCurrent = 0;
let canClick = true;

init();
function init(){
    canClick = true;
    sumCurrent = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerTurn = false;
    textP1.classList.add("active")
    textP2.classList.remove("active")
    currentOne.innerHTML = 0;
    currentTwo.innerHTML = 0;
    scoreOne.innerHTML = 0;
    scoreTwo.innerHTML = 0;
}

function rollDice(){
    if (!canClick) return;
    num1 = numRandom();
    num2 = numRandom();

    diceOne.innerHTML = `<img src="/img/dice${num1}.png">`
    diceTwo.innerHTML = `<img src="/img/dice${num2}.png">`

    if(num1 != num2){
        if (playerTurn) {
            sumCurrent += (num1+num2);
            currentTwo.innerHTML = sumCurrent;
        }else{
            sumCurrent += (num1+num2);
            currentOne.innerHTML = sumCurrent;
        }
    }else{
        passTurn();
        alert("Cambio de turno")
    }
}

function holdCurrent(){
    if (!canClick) return;
    if(playerTurn){
        playerTwoScore += sumCurrent;
        scoreTwo.innerHTML = playerTwoScore;
        checkWinner(playerTwoScore);
    }else{
        playerOneScore += sumCurrent;
        scoreOne.innerHTML = playerOneScore;
        checkWinner(playerOneScore);
    }
    passTurn();
}

function passTurn(){
    sumCurrent = 0;
    playerTurn = !playerTurn;
    currentOne.innerHTML = 0;
    currentTwo.innerHTML = 0;
    if(playerTurn){
        textP2.classList.add("active")
        textP1.classList.remove("active")
    }else{
        textP1.classList.add("active")
        textP2.classList.remove("active")
    }
}

function checkWinner(score){
    if(score >= 100){
        if(playerTurn){
            alert("Gana el jugador 2")
        }else{
            alert("Gana el jugador 1")
        }
        canClick = false;
    }
}


