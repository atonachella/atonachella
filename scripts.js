console.log(`Basic Testing`);

//  Display your notes here

let county;

county = window.prompt("Are you a Sonoma County Resident");

console.log(county);

const audio = document.getElementById("audioclip");

audio.addEventListener('playing', (event) => {
    console.log("They clicked play!!");
});

audio.addEventListener('pause', (event) => {
    console.log("They clicked pause");
});