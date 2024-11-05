console.log('Hello World!');

function getComputerChoice (){
  const rpsArr = ["rock","paper","scissors"];
  let choiceNum = Math.floor(Math.random()*3);
  return rpsArr[choiceNum];
}

console.log(getComputerChoice());