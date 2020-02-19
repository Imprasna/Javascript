// You can play with these true or false statments..
let isVerified = false;
let isLoggedIn = true;
let isPaymentToken = true;
let isGuest = false;

// "!" - used to reverse the logic.
if (!isVerified && isLoggedIn && isPaymentToken){
    console.log('Greetings! You can access the page.');
}else if (isVerified || isGuest){
    console.log('Allowed for free previews.');
}else {
    console.log('WARNING! Please contact the admin.');
}