const now = new Date();

console.log(now);
console.log(typeof(now));

// year, months, day, times
console.log('getFullYear:',now.getFullYear());
console.log('getMonth:',now.getMonth());
console.log('getDate:',now.getDate());
console.log('getDay:',now.getDay());
console.log('getHours:',now.getHours());
console.log('getMinutes:',now.getHours());
console.log('getSeconds:',now.getMinutes());

// timestamp
console.log('timestamp:',now.getTime());

// date strings
console.log('Date String:',now.toDateString());
console.log('Time:', now.toTimeString());
console.log('Local Time:', now.toLocaleString());