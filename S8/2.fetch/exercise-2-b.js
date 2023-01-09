const baseUrl = 'https://api.nationalize.io?name=';

function consultar() {
  const name = document.getElementById('textInput').value;
  fetch(`${baseUrl}${name}`)
    .then(response => response.json())
    .then(data => {
      const p = document.createElement('p');
      p.innerHTML = `El nombre ${name} tiene un ${data.country[1].probability} % de ser de ${data.country[0].country_id}`;
      document.body.appendChild(p);
    });
}