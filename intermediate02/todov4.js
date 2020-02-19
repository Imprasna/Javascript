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


// inside the function you can just assign any variable
// along side what you want to pass from the list above
const findTodo = function(anyTodo, item){

    // this function here is depended on the variable 'anyTodo'
    const index = anyTodo.findIndex(function(Todo, index){

        // this return here is for the above function not for the previous function
        return Todo.item.toLowerCase() === item.toLowerCase()
    });
    return anyTodo[index];
};

let show = findTodo(newTodo, 'Dhal');
console.log(show);
