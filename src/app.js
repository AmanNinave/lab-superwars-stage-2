const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(let i=0;i<players.length;i++){
        let hero_or_villean = i%2==0 ? "hero" : "villean";
        let obj = {
            name:players[i],
            strength:100,
            image:`./images/super-${i+1}.png`,
            type: hero_or_villean
        }
        console.log(obj)
        detailedPlayers.push(obj)
    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let random_strength = Math.ceil(Math.random()*100);
    return random_strength
}

const buildPlayers = (players, type) => {
    let fragment = '';

    for(let i =0;i<players.length;i++){
        fragment+=`<div class="player">
                        <img src="${players[i].image}" alt="">
                        <div class="name">${players[i].name}</div>
                        <div class="strength">${players[i].strength}</div>
                    </div>`
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}