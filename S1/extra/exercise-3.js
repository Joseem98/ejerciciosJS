const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}
];

const small = [];
const med = [];
const big = [];


for (let i = 0; i < movies.length; i++) {
    const eachMovie = movies[i];
    if (eachMovie.durationInMinutes > 200){
        big.push(movies[i]);

    } else if (eachMovie.durationInMinutes < 100) {
        small.push(movies[i]);

    } else {
        med.push(movies[i]);

    }
    
}

console.log("SMALL", small);
console.log("MEDIUM", med);
console.log("BIG", big);

