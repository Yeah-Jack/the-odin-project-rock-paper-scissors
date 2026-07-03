const randomNumber = () => Math.floor(Math.random() * 3);

const convertNumberToString = (n) => {
	if (n === 0) {
		return "rock";
	} else if (n === 1) {
		return "paper";
	} else if (n === 2) {
		return "scissors";
	} else {
		console.log("Invalid number:", n);
	}
};

const getHumanChoice = () => prompt("Rock, paper, or scissors?").toLowerCase();
const getComputerChoice = () => convertNumberToString(randomNumber());

let humanScore = 0;
let computerScore = 0;

const playRound = (humanSelection, computerSelection) => {
	if (humanSelection === "rock" && computerSelection === "scissors") {
		humanScore++;
		return "You win! Rock beats Scissors";
	} else if (humanSelection === "rock" && computerSelection === "paper") {
		computerScore++;
		return "You lose! Paper beats Rock";
	} else if (humanSelection === "rock" && computerSelection === "rock") {
		return "It's a draw!";
	}

	if (humanSelection === "paper" && computerSelection === "rock") {
		humanScore++;
		return "You win! Paper beats Rock";
	} else if (humanSelection === "paper" && computerSelection === "scissors") {
		computerScore++;
		return "You lose! Scissors beats Paper";
	} else if (humanSelection === "paper" && computerSelection === "paper") {
		return "It's a draw!";
	}

	if (humanSelection === "scissors" && computerSelection === "paper") {
		humanScore++;
		return "You win! Scissors beats Paper";
	} else if (humanSelection === "scissors" && computerSelection === "rock") {
		computerScore++;
		return "You lose! Rock beats Scissors";
	} else if (
		humanSelection === "scissors" &&
		computerSelection === "scissors"
	) {
		return "It's a draw!";
	}
};

const playGame = () => {
	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		console.log("You chose", humanSelection);
		console.log("The computer chose", computerSelection);
		console.log(playRound(humanSelection, computerSelection));
		console.log("You: ", humanScore, "\nComputer:", computerScore);
	}
	console.log("Final score\nYou: ", humanScore, "\nComputer:", computerScore);
};

playGame();
