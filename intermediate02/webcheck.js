let userEmail = 'john123';
let password = '12345asdc';

// here .length is a property
console.log(password.length);

//to know more about the methods and property 
// check the documentation - "https://developer.mozilla.org/en-US/docs/Web/JavaScript" 

// here "toLowerCase" is a method, it not a property so only we use '()'
console.log(userEmail.toUpperCase());

// checking the username
let userChecker = function(myString){
    // .includes and some conditions to be passed for the checking purpose
    if((myString.includes(123)) && (myString.length > 5)){
        return true;
    }else{
        return false;
    }
}

let passChecker = function(pwd){
    if((pwd.includes(123)) && (pwd.length > 8)){
        return true;
    }else{
        return false;
    }
}

console.log(userChecker(userEmail));
console.log(passChecker(password));
