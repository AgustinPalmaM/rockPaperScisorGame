const scissorsButton = document.querySelector('#scissors');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const contador =  document.querySelector('#contador')
const jugada = document.querySelector('#jugada')
const decisionFinal = document.querySelector('#decisionFinal')
var counterComputer = 0;
var counterPlayer = 0;


function computerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let randNum = Math.round(Math.random()*2)
    return options[randNum]
}
function playRound() {
    decisionFinal.textContent = 'a jugar!'
    computerSelection = computerChoice();
    if ( computerSelection == playerSelection) {
        decisionFinal.textContent = 'empate!! - otra vez!'
        
        counterComputer += 0
        counterPlayer += 0
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            counterComputer += 1
        } else {
            counterPlayer += 1
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            counterComputer += 1
        } else {
            counterPlayer += 1
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            counterComputer += 1
        } else {
            counterPlayer += 1
        }
    }


    
    jugada.textContent = `jugada computador ${computerSelection} jugada humano ${playerSelection}`
    contador.textContent = `puntaje maquina: ${counterComputer} vs puntaje humano ${counterPlayer}`
    console.log(counterComputer, counterPlayer);

    if (counterPlayer >=5) {
        console.log('ganador el humano');
        decisionFinal.textContent = 'ganador el humano'
        counterPlayer = 0
        counterComputer = 0
        
    } else if (counterComputer >= 5) {
        console.log('ganadora la maquina');
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
