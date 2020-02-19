// document.querySelector('#myform').addEventListener('input', (event) => {
//     console.log(event.target.value);}

// function myValidation(){
//     let myValue = document.getElementById('myform').value;

//     if (isNaN(myValue) || myValue < 1 || myValue > 20) {
//         console.log('Try better one!');
//     }else{
//         console.log('This is better.');
        
//     }
// }


// // assignment has been done on changing the paragraph tg comment
// const element = document.getElementById('idone');
// element.textContent = 'Changed one from previous!';
// console.log(element);



// form creation
document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.guestname.value);
    // to clean the form
    event.target.username.value = '';
    event.target.guestname.value = '';
});