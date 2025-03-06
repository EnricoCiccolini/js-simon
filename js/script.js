


const countdownElement = document.getElementById('countdown')
console.log(countdownElement)

const numbersListElement = document.getElementById('numbers-list')
console.log (numbersListElement)

const answersFormElement = document.getElementById('answers-form')
console.log(answersFormElement)

const istructionsElement = document.getElementById('instructions')
console.log(istructionsElement)

const messageElement = document.getElementById('message')
console.log(messageElement)

// numeri randomici //
let number1 = randomNumber()
let number2 = randomNumber()
let number3 = randomNumber()
let number4 = randomNumber()
let number5 = randomNumber()



numbersListElement.innerHTML = `
<li>${number1}</li>
<li>${number2}</li>
<li>${number3}</li>
<li>${number4}</li>
<li>${number5}</li>`



answersFormElement.addEventListener('submit', function (event) {
    event.preventDefault()
   const formControlElement =document.querySelectorAll('form-control')
   console.log( formControlElement)

   let solved = 0
    
   for(let i  = 0 ; i < formControlElement.length ; i ++  ){
     const control = formControlElement[i]
     if (control === number1 || control === number2 || control === number3|| control === number4|| control === number5)   
        solved ++
    }


    messageElement.innerHTML =`complimenti hai indovinato ${solved} numeri`

})









//contatore//
let count = 10
let timer = setInterval(start,1000 )

function start() {
    countdownElement.innerHTML = count
    count --
    if(count === 0){
        countdownElement.className = 'd-none'
        numbersListElement.className = 'd-none'
        answersFormElement.className = 'd-block'
        clearInterval(timer)

    }
    
}

//random//

function randomNumber (){
   return Math.floor(Math.random() * 50) + 1
}



