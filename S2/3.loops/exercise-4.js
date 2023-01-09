const toys = [
    {id: 40, name: 'El gato con Guantes'},
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 40, name: 'El gato felix'},
    {id: 23, name: 'Barbie Man'}

];

for (const toy of toys) {
    if (toy.name.includes("gato")) {
      const index = toys.indexOf(toy);
      toys.splice(index, 1);
    }
  }

    console.log(toys);