let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guess-field");
const guessSubmit = document.querySelector(".guess-submit");

let guessCount = 1;
let resetButton;


function checkGuess(){
    const userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = "Previous guess : ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(randomNumber === userGuess){
        lastResult.textContent = "Congratulation! You Right!"
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if(guessCount === 15){
        lastResult.textContent = "!!!GAME OVER!!!";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was to low";
        } else if (userGuess > randomNumber){
            lowOrHi.textContent = "Last guess was to high";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start New Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for(const x of resetParas){
        x.textContent = "";
    }

    lastResult.style.backgroundColor = "white";
    guessField.disabled = false;
    guessSubmit.disabled = false;
    
    resetButton.parentNode.removeChild(resetButton);

    randomNumber = Math.floor(Math.random()*200) + 1;
}

guessSubmit.addEventListener("click",checkGuess);
guessField.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        guessSubmit.click();
    }
});