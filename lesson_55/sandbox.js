const ul = document.querySelector('ul');
const buttonA = document.querySelector('button.append');
const buttonB = document.querySelector('button.prepend');

// Append
buttonA.addEventListener('click',() => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li);
});
// Prepend
buttonB.addEventListener('click',() => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);
});

// remove item UPDATED
ul.addEventListener('click', e =>{
    console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});
