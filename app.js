const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

div.innerText = 'Hello';

const text = document.createTextNode('Hello');
div.appendChild(text);

document.body.appendChild(div);

document.querySelector('ul').appendChild(div);



console.log(div);