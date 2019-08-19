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

// remove item
const items = document.querySelectorAll('li');
items.forEach(item=>{
    item.addEventListener('click',e => {
        e.target.remove();
    });
});