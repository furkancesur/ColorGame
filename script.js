var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModButtons();
    setupSquares();
    reset();
}

function setupModButtons() {
    for (var i= 0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grap color of clicked square
            var clickedColor = this.style.background;
            //compare color to picked color
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //deleting message
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change the colors of squares
    for (var i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }


    h1.style.background = "#F4A82C";
}

resetButton.addEventListener("click",function () {
    reset();
})

function changeColors(color) {
    for (i=0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor () {
    //pick a "red" from 0-255;
    var r =  Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255;
    var g =  Math.floor(Math.random() * 256);
    //pick a "green" from 0-255;
    var b =  Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
// easyButton.addEventListener("click",function () {
//     hardButton.classList.remove("selected");
//     easyButton.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// })
//
// hardButton.addEventListener("click",function () {
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i<squares.length; i++){
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//     }
// })