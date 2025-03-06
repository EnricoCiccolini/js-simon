


const countdownElement = document.getElementById('countdown')
console.log(countdownElement)

const numbersListElement = document.getElementById('numbers-list')
console.log (numbersListElement)


// numeri randomici //
let number1 = randomNymber()
let number2 = randomNymber()
let number3 = randomNymber()
let number4 = randomNymber()
let number5 = randomNymber()



numbersListElement.innerHTML = `
<li>${number1}</li>
<li>${number2}</li>
<li>${number3}</li>
<li>${number4}</li>
<li>${number5}</li>`
















//contatore//
let count = 10
let timer = setInterval(start,1000 )

function start() {
    countdownElement.innerHTML = count
    count --
    if(count === 0){
        
        clearInterval(timer)

    }
    
}

//random//

function randomNymber (){
   return Math.floor(Math.random() * 50) + 1
}



