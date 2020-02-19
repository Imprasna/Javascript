// function used here

const say = function(name){
    return 'Hey, ' +name+ '!';
}

console.log(say('John doe'));

// ARROW is used instead of a function

const said = (name) => {
    return 'Hey, ' +name+ '!';
}

console.log(said('Jane doe'));


// reducing the code level using Arrow fn

const told = (name) => `Hey, ${name} how is it goin' ?`;

console.log(told('Bane doe'));


// checker is a variable_name and with array objects
const checker = [{
    item: 'chicken',
    done: false,
}, {
    item: 'mutton',
    done: true,
}, 
    {item: 'pork',
    done: true,
}];

// using "FILTER" property to sort out only certian things 

// variable_name."property"((some variable)=>declared some variable.thing to check === what condition)
//  function(){
//     return ....;  // this is replaced with "=>" function
//  }
const doneThings = checker.filter((anyThing) => anyThing.done === true)
console.log(doneThings);
