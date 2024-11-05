console.log('Hello World!');
const rpsArr = ["rock","paper","scissors"];
let HumanChoice = "";
function getComputerChoice (){
  
  let computerChoice = Math.floor(Math.random()*3);
  return rpsArr[choiceNum];
}

function getHumanChoice(){
  while(!rpsArr.includes(HumanChoice)){
    HumanChoice = prompt("Enter rock, paper, or scissors");
    if(!rpsArr.includes(HumanChoice)){
      alert("Select either rock, paper, or scissors only")
    }
  }
  return HumanChoice;



}

console.log(getComputerChoice());
console.log(getHumanChoice());