const myTodo = ['Bread', 'rice', 'dhal', 'chilly', 'beef']

console.log(myTodo.indexOf('rice'));

// we are actually gonna search for elements from the object using array

const newTodo = [{
    item: 'Bread',
    done: false,
}, {
    item: 'rice',
    done: true,
}, {
    item: 'dhal',
    done: true,
}, {
    item: 'chilly',
    done: false,
}, {
    item: 'beef',
    done: false,
}];


// findindex can take function as a parameter, it's also known as callback functions
// callback functions are just simple name
// you can name anything to the function, it's just kinda variable
// todo here is simple callback variable

const vname = newTodo.findIndex(function(todo, vname){

    // this log here is to see how this process works
    console.log(todo);

    return todo.item === 'dhal';
});

// prints the index value
console.log(vname);
