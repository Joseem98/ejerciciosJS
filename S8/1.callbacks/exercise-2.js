const userAnswers = [];

function confirmExample(description) {
  return confirm(description);
}

function promptExample(description) {
  return prompt(description);
}

function father(description, callback) {
  const result = callback(description);
  userAnswers.push(result);
}

father('¿Estás seguro de continuar?', confirmExample);
father('Introduce tu nombre:', promptExample);

console.log(userAnswers);