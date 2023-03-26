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
        document.querySelector(".error.fullName").style.display = "none";
        }
    }
    else{
        document.querySelector(".error.fullName").style.display = "block";
    }
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.value.match(mailformat)){
        emailValid = true;
        document.querySelector(".error.eMail").style.display = "none";
    }
    else{
        document.querySelector(".error.eMail").style.display = "block";
    }
    if(passwordInput.value.length === 10){
        document.querySelector(".error.password").style.display = "none"
        if(!passwordInput.value.includes(" ")){
            passwordValid = true;
            document.querySelector(".error.password2").style.display = "none";
        }
        else{
            document.querySelector(".error.password2").style.display = "block";
        }
    }
    else{
        document.querySelector(".error.password").style.display = "block";
    }
    if(passwordInput.value === passwordMatchInput.value){
        passwordMatch = true;
        document.querySelector(".error.passwordMatch").style.display = "none";
    }
    else{
        document.querySelector(".error.passwordMatch").style.display = "block";
    }
    if ((nameValid && emailValid && passwordValid && passwordMatch) === false){
        e.preventDefault();
    }
    else{
        document.querySelector(".error").style.display = "none";
    }
}