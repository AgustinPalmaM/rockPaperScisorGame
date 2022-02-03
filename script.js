const scissorsButton = document.querySelector('#scissors');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const contador =  document.querySelector('#contador')
const jugada = document.querySelector('#jugada')
const decisionFinal = document.querySelector('#decisionFinal')
var counterComputer = 0;
var counterPlayer = 0;

function showStartButton() {
    
}


function computerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let randNum = Math.round(Math.random()*2)
    return options[randNum]
}
function playRound() {
    computerSelection = computerChoice();
    if ( computerSelection == playerSelection) {
        decisionFinal.textContent = 'Empate'
        decisionFinal.removeAttribute('alert')
        decisionFinal.setAttribute('class', 'display-3 alert alert-secondary')
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            counterComputer += 1
            decisionFinal.textContent = 'punto para la maquina'
            decisionFinal.setAttribute('class', 'display-3 alert alert-warning')
            
        } else {
            counterPlayer += 1
            decisionFinal.textContent = 'punto para ti!'
            decisionFinal.setAttribute('class', 'display-3 alert alert-success')
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            counterComputer += 1
            decisionFinal.textContent = 'punto para la maquina'
            decisionFinal.setAttribute('class', 'display-3 alert alert-warning')
        } else {
            counterPlayer += 1
            decisionFinal.textContent = 'punto para ti!'
            decisionFinal.setAttribute('class', 'display-3 alert alert-success')
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            counterComputer += 1
            decisionFinal.textContent = 'punto para la maquina'
            decisionFinal.setAttribute('class', 'display-3 alert alert-warning')
        } else {
            counterPlayer += 1
            decisionFinal.textContent = 'punto para ti!'
            decisionFinal.setAttribute('class', 'display-3 alert alert-success')
        }
    }


    
    jugada.textContent = `La jugada fue  =>  Maquina: ${computerSelection} y Humano: ${playerSelection}`
    contador.textContent = `Maquina: ${counterComputer} - Humano: ${counterPlayer}`
    console.log(counterComputer, counterPlayer);

    if (counterPlayer >=5) {
        decisionFinal.textContent = 'Ganador el humano!'
        counterPlayer = 0
        counterComputer = 0
        
    } else if (counterComputer >= 5) {
        decisionFinal.textContent = 'ganadora la maquina'
        counterPlayer = 0
        counterComputer = 0
        
    }
    
    
}


function game() {
    
    
    scissorsButton.addEventListener('click', function() {
        playerSelection = 'scissors'
        playRound()
    })
    rockButton.addEventListener('click', function() {
        playerSelection = 'rock'
        playRound()        
    })
    paperButton.addEventListener('click', function() {
        playerSelection = 'paper'
        playRound()
    })
    
}


game()