const before = new Date('February 1 2019 7:30:59');
const now = new Date();

diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
console.log(mins)

const hours = Math.round(mins / 60);
console.log(hours)

const days = Math.round(hours / 24);
console.log(days)

console.log(`The blog was written ${days} ago`);

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));