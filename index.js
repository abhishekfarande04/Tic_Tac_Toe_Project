const boxes=document.querySelectorAll(".box");

const gameInfo=document.querySelector(".game-info");

const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


// lets create function yto initalise the game 
function initGame() {
    currentPlayer="X";
    gameGrid=["","","","","","","","","",]; //initially all boxes are blank
    newGameBtn.classList.remove(".active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
    // but we need to update the Grid in the UI also
    boxes.forEach((box,index) => {
        box.innerText ="";
        boxes[index].style.pointerEvents="all";
    })
}

initGame();

// make HandleClick named Function contains following functionalities :
// 1. it should update the player mark (X or O ) in UI 
// 2. it should make marked Box unclickable 
// 3.after Each turn function should swap the Mark of the player (turn of player )
// 4. it should upadte the Game in Gamegrid also 
// 5 .

function swapturn() {
    if(currentPlayer === "X") {
        currentPlayer === "O";
    } else {
        currentPlayer === "X";
    }
    // UI updated
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}


function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerText=currentPlayer; // updated in UI 
        gameGrid[index]=currentPlayer; // upadted in Game Grid 

        swapturn();

        checkGameOver();
    }
}

function checkGameOver() {
    let answer="";
    
    





    newGameBtn.classList.add(".active");
}

// here we takes Boxes (list of all Boxes ) and insert an Event listener to get to know about which index box is clicked 
boxes.forEach((box,index) => {
    box.addEventListener("click", ()=> {
        handleClick(index);
        console.log("Clicked");
    })
})

newGameBtn.addEventListener("click",initGame());