const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log(username.value);
    console.log(form.username.value);
});

// Testing RegEx
const username = 'sldjfs';
const pattern  = /^[a-z]{6,}$/;

let result = pattern.test(username);
if(result){
    console.log('regex test passsed :)');
}else{
    console.log('reg test failed :(');
}

const username1 = '3049kajdfgaguhe28723';
const pattern1  = /[a-z]{6,}/;
result = username1.search(pattern1)
console.log(result);