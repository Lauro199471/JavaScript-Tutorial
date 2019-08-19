/*
const para = document.querySelector('p');
console.log(para);

const para_error = document.querySelector('.error');
console.log(para_error);

const div_error = document.querySelector('div.error');
console.log(div_error);

const fromInspect = document.querySelector('body > h1');
console.log(fromInspect);

const fromInspect2 = document.querySelector('body > div:nth-child(2) > p:nth-child(2)');
console.log(fromInspect2);

const paras = document.querySelectorAll('p');
console.log(paras);

const errors = document.querySelectorAll('.error');
console.log(errors);


// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get element by their class name
const errorss = document.getElementsByClassName('error'); 
console.log(errorss);
console.log(errorss[0]);

// get element by their tag name
const parass = document.getElementsByTagName('p');
console.log(parass);

const parasss = document.querySelector('p');
console.log(parasss.innerText);
parasss.innerText = 'Ninjas are awesome';

const content = document.querySelector('.content');
content.innerHTML = `<h2> THIS IS A NEW H2</H2>`;

const titleH1 = document.querySelector('h1');
titleH1.style.margin = '50px';
titleH1 .style.color = 'crimson';
titleH1.style.fontSize = '60px';
*/

//===========
// Lecture 51
//===========
/*
const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('success');
console.log(content.classList);
*/
const paras = document.querySelectorAll('p');
paras.forEach(p=>{
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});

//===========
// Lecture 52
//===========
const article = document.querySelector('article');

article_array = Array.from(article.children);
console.log(article_array);

article_array.forEach(child =>{
    child.classList.add('article-element');
});

const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.nextElementSibling);
console.log("Here"); 

//===========
// Lecture 53
//===========
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    console.log('You clicked me')
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e =>{
        console.log(e.target);
        e.target.style.textDecoration = 'line-through';
    });
});
