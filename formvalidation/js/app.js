const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

// Event Listener
// form.addEventListener('submit',function (e){
//     e.preventDefault();
//     // console.log('hay');
//
//     if(username.value === ''){
//         shwoerror(username,'User name is required')
//     }else{
//         showsuccess(username);
//     }
//
//     if(email.value === ''){
//         shwoerror(email,"Email is required");
//     }else if(!validateEmail(email.value)){
//         shwoerror(email,"Email is not valid");
//     }else{
//         showsuccess(email);
//     }
//
//     if(password.value === ''){
//         shwoerror(password,"Password is required");
//     }else{
//         showsuccess(password);
//     }
//
//     if(cfmpassword.value === ''){
//         shwoerror(cfmpassword,"Password is required");
//     }else if(password.value !== cfmpassword.value){
//         shwoerror(cfmpassword,"Password do not match");
//     }
//     else{
//         showsuccess(cfmpassword);
//     }
//
// });
//
function shwoerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';

    const small =formcontrol.querySelector('small');
    small.innerText = message;
}

function showsuccess(input){
    const formcontrol = input.parentElement;
    // form control.className = 'form-control success';
    formcontrol.classList.remove('error');
    formcontrol.classList.add('success');
}

// for checking email format
function validateEmail(email) {
    const re = /^(([^[<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkrequired(inputarrs){
    // console.log(inputarrs);
    inputarrs.forEach(function (inputarr){
        // console.log(inputarr);
        // console.log(inputarr.value);
        if(inputarr.value === ''){
            shwoerror(inputarr,`${getfieldname(inputarr)} is required`);
        }else{
            showsuccess(inputarr);
        }
    })
}

// Get Field Name
function getfieldname(inputarr){

    return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}
// getfieldname(username);

// Check Input Length
function checklength(input,min,max){
    if(input.value.length < min){
        shwoerror(input,`${getfieldname(input)} must be at least ${min} characters `)
    }else if(input.value.length > max){
        shwoerror(input,`${getfieldname(input)} must be at least ${max} characters`);
    }else{
        showsuccess(input);
    }
}

// Check email is valid
function checkemail(input) {
    const re = /^(([^[<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());

    if(re.test(input.value)){
        showsuccess(input);
    }else{
        shwoerror(input, "Email is not valid");
    }
}

// Check password Match
function checkpasswordmatch(input1, input2){
    if(input1.value !== input2.value){
        shwoerror(input2, 'Password do not match');
    }

}

form.addEventListener('submit',function (e){
    e.preventDefault();

    checkrequired([username,email,password,cfmpassword]);

    checklength(username,3,15);
    checklength(password,6,15);

    checkemail(email);

    checkpasswordmatch(password,cfmpassword);

});
