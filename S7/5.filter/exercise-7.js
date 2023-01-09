const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const input = document.getElementById("input-id");

input.addEventListener("input", () => {
    const inputValue = input.value;
    const filtroStreamer = streamers.filter(streamer => streamer.name.includes(inputValue));
    console.log(filtroStreamer);
})



// const inputHtml = document.getElementById("input-id");
// inputHtml.addEventListener("input", function () {
//     console.log(inputFilter);
// })

// const inputFilter = streamers.filter(streamer => streamer.includes(inputHtml));
