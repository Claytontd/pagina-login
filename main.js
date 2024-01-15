let email = document.getElementById("email");
let password = document.getElementById("password");
let user = document.getElementById("user");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");
let textName = document.getElementById("textName");
let textPassword = document.getElementById("textPassword");

form.addEventListener("submit", (e)=> {
    if(password.value == '' || email.value == '') {
        textForm.textContent = "Preencha todos os campos"
    } else if (user.value == ''){
        textForm.textContent = "Preencha todos os campos"
    }
    else if (emailValidation(email.value) === true && passwordValidation(password.value) === true) {
        console.log(user.value);
        console.log(email.value);
        console.log(password.value);
        textForm.textContent = '';
        textName.textContent = '';
        textEmail.textContent = '';
        textPassword.textContent = '';
    } else {
        console.log('Requisição não atendida')
    }

    e.preventDefault()
})

email.addEventListener("keyup", ()=> {
    if(emailValidation(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser: abcd@dominio.com"
    } else {
        textEmail.textContent = ''
    }
})

password.addEventListener("keyup" , () => {
    if (passwordValidation(password.value) !== true) {
        textPassword.textContent = "Deve ter no mínimo: 8 Caracteres; 1 Letra Maiúscula; 1 Letra Minúscula; 1 Caracter Especial e  1 Número"
    } else {
        textPassword.textContent = ''
    }
})


function emailValidation(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}

function passwordValidation(password) {
    let passwordPattern = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    return passwordPattern.test(password)
}