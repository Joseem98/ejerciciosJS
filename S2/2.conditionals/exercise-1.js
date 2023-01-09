const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let isApproved = true;


for (let i = 0; i < alumns.length; i++) {
    const aprobado = alumns[i];
    

    if (aprobado.T1 === true && aprobado.T2 === true) {
        isApproved = true;

    } else 
    isApproved = false;

    
    if (aprobado.T2 === true && aprobado.T3 === true) {
        isApproved = true;

    } else 
        isApproved = false;
    
    if (aprobado.T1 === true && aprobado.T3 === true) {
        isApproved = true;
    
    } else 
    isApproved = false;
        
    console.log((alumns[i].name), ", ¿ha aprobado dos trimestres?", (isApproved))

}

