const scores = [10, 30, 15, 25, 50, 40, 5];

// const filterScored = scores.filter(scores =>{
//     return scores > 20;
// });
// console.log(filterScored);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
];

const premiumUsers = users.filter( users => {
    return users.premium;
});
console.log(premiumUsers);