// function declaration
function greet() {
    console.log("Hello");
}

// function expression
const speak = function(name = 'Mario'){
    console.log(`good day, ${name}!`);
};

const calArea = function(radius){
    return 3.14 * radius **2
};

greet();
     
speak();
speak("Lauro");

area = calArea(5);
console.log(area);

const logPerson = function(nameOfPerson,index){
    console.log(`${index} - hello ${nameOfPerson}`);
};

let person = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li', 'Lauro'];
person.forEach(logPerson)


//==============
//  Log to HTML
//==============
// get a reference to the 'ul'
const ul = document.querySelector(".people");
let html = ``;

const ulPerson = function(person){
    // create HTML template
    html += `<li style="color: green"> ${person} </li>`;
};

person.forEach(ulPerson);
ul.innerHTML = html;

