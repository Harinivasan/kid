  // Define an array of jumbled words and their correct answers
  const words = [
    { jumbled: "pelap", correct: "apple" },
    { jumbled: "tnaacnho", correct: "champion" },
    { jumbled: "sefrhi", correct: "sheriff" },
    // Add more words here
];

let currentWordIndex = 0;

const wordDisplay = document.getElementById("word");
const inputField = document.getElementById("input");
const checkButton = document.getElementById("check-btn");
const resultMessage = document.getElementById("result");
const nextButton = document.getElementById("next-btn");

// Initialize the game with the first word
displayWord();

checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextWord);

function displayWord() {
    if (currentWordIndex < words.length) {
        const jumbledWord = words[currentWordIndex].jumbled;
        wordDisplay.textContent = jumbledWord;
        inputField.value = "";
        resultMessage.textContent = "";
    } else {
        wordDisplay.textContent = "Game Over";
        inputField.disabled = true;
        checkButton.disabled = true;
        nextButton.disabled = true;
    }
}

function checkAnswer() {
    const userAnswer = inputField.value.toLowerCase();
    const correctAnswer = words[currentWordIndex].correct.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultMessage.textContent = "Correct!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Incorrect. Try again.";
        resultMessage.style.color = "red";
    }
}

function nextWord() {
    currentWordIndex++;
    displayWord();
}