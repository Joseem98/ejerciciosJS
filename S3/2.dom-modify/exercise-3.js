// const parrafo$$ = document.createElement("p");

// const myDiv$$ = document.createElement("div");

// myDiv$$.className = "div1";

// myDiv$$.appendChild(parrafo$$);



const myDiv$$ = document.createElement("div");

myDiv$$.id = "container";

document.body.appendChild(myDiv$$);

const container = document.getElementById("container");

for (let i = 0; i <= 6; i++) {
    const p = document.createElement("p");
    p.textContent = "Parrafo " + (i + 1);
    container.appendChild(p);

}