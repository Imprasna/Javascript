// objects created
var john ={
    name: 'I am John',
    age: 25,
    married: true,
}
var jane ={
    name: 'I am Jane',
    age: 27,
    married: false,
}
var sam ={
    name: 'I am Sam',
    age: 21,
    married: true,
}


// map is a new concept introduced
// users is an object created from Map
let users = new Map()

// users is a empty object
// set is a property to pass key values to it
// the name john with quotes us user-defined
// the next john after comma is fetching from the above object
users.set('john', john);
users.set('jane', jane);
users.set('sam', sam);

console.log(users);

// to find how many objects are available use variable name.size
console.log(users.size);

// to get particular thing we  can use get method
// 'jane' with quotes is the key here
console.log(users.get('jane'));

// to access all the keys for your defined things above
// we can use a object called .keys
console.log(users.keys());
console.log(users.values());

// we are seeing for of loop
for (const key of users.keys()) {
    console.log(key);   
}

for (const value of users.values()) {
    console.log(value.age);
}

// inorder to get two values we just need to use the array function, use entries object here
for (const [value, key] of users.entries()) {
    console.log(value +' = '+ key.age);
}

// using forEach loop
users.forEach((key, value) => console.log((value +' = '+ key.name)));

// putting up arrayofArray
// arrofArr is a method in javascript, calling array within the array
var arrofArr = [['one','1'], ['two', '2'], ['three', '3']];
var newMap = new Map(arrofArr);
console.log(newMap );
