const btn = document.getElementById("start");
const score = document.getElementById("score");
const maxX = window.innerWidth - btn.offsetWidth;
const maxY = window.innerHeight - btn.offsetHeight;

btn.addEventListener("click", startGame);

function startGame() {
	score.style.animation = "1s linear(-0.41 -16.17%, 1.27 102.94%) start, 1s linear(-0.41 -16.17%, 1.27 102.94%) positionScore";
	score.style.opacity = "1";
	score.style.fontSize = "5rem";
	btn.removeEventListener("click", startGame);
	updateScoreAndPosition();
	btn.addEventListener("click", updateScoreAndPosition);
}

function updateScoreAndPosition() {
	const currScore = score.innerHTML;
	score.innerHTML = parseInt(currScore) + 1;
	generateRandomPosition();
}

function generateRandomPosition() {
	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);
	
	btn.style.left = `${randomX}px`;
	btn.style.top = `${randomY}px`;
}
