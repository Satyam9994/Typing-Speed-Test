const paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a versatile programming language.",
  "Practice makes perfect, keep coding every day.",
  "Typing fast is a skill that improves with time."
];

const quoteDisplay = document.querySelector(".display-text");
const quoteInput = document.querySelector(".text-area");
const result = document.querySelector(".result");
const startBtn = document.querySelector("button");

let startTime;
let timerRunning = false;

// Step 1: Render New Quote
function renderNewQuote() {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  quoteDisplay.textContent = paragraphs[randomIndex];
  quoteInput.value = "";
  result.innerHTML = "";
  timerRunning = false;
};

// Step 2: Typing Detection + Timer + WPM
quoteInput.addEventListener("input", () => {
  if (!timerRunning) {
    startTime = new Date();
    timerRunning = true;
  }

  const typedText = quoteInput.value;
  const originalText = quoteDisplay.innerText;

  if (typedText === originalText) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;

    const wordCount = originalText.split(" ").length;
    const wpm = Math.round((wordCount / timeTaken) * 60);

    // Optional accuracy calculation
    const correctChars = [...typedText].filter((ch, i) => ch === originalText[i]).length;
    const accuracy = Math.round((correctChars / originalText.length) * 100);

    result.innerHTML = `
      ✅ <strong>Completed!</strong><br>
      ⏱ Time: ${timeTaken.toFixed(2)} seconds<br>
      💨 WPM: ${wpm}<br>
      🎯 Accuracy: ${accuracy}%
    `;

    timerRunning = false;
  }
});

startBtn.addEventListener("click", renderNewQuote)