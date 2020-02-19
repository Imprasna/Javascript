// for ARRAY we use const 

const superHeros = ['Iron man', 'Spiderman', 'capt.America','Groot', 'Capt. Marvel', 'Thor'];

console.log(superHeros);

console.log( 'One of the Super Hero is ' + superHeros[4]);

console.log(superHeros [superHeros.length - 1]);

console.log(`We have ${superHeros.length - 1} super heros right now.!`);




// 3 things you must know about arrays

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

numbers[2] = 'changed';
console.log(numbers);



// 1. start

// number shift
// what shift does is, it skips the 0th value 
numbers.shift();
console.log(numbers);

// Unshift is used to add new value to an array.
numbers.unshift('New');
console.log(numbers);


// 2. end

// pop condition
numbers.pop();
console.log(numbers);
console.log('The element to be deleted is ' + numbers.pop());

// Push condition
numbers.push('Last');
console.log(numbers);


// 3. middle

// concept of splice
// variable_name.splice("start_count", "how many number to be spliced", "what ot be replaced") 
// this is how it works
numbers.splice(1, 4, 'spliced');
console.log(numbers);
