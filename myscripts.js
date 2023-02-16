let person = prompt('Choose rock, paper or scissors').toLowerCase();

let choice = ['rock','paper', 'scissors']

let random = Math.floor(Math.random() * choice.length);

function getComputerChoice(){
    
    return choice[random];
}
   console.log (getComputerChoice())

   let computer = getComputerChoice(choice[random])

 function winner() {
   if (person === computer){
    return ('Tie!')

   }else if (person === 'rock' && computer === 'paper' ) {
    return ('You lose')

   }else if (person === 'rock' && computer === 'scissors' ) {
    return ('You Win')

   }else if (person === 'paper' && computer === 'rock' ) {
    return ('You Win')

   }else if (person === 'paper' && computer === 'scissors' ) {
    return ('You lose')
   
   }else if (person === 'scissors' && computer === 'rock' ) {
    return ('You lose')

   }else if (person === 'scissors' && computer === 'paper' ) {
    return ('You Win')
    
   } else{
    return ('Choose only Rock, Paper or Scissors')
   }
 }
console.log(winner())

  let playScore = 0
  let computerScore = 0

function game() {

    for(i = 0; computerScore > 5; i++){
  
  if (winner('You lose')){
    computerScore += 1;
    i =+ 1;
  }
  else {
    playScore += 2
    i =+ 1;
  }
}

  }

  console.log(computerScore)
