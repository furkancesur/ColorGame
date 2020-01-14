var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click",function () {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})

hardButton.addEventListener("click",function () {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click",function () {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change the colors of squares
    for (var i = 0; i< squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

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