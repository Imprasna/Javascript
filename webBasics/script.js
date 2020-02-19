alert('File runs successfully! You are all set to go');

const myElement = document.querySelectorAll('#idone')
console.log(myElement[0]);

const myPElement = document.querySelector('.classone');
myPElement.textContent = 'This is changed using Javascript.!';


const myPElement = document.querySelectorAll('p');
console.log(myPElement);

// function using arrow fn, parameter passed in function is declared here before the arrow fn
// myPElement.forEach(function(para){
// }); is the actual function declaration
// this below fn is used and changes the content with forEach loop
myPElement.forEach( para => {para.textContent = `I'm changed using forEach loop is Js.`});

document.title = 'Changed';
console.log(document.title);
