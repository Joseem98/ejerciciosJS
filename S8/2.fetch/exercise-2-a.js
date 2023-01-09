const baseUrl = 'https://api.nationalize.io?name=';

function consultar() {
  const name = document.getElementById('textInput').value;
  fetch(`${baseUrl}${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};