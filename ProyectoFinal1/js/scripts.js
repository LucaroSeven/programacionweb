const URL_API = "https://rickandmortyapi.com/api/character/";
const arrayCharacters = [];
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
let selectedContainers =[];
let completedContainers = [];
let imageContainers = document.getElementsByClassName("image-container");
let canClick = true;
let moves = 0;
const scoreText = document.querySelector('.info-moves');
const actionText = document.querySelector('.info-action')

//Parametros
let timeToRembember = 1000;

document.addEventListener("DOMContentLoaded", (e) => {


	const modalResult = document.getElementById("modal-result");
	const spanCloseResult = document.querySelector(`#modal-result .close`);
	spanCloseResult.onclick = function () {
		modalResult.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modalResult) {
			modalResult.style.display = "none";
		}
	};
});

init();
async function init() {
    moves = 0;
    setMoves();
    actionText.innerHTML = "Click a card"
    selectedContainers =[];
    completedContainers = [];
    arrayCharacters.length = 0;

	const response = await fetch(`${URL_API}`);
    const characters = await response.json();
    console.log(characters);


    for (let x = 0; x < 8; x++) {
        arrayCharacters.push(characters.results[x]);
        arrayCharacters.push(characters.results[x]);
    }
    
    arrayCharacters.sort(() => Math.random() - 0.5);

    for (let x = 0; x < imageContainers.length; x++) {
        imageContainers[x].innerHTML = ``;
    }

}

async function userClick(number){
    if(!canClick) return;
    
    if(isGameOver()) return;
    
    //Verifica si la tarjeta ya esta completada
    for (let index = 0; index < completedContainers.length; index++) {
        const element = completedContainers[index];
        if(element.dataset.key == imageContainers[number].dataset.key){
            actionText.innerHTML = "Choose another";
            return;
        }
    }

    //Se agrega la primera tarjeta seleccionada
    if (selectedContainers.length == 0) {
        selectedContainers.push(imageContainers[number]);
        selectedContainers[0].innerHTML = `<img src="${arrayCharacters[number].image}" >`
        return;
    }

    //Verifica que no se seleccione la misma tarjeta
    if(selectedContainers[0].dataset.key == imageContainers[number].dataset.key){
        actionText.innerHTML = "Choose another card";
        return;
    }
    canClick = false;
    selectedContainers.push(imageContainers[number]);
    selectedContainers[1].innerHTML = `<img src="${arrayCharacters[number].image}" >`
    doMatch();
    if(isGameOver()) return;
}

async function doMatch(){
    moves++;
    setMoves();
    if(arrayCharacters[selectedContainers[0].dataset.key].id == arrayCharacters[selectedContainers[1].dataset.key].id){
        actionText.innerHTML = "Match!";
        completedContainers.push(selectedContainers.pop());
        completedContainers.push(selectedContainers.pop());
        canClick = true;
        return true;
    }
    actionText.innerHTML = "Not Match";
    await sleep(timeToRembember);
    selectedContainers.pop().innerHTML = ``;
    selectedContainers.pop().innerHTML = ``;
    canClick = true;
    return false;
}

function setMoves() {
	scoreText.innerHTML = `Moves: ${moves}`;
}

function isGameOver(){
    if(completedContainers.length==16){
        actionText.innerHTML = "Game over";
        showGameOverModal();
        return true
    }
    return false;
}

function showGameOverModal() {
	// setScore(0);
	// setInstruction('');

	const modal = document.getElementById('modal-result');
	const resultText = document.querySelector(`#result-text`);
	resultText.innerHTML = `Game Over! Moves: ${moves}`;
	modal.style.display = 'block';
}