let currentPlayer = 'X';
const board = [];

function startGame() {
  const gameBoard = document.getElementById('gameBoard');
  gameBoard.innerHTML = '';
  currentPlayer = 'X';

  for (let i = 0; i < 3; i++) {
    //matriz externa (linhas)
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      //matriz interna (colunas)
      board[i][j] = '';
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i
      cell.dataset.col = j
      cell.addEventListener("click", handleClick)
      gameBoard.appendChild(cell)
      
    }
  }
}

function handleClick(e) {
 const row = e.target.dataset.row;
 const col = e.target.dataset.col;

 if(board[row][col]===""){
  board[row][col] = currentPlayer
  e.target.textContent = currentPlayer

  if(checkWin(currentPlayer)){
    setTimeout(() => {
      alert(`Jogador ${currentPlayer} venceu!`)
    }, 250);
    disableBoard();
    return
  }

  currentPlayer = currentPlayer === "X" ? "O":"X"
 }
}

function checkWin(player) {
  // Verifica linhas
 for(let i=0; i<3; i++){
  if(board[i][0] === player && board[i][1] === player && board[i][2] === player){
    return true;
  }
 }

  // Verifica colunas
 for(let j=0; j<3; j++){
  if(board[0][j] === player && board[1][j] === player && board[2][j] === player){
    return true;
  }
 }  

  // Verifica diagonais
  if(board[0][0] === player && board[1][1] === player && board[2][2] === player ||
     board[0][2] === player && board[1][1] === player && board[2][0] === player
    ) {
     return true;
  }
   
 return false
}

function disableBoard() {
const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

startGame();