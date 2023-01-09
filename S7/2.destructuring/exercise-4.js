const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;

const {itv: [year1, year2, year3]} = car;

console.log(name);
console.log(itv); 
console.log(year1); 
console.log(year2); 
console.log(year3); 