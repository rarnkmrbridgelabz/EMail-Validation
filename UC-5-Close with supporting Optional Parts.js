console.log("***** Welcome To Email Validation *****");

const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid EMAIL ID ");
    else
    console.log(email + " : Invalid EMAIL ID");
}

console.log("---------- Valid Emails ----------");

let email = "abc@bridgelabz.co.in";
validateEmail(email);

email = "abc@gmail.com.com";
validateEmail(email);

email = "abc@yahoo.com";
validateEmail(email);

email = "abc@1.com";
validateEmail(email);

email = "abc-100@yahoo.com";
validateEmail(email);

email = "abc.100@yahoo.com";
validateEmail(email);

email = "abc111@abc.com";
validateEmail(email);

email = "abc-100@abc.net";
validateEmail(email);

email = "abc.100@abc.com.au";
validateEmail(email);

email = "abc+100@gmail.com";
validateEmail(email);

console.log("---------- Invalid Emails ----------");

email = ".abc@abc.com";
validateEmail(email);

email = "abc";
validateEmail(email);

email = "abc@.com.my";
validateEmail(email);

email = "abc@abc@gmail.com";
validateEmail(email);

email = "abc()*@gmail.com";
validateEmail(email);

email = "abc..2002@gmail.com";
validateEmail(email);

email = "abc.@gmail.com";
validateEmail(email);

email = "abc123@.com";
validateEmail(email);

email = "abc123@.com.com";
validateEmail(email);

email = "abc123@gmail.a";
validateEmail(email);

email = "abc@%*.com";
validateEmail(email);

email = "abc@gmail.com.1a";
validateEmail(email);

email = "abc@gmail.com.aa.au";
validateEmail(email);