var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setupModeButtons();
	setupSquares();

	reset();
}

function setupModeButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//ternary operation for if statements with 2 options
			//this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			if(this.textContent === "Easy"){
				numSquares = 3;
				reset();
			} else {
				numSquares = 6;
				reset();
			}
			//reset();
		//figure out how many squares to show

		//pick new colors

		//pick a new pickedColor

		//update page to reflect changes

		});
	}

}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;

			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	//reset();
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of the squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}
// easy.addEventListener("click", function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hard.addEventListener("click", function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color
	// pickedColor = pickColor();
	// //change colorDisplay to match picked Color
	// colorDisplay.textContent = pickedColor;
	// //change colors of the squares
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
	// this.textContent = "New Colors";
	// messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	//pick random number
	var random = Math.floor(Math.random() * colors.length);

	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}