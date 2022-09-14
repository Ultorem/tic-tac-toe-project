//game of tic tac toe

//array of cells in the game 1-9 
var cells = [0,0,0,0,0,0,0,0,0];



//cpuMove function
function cpuMove(){
    //random number between 0 and 8
    var random = Math.floor(Math.random() * 9);
    //if the cell is empty
    if(cells[random] == 0){
        //set the cell to 2
        cells[random] = 2;
        //set the cell in the html to O
        document.getElementById(random).innerHTML = "O";

        //checkWin function
        checkWin();
    }

    //if the cell is not empty
    else{
        //call the function again
        cpuMove();
    }
}





//append cells to the board id "ticTacToeBoard"
for(var i = 0; i < 9; i++){
    var cell = document.createElement("div");
    cell.className = "cell";
    cell.id = i;
    cell.addEventListener("click", function(){
        if(cells[this.id] == 0){
            cells[this.id] = 1;
            this.innerHTML = "X";
            cpuMove();
        }
    });
    document.getElementById("ticTacToeBoard").appendChild(cell);
}
                


//checkWin function
function checkWin(){
    //checks if cells with id equal winCombos are equal to 1 or 2
    for(var i = 0; i < winCombos.length; i++){
        if(cells[winCombos[i][0]] == cells[winCombos[i][1]] && cells[winCombos[i][1]] == cells[winCombos[i][2]] && cells[winCombos[i][0]] != 0){
            //if cells are equal to 1
            if(cells[winCombos[i][0]] == 1){
                //alert player wins
                alert("You win!");
            }
            //if cells are equal to 2
            else{
                //alert cpu wins
                alert("CPU wins!");
            }
        }
    }
}


//reset game function
function resetGame(){
    //set all cells to 0
    for(var i = 0; i < 9; i++){
        cells[i] = 0;
    }
    //set all cells in html to empty
    for(var i = 0; i < 9; i++){
        document.getElementById(i).innerHTML = "";
    }
}

//calls resetGame function when #resetButton is clicked
document.getElementById("resetButton").addEventListener("click", resetGame);


        



//array of winning combinations
var winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


