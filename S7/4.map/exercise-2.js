const users = [
{id: 1, name: 'Abel'}, 
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'}, 
{id:4, name: 'Amanda'}
];

const names = users.map(user => {
    let name = user.name;
    if (name[0] === "A") {
    name = "Anacleto";
}

console.log(name);

});