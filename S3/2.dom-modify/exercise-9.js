const elementos = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < elementos.length; i++) {
    const p = document.createElement("p");
    p.textContent = "Voy dentro!";
    elementos[i].appendChild(p);
}