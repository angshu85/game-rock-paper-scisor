function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');

rock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const finalResult = determineWinner('rock', computerChoice);
    result.textContent = `Your choice: rock, Computer choice: ${computerChoice}, ${finalResult}`;
})

paper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const finalResult = determineWinner('paper', computerChoice);
    result.textContent = `Your choice: paper, Computer choice: ${computerChoice}, ${finalResult}`;
})

scissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const finalResult = determineWinner('scissors', computerChoice);
    result.textContent = `Your choice: scissors, Computer choice: ${computerChoice}, ${finalResult}`;
})

 
//FRom Codecademy
/*const getUserChoice = userInput =>{
    userInput=userInput.toLowerCase();
         if (userInput==='rock' || userInput==='paper' || userInput==='scissors'){
         return userInput;
      }else{
        return`Wrong! You wrote this,idiot: ` + userInput;
      };
  };
  
  const getComputerChoice=()=>{
    let randomNumber= Math.floor(Math.random()*3);
    
    switch(randomNumber){
      case 0:
        return 'Scissors'.toLowerCase();
        
      case 1:
        return 'Paper'.toLowerCase();
        
      case 2:
        return 'Rock'.toLowerCase();
        break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
     if (userChoice === computerChoice) {
      return 'This is a tie!'; 
    } 
    else if (userChoice === 'rock') {
      if(computerChoice==='scissors'){
        return 'You won'; 
      }else{
        return 'Computer won'; 
      }
    } 
    else if (userChoice === 'paper'){
     if(computerChoice==='rock'){
        return 'You won'; 
      }else{
        return 'Computer won'; 
      }
    }
    else if (userChoice === 'scissors'){
     if(computerChoice==='paper'){
        return 'You won'; 
      }else{
        return 'Computer won'; 
      }
    }
  }
   
  const playGame = () => {
     const userChoice = getUserChoice('rock');
     const computerChoice = getComputerChoice();
   
     console.log('You threw: ' + userChoice);
     console.log('The computer threw: ' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();*/