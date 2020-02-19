// to create a class first letter should be uppercase
class User {
    constructor(firstname, middlename, lastname, credits){
        // tihs.firstname is we are creating it
        this.firstname = firstname;
        this.surname = middlename;
        this.lastname = lastname;
        this.credit = credits;
    }
    // getFullName  is a method that is passed on 
    getFullName(){
        let fullname = `${this.firstname} ${this.surname} ${this.lastname} is my fullname.`;
        return fullname;
    }
    editName(newname){
        const myName = newname.split(' ');
        // newname is stored in an array 
        this.firstname = myName[0];
        this.lastname = myName[1];
    }
}

// here new is a keyword
// john is a object of class User
const john = new User('John', 'Jane', 48);
console.log(john);
console.log(john.getFullName());
john.editName('Johnny', 'talker');
console.log(john.getFullName());



// const sammy = new User('Samuel', 'Ram', 98);
// console.log(sammy);

