// 3 important aspects in delcaring the function

// 1. Declaration and name of the function
// 2. Function itself is important
// 3. Then the block of code, also you have to call this function which you've declared.

// how do we call a function?

let sayHello = function(){
    console.log('Greetings from India');
    console.log('Pleasant day!');
}

// this is how to call a function. 
sayHello();


// creating parameter for the function
let sayHello = function(name){
    console.log('Greetings from India');
    console.log(` ${name} Pleasant day!`);

}

// this is how to call a function. 
sayHello('John Doe');



let fullNameMaker = function(firstname, lastname) {
    console.log(`Welcome, ${firstname} ${lastname}`);
    console.log('Happie to have you here.!'); 
}

fullNameMaker('John', 'Doe');


// returning the function
let myAdder = function(num1, num2){
    let added = num1 + num2;
    return added;
}

console.log(myAdder(5,4));
