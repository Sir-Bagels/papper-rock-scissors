let person = prompt('Choose rock, paper or scissors').toLowerCase();

let choice = ['rock','paper', 'scissors']

let random = Math.floor(Math.random() * choice.length);

function getComputerChoice(){
    
    return choice[random];
}
   console.log (getComputerChoice())

   let computer = getComputerChoice(choice[random])
   let computerScore = 0
   let playerScore = 0
   let tie = 0

   
   if (person === computer){
    console.log('Tie')
    tie++

   }else if (person === 'rock' && computer === 'paper' ) {
    console.log ('You lose')
    computerScore++

   }else if (person === 'rock' && computer === 'scissors' ) {
    playerScore++

   }else if (person === 'paper' && computer === 'rock' ) {
    playerScore++

   }else if (person === 'paper' && computer === 'scissors' ) {
    console.log ('You lose')
    computerScore++
   
   }else if (person === 'scissors' && computer === 'rock' ) {
    console.log ('You lose')
    computerScore++;

   }else if (person === 'scissors' && computer === 'paper' ) {
    playerScore++
    
   } else{
    alert ('Choose only Rock, Paper or Scissors')
   }



  console.log('computer ' + computerScore)
  console.log('player ' + playerScore)
  console.log('tie ' + tie)

