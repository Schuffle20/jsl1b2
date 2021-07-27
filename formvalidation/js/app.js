// UI
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

//Event Listener
form.addEventListener('submit', function (e){
    e.preventDefault();
    // console.log('hay');

    if(username.value === ''){
       showerror(username, 'Username is required');

    }else{
        showsuccess(username);
    }

    if(email.value === ''){
        showerror(email, 'Email is required');
    }else if (!validateEmail(email.value)){
        showerror(email, 'Email is not valid!');
    }else{
        showsuccess(email);
    }

    if(password.value === ''){
        showerror(password, 'Password is required');
    }else if(password.value.length < 6 || password.value.length > 10){
        showerror(password, 'Password length must be at least 6 and at most 10 ');
    }else{
        showsuccess(password);
    }

    if(cfmpassword.value === ''){
        showerror(cfmpassword, 'Confirm Password is required');
    }else if(password.value !== cfmpassword.value){
        showerror(cfmpassword, 'Password do not match');

    }else{
        showsuccess(cfmpassword);
    }



});

function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";

    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className= "form-control success"
    // formcontrol.classList.remove('error');
    // formcontrol.classList.add('success');
}

//For Checking email format
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
