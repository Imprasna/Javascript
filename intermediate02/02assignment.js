// Object created
let myTodos = {
    year: 2020,
    projectsLeft: 0,
    projectsDone: 0
}

// variable created with function and 2 paramerters passed into it.
let addprojectsleft = function(todo, project = 0){

    //variable from the objects is passed, obj.var + parameter is passed.  
    todo.projectsLeft = todo.projectsLeft + project;
}

// variable created with function and 2 paramerters passed into it.
let addprojectsDone = function(todo, project = 0){

    //variable from the objects is passed, obj.var + parameter is passed. 
    todo.projectsDone = todo.projectsDone - project;
}

// reset function is defined. one parameter is passed.
let resetProject = function(todo){
    todo.projectsLeft = 0;
    todo.projectsDone = 0;
} 

// getting the summary of the projects
let getSummary = function(todo){
    let leftOutProjects = todo.projectsLeft - todo.projectsDone;
    return `You have ${leftOutProjects}  projects!`;
}

// passing the values to it.with the object name and the value
addprojectsleft(myTodos, 2);

// passing the values to it.with the object name and the value
addprojectsleft(myTodos, 6);

// passing the values to it.with the object name and the value
addprojectsDone(myTodos, 4);


console.log(myTodos);


console.log(getSummary(myTodos));

