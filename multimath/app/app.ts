function startGame() {
  // starting a new game

  let playerName: string = "Prince";
  logPlayer(playerName);

  let messagesElement = document.getElementById('messages');
  messagesElement!.innerText = "Welcome to MultiMath! Starting new game...";

}

// #region CONTROL FLOW BASED TYPE ANALYSIS
function checkType(variable: string | number) {
  if (typeof variable === 'string') {
    console.log('typeof argument =', typeof variable);
  }
  else {
    console.log('typeof argument =', typeof variable);
  }
  let check: string = "";
  variable = check || 2;
  console.log(variable);
}
//#endregion

// #region NEVER TYPE
function returnMe(variable: string) {
  if (typeof variable === 'string') {
    console.log('typeof argument =', typeof variable);
    return variable;
  }
  else {
    console.log('typeof argument =', typeof variable);
    return variable;
  }
}
// #endregion

function logPlayer(name: string) {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

let a: string;    
console.log(a!.length);