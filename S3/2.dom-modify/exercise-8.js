
const firstDiv = document.querySelector("div:first-of-type");

const newParagraph = document.createElement("p");

newParagraph.textContent = "Voy en medio!";

const secondDiv = document.querySelector("div:last-of-type");

secondDiv.insertBefore(newParagraph, secondDiv);

