// Rock Paper Scisor Game

// var playerSelection = prompt('tu jugada (piedra - papel - tijera):');
// console.log(playerSelection);

function plays() {
    let options = ['rock', 'paper', 'scissors']
    let randNum = Math.round(Math.random()*2)
    return options[randNum]
}

var counterComputer = 0;
var counterPlayer = 0;


function playRound(playerSelection, computerSelection) {
    computerSelection = plays();
    playerSelection = prompt('tu jugada (rock - paper - scissors):');
    if ( computerSelection == playerSelection) {
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
    
    
}

function game() {
    while (counterComputer <= 5) {
    playRound()
    console.log(`contador maquina: ${counterComputer} contador persona: ${counterPlayer}`)
    if (counterComputer == 5) {
        return 'la maquina llego a 5 primero'
    } else if (counterPlayer == 5) {
        return 'player llego a 5'
    }
    }

    // if (counterComputer > counterPlayer) {
    //     return alert('Gana la maquina esta vez!!')
    // } else if (counterComputer < counterPlayer){
    //    return  alert('Gana el usuario por esta vez!!')
    // } else {
    //     return alert('its a tie')
    // }
}

console.log(game());