const body = document.querySelector('body')
const form = document.querySelector('.form')
const result = document.querySelector('.lowOrHi')
const guessHistory = document.querySelector('.guesses')
const remainGuess = document.querySelector('.lastResult')

const randomGuess = Math.floor(Math.random() * 10) + 1 //guessing random number between 1 to 10

let prevGuess = []
let guesscount = 1

// ------------------------------------------------------------------------

form.addEventListener('submit', function(e) {
  e.preventDefault()
  let userGuess = parseInt(document.querySelector('#guessField').value) //this converts the value to integer
  // -------------------------------------------------------
  function validateGuess(userGuess) {
    if (isNaN(userGuess) == true) {  //isNaN checks if the input is a number or not. (NaN == not a number)
      result.innerHTML = `<h2>Enter a valid number</h2>`
    }
    else {
      checkGuess(userGuess)
    }
  }
  // ----------------------------------------------------------
  function checkGuess(userGuess) {
    prevGuess.push(userGuess) //the push function pushes the userGuess to the prevGuess array
    if (userGuess > randomGuess) {
      result.innerHTML = `<h2>Guess is too high</h2>`
    }
    else if (userGuess < randomGuess) {
      result.innerHTML = `<h2>Guess is too low</h2>`
    }
    else {
      result.innerHTML = `<h2>Corect Guess.Refresh page to play again.</h2>`
      document.querySelector('#guessField').disabled = true //'disabled' is used to disable the input field
      
    }

    guesscount++
    guessHistory.innerHTML = prevGuess.join(', ')
    remainGuess.innerHTML = 11 - guesscount
    if (guesscount == 11) {
      document.querySelector('#guessField').disabled = true  
      result.innerHTML = `<h2>Game over.Refresh page to play again</h2>`
      remainGuess.innerHTML = 0
    }
  }
  // ---------------------------------------------------------------
  validateGuess(userGuess)
  // checkGuess(userGuess)
  console.log(`correct guess: ${randomGuess}`)
})