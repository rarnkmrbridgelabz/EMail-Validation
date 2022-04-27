console.log("***** Welcome To Email Validation *****");

const emailRegex = RegExp("^[a-zA-Z][.@a-zA-Z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid EMAIL ID ");
    else
    console.log(email + " : Invalid EMAIL ID");
}

validateEmail("abc.xyz@bridgelabz.co.in");
validateEmail("abc123@gmail.a@abc.com");