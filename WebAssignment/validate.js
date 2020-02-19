function myValidate(validate){

    let myValue = document.getElementsByClassName('username').Value;
    console.log(validate.target.username.value);
    event.preventDefault();
    
    if (password1 != password2) {
        console.log('Wrong Password');
        
    }else{
        console.log('Well done!');
        
    }
}