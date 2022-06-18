// Global Variables
var nameInput = document.getElementById("name-input");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var users ;

if(localStorage.getItem("user") != null){
    users = JSON.parse(localStorage.getItem("user"))
} else {
    users = [];
}
// SIGN UP Operation

var bodySignUp = document.getElementsByTagName("body").Signup

    if (bodySignUp != undefined){
        var signUpBtn = document.getElementById("signUpBTN");

        signUpBtn.addEventListener("click", function(){
            var user = {
                name:nameInput.value,
                email:emailInput.value,
                password:passwordInput.value,
            };
            var success = document.getElementById("success");
            var failed = document.getElementById("fail");
            users.unshift(user);
            if(users.length > 1){ 
                 for (i=1; i<users.length; i++){
                if(users[0].email != users[i].email){
                    success.classList.replace("d-none", "d-block")
                    if(failed.classList.contains("d-block")){
                        failed.classList.replace("d-block","d-none");
                    }
                }
                else{
                    failed.classList.replace("d-none", "d-block");
                    if(success.classList.contains("d-block")){
                        success.classList.replace("d-block","d-none");
                    }
                    users.shift(user);
                }
            }
        } else {
            success.classList.replace("d-none", "d-block")
        }
        localStorage.setItem("user", JSON.stringify(users));
        });
    }





// SIGN IN Operation
var bodyIndex = document.getElementsByTagName("body").Index
if(bodyIndex != undefined){
    if(users.length >= 1) {
    emailInput.value = users[0].email
    passwordInput.value = users[0].password
    emailInput.style.cssText = "background-color:#E8F0FE !important;color:black !important"
    passwordInput.style.cssText = "background-color:#E8F0FE !important;color:black !important"
    
    emailInput.addEventListener("input", function(){
        emailInput.style.cssText = "background-color:transparent !important;color:white !important"
    })
    passwordInput.addEventListener("input", function(){
        passwordInput.style.cssText = "background-color:transparent !important;color:white !important"
    })
}
var loginBTN = document.getElementById("loginBTN");

loginBTN.addEventListener("click", function(){
    var invalidLogin = document.getElementById("invalidLogin");
    var user = {
        email:emailInput.value,
        password:passwordInput.value,
    };
    var loginLink = document.getElementById("loginLink");
    if (users.length >= 1){
        for(i=0; i<users.length;i++){
            if(user.email == users[i].email && user.password == users[i].password){
                loginLink.setAttribute("href", "home.html")
                
            } else{
                invalidLogin.classList.replace("d-none", "d-block")
            }
        }
    } else {
        invalidLogin.classList.replace("d-none", "d-block")
        invalidLogin.innerText = "User not found please register first."
    }
    
});
}

// Home Page

var bodyHome = document.getElementsByTagName("body").home
if(bodyHome != undefined){
    if(users.length == 0){
        window.location.href="signup.html"
    }
    var welcomeMSG = document.getElementById("welcome-message");
    welcomeMSG.innerText=`Welcome ${users[0].name}`
}

