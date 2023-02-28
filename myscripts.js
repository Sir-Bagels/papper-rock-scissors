

   

function playRound() {

  let computerScore = 0
   let player = 0

let choice = ['rock','paper', 'scissors']

let random = Math.floor(Math.random() * choice.length);

function getComputerChoice(){
    
    return choice[random];
}
   console.log (getComputerChoice())

   let computer = getComputerChoice(choice[random])
   let computerScore = 0

 function winner() {
   if (person === computer){
        return ('Tie!')

   }else if (person === 'rock' && computer === 'paper' ) {
    computerScore++
    return ('You lose')
    

   }else if (person === 'rock' && computer === 'scissors' ) {
    player++
    return ('You Win')

   }else if (person === 'paper' && computer === 'rock' ) {
    player++
    return ('You Win')

   }else if (person === 'paper' && computer === 'scissors' ) {
    computerScore++
    return ('You lose')
    computerScore++
   
   }else if (person === 'scissors' && computer === 'rock' ) {
    computerScore++
    return ('You lose');
    computerScore++;

   }else if (person === 'scissors' && computer === 'paper' ) {
    player++
    return ('You Win')
    
   } else{
    alert ('Choose only Rock, Paper or Scissors')
   }
  }

// function game(){
//   for (let i = 0; i < 5; i++){
//     playRound(i)
//   return console.log( computerScore + player)
    
// }
// }

// console.log(computer)
// console.log(playRound())
// console.log(computerScore)
// console.log(player)










// console.log(winner())

//   let final = winner()
//   let playScore = 0
//   // let computerScore = 0

// function game() {

//     for(i = 0; computerScore > 5; i++){
  
//   if (final === 'You lose'){
//      return computerScore += 1;
//   }
//   else {
//      return playScore += 1;
//   }
// }

//   }

//   console.log(computerScore)
