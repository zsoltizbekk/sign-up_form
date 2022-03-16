let password = document.getElementById("passwd");
let confirmPassword = document.getElementById("confpasswd");
let button = document.getElementById("btn")
let passwdmsg = document.getElementById("passwdmessage");

function validateForm(){
    let lowercase = false;
    let uppercase = false;
    let num = false;
    console.log(password.value);
    for (let i = 0; i < password.value.length; i++){
        if (password.value[i] <10 && password.value[i] >=0){
            num = true;
        } else if (password.value[i].toLowerCase() == password.value[i]) {
            lowercase = true;
        } else if (password.value[i].toUpperCase() == password.value[i]) {
            uppercase = true;
        }
    }
    if (lowercase && uppercase && num) {
        if (password.value == confirmPassword.value){
            return true;
        } else {
            passwdmsg.innerHTML = " Passwords are not the same!";
            return false;
            }
        } 
    else {
        passwdmsg.innerHTML = " Password must contain uppercase, lowercase characters and number!";
        return false;
    }
}
