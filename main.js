console.log('Hello World!');

function getComputerChoice (){
  const rpsArr = ["rock","paper","scissors"];
  let choiceNum = math.floor(math.random()*3)+1;
  return rpsArr[choiceNum];
}

getComputerChoice();