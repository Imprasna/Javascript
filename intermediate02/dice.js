let numOne = 22;
let numTwo = 7;
 result = 22/7;

//  here we are goin to pass a property to reduce the larger value
// "toFixed(2)" - defines how many values is goin to displayed after decimal
 console.log(result.toFixed(2));
 let floatResult = result.toFixed(2);

//  inorder to do the dice problem we are actually importing library called 'Math'

// we are importing the library 'MATH'
// library - math.methods to be used(variableToBeCalled)
 console.log(Math.floor(floatResult));
 console.log(Math.ceil(floatResult));


//  Random number Generator
// this will print just random values from any numbers between 0 and 1
console.log(Math.random());

// we can also specify some boundary limits 
console.log(Math.random() * 7);