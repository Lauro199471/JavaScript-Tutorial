// reduce methods
const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 70},
];

const marioTotal = scores.reduce( (acc,curr) => {
    if(curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);