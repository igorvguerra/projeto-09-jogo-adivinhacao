const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keydown)


// console.log(randomNumber)



function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(inputNumber.value < 0 || inputNumber.value > 10) {
        alert("Escolha um número entre 0 e 10!")
        return
      }
  
      if(inputNumber.value == "") {
        alert("Você precisa adicionar um número antes!")
        return
      }

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector("h2").innerText = `Parabéns! Você acertou em ${xAttempts} tentativas!`
    
    }

    inputNumber.value = ""

    xAttempts++


}

function handleResetClick(event) {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    xAttempts = 1;
    // console.log(randomNumber)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keydown(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}