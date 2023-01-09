const cities = [
{isVisited:true, name: 'Tokyo'}, 
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'}, 
{isVisited:false, name: 'Seul'}
];

const citiesVisited = cities.map (city => {
    let name = city.name;
    if (city.isVisited === true) {
        name += " (Visitado)";
    }
    console.log(name);
});