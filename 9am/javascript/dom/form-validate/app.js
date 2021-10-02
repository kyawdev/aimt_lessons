const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    // console.log(e);
    e.preventDefault();
    inputCheck();

})
function inputCheck() {
    const nameValue = name.value.trim();
    const emaiValue = email.value.trim();
    const passwordValue = password.value.trim();

    // check username
    if (nameValue === '') {
        errorMessage(name, 'name can\'t be blank username')
    } else if (nameValue.length < 3) {
        errorMessage(name, 'min length must be 3 or more character')
    } else {
        successMessage(name)
    }
    // email check

    if (emaiValue === '') {
        errorMessage(email, 'email can\'t be blank username')
    } else if (!emaiValue.includes('.')) {
        errorMessage(email, 'invalid email')
    } else {
        successMessage(email)
    }
    // password check
    if (passwordValue === '') {
        errorMessage(password, 'password can\'t be blank userpassword')
    } else if (passwordValue.length < 6) {
        errorMessage(password, 'min length must be 6 or more character')
    } else {
        successMessage(password)
    }
}

function errorMessage(input, message) {
    const pname = input.parentElement;
    const smallMessage = pname.querySelector('small');
    smallMessage.innerHTML = message
    pname.classList.add('error')
    pname.classList.remove('success')

}
function successMessage(input) {
    const pname = input.parentElement;
    pname.classList.remove('error')
    pname.classList.add('success')
}