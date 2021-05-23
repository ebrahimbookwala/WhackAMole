let square = document.querySelectorAll(".square");
let grid = document.querySelector("#grid");
let timeRemaining = document.querySelector("#time-left");
let score = document.querySelector("#score");
let randomSquare = {};
let result = 0;
let currentTime = timeRemaining.textContent;

let placeMole = () => {
	square.forEach((className) => {
		className.classList.remove("mole");
	});
	randomSquare = square[Math.floor(Math.random() * square.length)];
	randomSquare.classList.add("mole");

	hitPosition = randomSquare.id;

	if (currentTime === 0) {
		clearInterval(moleCount);
	}
};

square.forEach((id) => {
	id.addEventListener("mouseup", () => {
		if (id.id === hitPosition) {
			result++;
			score.textContent = result;
		}
	});
});

let countDown = () => {
	currentTime--;
	timeRemaining.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(timerId);
		alert(`Game Over! Your final score is ${result}`);
	}
};

let timerId = setInterval(countDown, 700);
let moleCount = setInterval(placeMole, 700);
