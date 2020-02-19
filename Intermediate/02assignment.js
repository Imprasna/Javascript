const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// Whatsoever the "first element" declared in the function, it is goin to be the 
// element itself from the array. Here 'day' is the "first element"
// i is goin to be the index value of the array.
days.forEach(function(day, i){
    console.log(`Starts with ${i + 1} - ${day}.`);
    
})