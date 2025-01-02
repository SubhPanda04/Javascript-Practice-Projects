const board = document.querySelector(".board");
const square = document.querySelectorAll(".square");
const message = document.querySelector(".message");

const players = ['X' , 'O'];
let currentPLayer = players[0];
message.textContent = `X's Turn`;

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

for(let i = 0;i<square.length; i++ ) {
    square[i].addEventListener("click", ()=> {
        if(square[i].textContent !== "" || checkWinner(currentPLayer)) {
            return;
        }

        square[i].textContent = currentPLayer;

        
        if(checkWinner(currentPLayer)) {
            message.textContent = `GAME OVER . ${currentPLayer} wins the game. Please Restart`;
            return;
        }

        if(checkTieResult(currentPLayer)) {
            message.textContent = `Game is Tied. Please Restart`;
            return;
        }

        currentPLayer = currentPLayer ===players[0] ? players[1] : players[0];
        if(currentPLayer == players[0]) {
            message.textContent = `X's Turn`;
        }
        else {
            message.textContent = `O's Turn`;
        }
    })
}

function checkWinner(currentPLayer) {
    for(let i = 0; i < winningPatterns.length; i++) {
        const [a,b,c] = winningPatterns[i];

        if(square[a].textContent == currentPLayer && 
            square[b].textContent == currentPLayer &&
            square[c].textContent == currentPLayer) {
                return true;
            }
    }
    return false;
}

function checkTieResult() {
    for(let i =0; i<square.length; i++) {
        if(square[i].textContent === '') {
            return false;
        }
    } 
    return true;
}

function restartGame() {
    for(let i = 0; i<square.length; i++) {
        square[i].textContent = '';
    }
    message.textContent = `X's turn`;
    currentPLayer = players[0];
}