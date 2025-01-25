const wordDisplay = document.querySelector('.word-display');
const keyboardDiv = document.querySelector('.keyboard');
const guessText = document.querySelector('.guess-text');
const HangmanImage = document.querySelector(".hangman-box");
const src = document.createElement('img')

let currentWord, wrongGuessCount = 0;
const maxGuesses = 6;
const getRandomWord = () =>{
    const {word , hint } = wordList[Math.floor(Math.random() * wordList.length)]
    currentWord = word;
    console.log(word, hint);
    document.querySelector('.hint-text b').innerText = hint;

    wordDisplay.innerHTML = word.split("").map(() =>`
    <li class="letter"></li>
    `).join("");
    
}

const initGame = (button,clikedLeter) =>{
    if(currentWord.includes(clikedLeter)){
        [...currentWord].forEach((letter, index) =>{
            if(letter === clikedLeter){
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    }
    else{
        wrongGuessCount++;
        
        HangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
        console.log(wrongGuessCount);
    }
    guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

}

for(let i = 97; i<= 122;i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener('click',e =>initGame(e.target, String.fromCharCode(i)))
}
getRandomWord() 