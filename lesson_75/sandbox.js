// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
scores.sort();
console.log(scores);

scores.sort( (a,b) => b - a );
console.log(scores);

// example 3 - sorting objects
const players = [
    {names: 'mario', score: 20},
    {names: 'luigi', score: 10},
    {names: 'chun-li', score: 50},
    {names: 'yoshi', score: 30},
    {names: 'shaun', score: 70}
];

players.sort( (a,b) => {
    if(a.score > b.score){
        return -1;
    }
    else if(b.score > a.score){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(players);

players.sort( (a,b) => b.score - a.score);
console.log(players);