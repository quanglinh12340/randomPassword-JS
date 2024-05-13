const passwordBox = document.getElementById('password')
const button = document.querySelector('button')
const btnCopyPassWord = document.querySelector('img')
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()_+~|}{[]></-="

const lengtht = 12
const allCharts = upperCase + lowerCase + number + symbol

button.onclick = createPassword
function createPassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (lengtht> password.length) {
        password += allCharts[Math.floor(Math.random() *allCharts.length)]
    }
    passwordBox.value = password
}

btnCopyPassWord.onclick = copyPassword

function copyPassword () {
    passwordBox.select()
    document.execCommand('copy')
}