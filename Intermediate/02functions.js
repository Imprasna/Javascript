let multiplier = function(num1, num2){
    result = num1 * num2;
}

// DEFAULT PARAMETER!!!
// these are just default parameters! By default it's counted.
let guestUser = function(name = 'unName', courseCount = 0){
    return 'Hello! ' + name + ' your course count is : ' +courseCount; 
}

// when you pass the values here, that default values will be changed
console.log(guestUser('John Doe', 2));
