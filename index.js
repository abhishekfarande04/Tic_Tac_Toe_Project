const boxes=document.querySelectorAll(".box");

const gameInfo=document.querySelector(".game-Info");

const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions= {
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
};


// lets create function yto initalise the game 
function initGame() {
    currentPlayer="X";
    gameGrid=["","","","","","","","","",];
    newGameBtn.classList.remove(".active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}

initGame();
// here we takes Boxes (list of all Boxes ) and insert an Event listener to get to know about which index box is clicked 

boxes.forEach((box,index) => {
    box.addEventListener("click", ()=> {
        handleClick(index);
    })
})

