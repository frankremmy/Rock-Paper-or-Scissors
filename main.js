const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
    return userInput;
  } else{
    console.log("Error! Please Key in either Rock, Paper or Scissors");
  }
};

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
      return"rock";
    case 1:
      return "paper";
    case 2: 
      return "scissor";
  }
}

function determineWinner (UserChoice, ComputerChoice){
  if(UserChoice === ComputerChoice){
    return "It's a tie";
  }
  if(UserChoice === "rock"){
    if(ComputerChoice === "paper"){
      return "You lost";
    }else{
      return "You win";
    }  
  }
  
  if(UserChoice === "paper"){
    if(ComputerChoice === "scissors"){
      return "You lost";
    } else{
      return "You win";
    }
  }
  
  if(UserChoice === "scissors"){
    if(ComputerChoice === "rock"){
      return "You lost";
    }else{
      return "You win";
    }
  }
}

function playGame(){
  let UserChoice = getUserChoice("rock");
  let ComputerChoice = getComputerChoice();
  console.log(`You threw: ${UserChoice}`);
  console.log(`The computer threw: ${ComputerChoice}`);
  console.log(determineWinner(UserChoice,ComputerChoice));
};

playGame();
