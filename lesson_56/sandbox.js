const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    alert('OI! My content is copyright');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e =>{
    box.textContent = `x pos - ${e.offsetX} || y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(`pageX - ${e.pageX}, pageY - ${e.pageY}`);
});