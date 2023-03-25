let nameInput = document.querySelector("[name='fullname']");
let emailInput = document.querySelector("[name = 'eMail']");
let passwordInput = document.querySelector("[name = 'password']");
let passwordMatchInput = document.querySelector("[name = 'passwordMatch']");

document.forms['joinUs'].onsubmit = function(e){
    let nameValid = false;
    let emailValid = false;
    let passwordValid = false;
    let passwordMatch = false;

    let trimmedName = nameInput.value.replaceAll(" ","");
    if(nameInput.value !=="" && /^[a-zA-Z]+$/.test(trimmedName)){
        if( /^[a-zA-Z]+$/.test(trimmedName)){
        nameValid = true;
        }
    }
    else{
        console.log("not valid");
    }
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.value.match(mailformat)){
        emailValid = true;
        console.log("email valid");
    }
    else{
        console.log("email not valid");
    }
    if(passwordInput.value.length === 10){
        if(!passwordInput.value.includes(" ")){
            passwordValid = true;
        }
        else{
            console.log("Password cannot include spaces")
        }
    }
    else{
        console.log("Password has to be 10 characters")
    }
    if(passwordInput.value === passwordMatchInput){
        passwordMatch = true;
    }
    else{
        console.log("password dont match")
    }
    if (nameValid || emailValid || passwordValid || passwordMatch === false){
        e.preventDefault();
    }
}