const nameInput = document.getElementById("nameInput");
const nameOutput = document.getElementById("nameOutput");
const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");


const quotes = [
  "Small progress each day adds up to big results.",
  "Believe you can and you’re halfway there.",
  "Push yourself, because no one else is going to do it for you.",
];


nameInput.addEventListener("input", () => {
  nameOutput.textContent = "Hello, " + nameInput.value;
});


quoteBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteOutput.textContent = quotes[randomIndex];
});