const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e =>{
    e.preventDefault();

    // valdiation
    const username = form.username.value;
    const usernamepattern = /^[a-zA-Z]{6,12}$/;

    if(usernamepattern.test(username)){
        // feedback good info
        feedback.textContent = 'that username is valid!';
    }else{
        feedback.textContent = 'username must contain letters only & be between 6 & 12';
    }
});

