const btn = document.getElementById("btnToClick");

btn.onclick = muestraAlerta;

function muestraAlerta (evento) {
    console.log("Onclick ejecutado!");
}