const createPassword = document.querySelector('#createPassword')
const confirmPassword = document.querySelector('#confirmPassword')
const strengthDisplay = document.querySelector('#strength')



function change() {
    const createPasswordValue = createPassword.value
    const length = createPasswordValue.length
    // const includeLetter = createPasswordValue.match(/[a-z]/i)
    const includeDigit = createPasswordValue.match(/\d/)
    const includeSpecialChar = createPasswordValue.match(/!@#.'/)
    if (length === 0) {
        strengthDisplay.innerHTML = ''
    } else if (length <= 4 ) {
        strengthDisplay.innerHTML = 'Weak'
    } else if (length > 4 && length < 7){
        strengthDisplay.innerHTML = 'Medium'
    } else if (length >= 7 && !includeDigit && !includeSpecialChar) {
        strengthDisplay.innerHTML = 'Must include a digit and special char'
    } else  {
        strengthDisplay.innerHTML = 'Password Successful'
    }
}

function confirm() {
    const createPasswordValue = createPassword.value
    const confirmPasswordValue = confirmPassword.value
    if (confirmPasswordValue === createPasswordValue) {
        console.log('Similar')
    } else {
        console.log('Not the same')
        print('Not')
    }
}