console.log('Hello World!');
const rpsArr = ["rock","paper","scissors"];
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;
function getComputerChoice (){
  
  let computerChoice = Math.floor(Math.random()*3);
  return rpsArr[computerChoice];
}

function getHumanChoice(){
  while(!rpsArr.includes(humanChoice)){
    humanChoice = prompt("Enter rock, paper, or scissors");
    if(!rpsArr.includes(humanChoice)){
      alert("Select either rock, paper, or scissors only")
    }
  }
  return humanChoice;
}

function playRound(humanChoice,computerChoice){
  let humanIndex = rpsArr.indexOf(humanChoice);
  let computerIndex = rpsArr/indexOf(computerChoice);
  if (humanIndex === computerIndex+1) {
    console.log("you lose");
  }
  if (humanIndex === +2) {
    console.log("you win");
  }
  if (humanIndex === computerIndex) {
    console.log("you tie");
  }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection.computerSelection);

console.log(getComputerChoice());
console.log(getHumanChoice());