const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    numbersList.push(callback(a, b));
}

father(1, 2, sum);
father(6, 1, substract);
father(2, 8, sum);

console.log(numbersList);