


const countdownElement = document.getElementById('countdown')
console.log(countdownElement)

const numbersListElement = document.getElementById('numbers-list')
console.log(numbersListElement)

const answersFormElement = document.getElementById('answers-form')
console.log(answersFormElement)

const istructionsElement = document.getElementById('instructions')
console.log(istructionsElement)

const messageElement = document.getElementById('message')
console.log(messageElement)


//numeri del form
const num1Element = document.getElementById('num1')
console.log(num1Element)
const num1ElemntValue = num1Element.value
console.log(num1ElemntValue)



// numeri randomici //
let randomNumbers = []
for (let i = 0; i < 5; i++) {
    let numcasual = randomNumber()
    randomNumbers.push(numcasual)
}
console.log(randomNumbers)


numbersListElement.innerHTML = `
<li>${randomNumbers[0]}</li>
<li>${randomNumbers[1]}</li>
<li>${randomNumbers[2]}</li>
<li>${randomNumbers[3]}</li>
<li>${randomNumbers[4]}</li>`



answersFormElement.addEventListener('submit', function (event) {
    event.preventDefault()
    const formControlElement = document.querySelectorAll('.form-control')
    console.log(formControlElement)

    let solved = 0

    for (let i = 0; i < formControlElement.length; i++) {
        let control = formControlElement[i].value
        control = parseInt(control)
        if (randomNumbers.includes(control)){
             solved++
        }
    }

    
        if (solved === 0) {
            messageElement.innerHTML = `Mi spiace non hai indovinato nessun numero`
        } else if (solved === 1) {
            messageElement.innerHTML = `complimenti hai indovinato ${solved} numero`
            messageElement.className = 'text-success text-center'
        } else if (solved > 1) {

            messageElement.innerHTML = `complimenti hai indovinato ${solved} numeri`
            messageElement.className = 'text-success text-center'
        }
    })









//contatore//
let count = 10
let timer = setInterval(start, 1000)

function start() {
    countdownElement.innerHTML = count
    count--
    if (count === 0) {
        countdownElement.className = 'd-none'
        numbersListElement.className = 'd-none'
        answersFormElement.className = 'd-block'
        clearInterval(timer)

    }

}

//random//

function randomNumber() {
    return Math.floor(Math.random() * 50) + 1
}



