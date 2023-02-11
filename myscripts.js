let person = prompt('Choose rock, paper or scissors').toLowerCase();

let choice = ['rock','paper', 'scissors']

let random = Math.floor(Math.random() * choice.length);

function getComputerChoice(){
    
    return choice[random];
}
   console.log (getComputerChoice())

   let computer = getComputerChoice(choice[random])

 
   if (person === computer){
    console.log('Tie!')

   }else if (person === 'rock' && computer === 'paper' ) {
    console.log('You lose')

   }else if (person === 'rock' && computer === 'scissors' ) {
    console.log('You Win')

   }else if (person === 'paper' && computer === 'rock' ) {
    console.log('You Win')

   }else if (person === 'paper' && computer === 'scissors' ) {
    console.log('You lose')
   
   }else if (person === 'scissors' && computer === 'rock' ) {
    console.log('You lose')

   }else if (person === 'scissors' && computer === 'paper' ) {
    console.log('You Win')
    
   } else{
    console.log('Choose only Rock, Paper or Scissors')
   }




