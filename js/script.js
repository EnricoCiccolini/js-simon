


const countdownElement = document.getElementById('countdown')
console.log(countdownElement)
























//contatore//
let count = 10
let timer = setInterval(start,1000 )

function start() {
    countdownElement.innerHTML = count
    count --
    if(count === 0){
        countdownElement.innerHTML = count('via')
        clearInterval(timer)

    }
    
}

//random//
function randomNymber (){}