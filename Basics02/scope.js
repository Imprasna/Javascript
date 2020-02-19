// difference between let and var and const
// let to declare variable
// const to declare constant

let iAmGloblal = 'Something here';

if (true){
    // declaring another variable inside this conditional part
   let iAmLocal = 'It is Locally declared';
    // until you want to the variable globally, you should never declare a variable using - 'var'
    // till that use - 'let'
    // changing the global value
    iAmGloblal = 'Changed';
    console.log(iAmLocal);
    console.log(iAmGloblal);
}

// console.log(iAmLocal);
console.log(iAmGloblal); 