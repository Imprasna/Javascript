let myTodos = {
    day: 'Monday',
    meeting: 0,
    meetingDone: 0,

    // addmeeting is a simple function
    addMeeting: function(num){
        // "this" is used access the variables from the object 
        this.meeting = this.meeting + num
        
    },

    // summary is also another simple function
    summary: function(){
        return `You have ${this.meeting} to attend!`
    }

}

// how we call function is, using object name and the function name passed to it
// we are calling function here: also we are accessing the function here
myTodos.addMeeting(10);
console.log(myTodos.summary());




// THIS is a keyword in JS
// THIS refers to all the properties within the object to where it is declared.