console.log("***** Welcome To Email Validation *****");

const emailRegex = RegExp("[a-zA-Z]*[@]{1}[a-z0-9]+[.]{1}[.a-z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid EMAIL ID ");
    else
    console.log(email + " : Invalid EMAIL ID");
}

validateEmail("abc@bridgelabz.co.in");
validateEmail("abc123@.com");