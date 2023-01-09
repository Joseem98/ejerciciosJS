const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input = document.getElementById("input-id");
const button = document.getElementById("btn");

button.addEventListener('click', () => {
    const inputValue = input.value;
    const filtroStreamer = streamers.filter(streamer => streamer.name.includes(inputValue));
    console.log(filtroStreamer);
});
