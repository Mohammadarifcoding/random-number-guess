
let max = 10
let min = 1
let score = 0
let random_number = Math.floor(Math.random()*(max - min) + min) 
console.log(random_number)

document.getElementById("resetButton").addEventListener("click", function(){

    
 random_number = Math.floor(Math.random()*(max - min) + min) 
 console.log(random_number)
    
})
document.getElementById('guessButton').addEventListener('click',function(){
    score++
    let guess = document.getElementById('guessInput').value
    let guessInputnumber = parseFloat(guess)
      if(guessInputnumber !== random_number){
        newFunction()
    }
    else if(random_number === guessInputnumber){
        theCodeMatch()
    }
    

    

    function theCodeMatch() {
        document.getElementById('message').innerHTML = `You guessed it right the number is ${random_number}`
        document.getElementById('guessInput').value = ""
        document.getElementById('score').innerText = `Your score is ${100 - score}`
    }

    function newFunction() {
        if (guessInputnumber > random_number) {
            document.getElementById('message').innerText = "Your number is to high ⬆️"
        }
        else if (guessInputnumber < random_number) {
            document.getElementById('message').innerText = "Your number is to low ⬇️"
        }
    }
})