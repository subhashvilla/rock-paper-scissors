const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resetScore = document.getElementById("reset")
let computerMove;
const totalScore = document.querySelector(".js-score");
let score = 0;

const obj = {
    rock: "scissor",
    paper: "rock",
    scissors: "paper"
}
function computerChoice() {
    const randomnumber = Math.random();

    if (randomnumber >= 0 && randomnumber <= 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomnumber >= 1 / 3 && randomnumber <= 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomnumber >= 2 / 3 && randomnumber <= 1) {
        computerMove = 'scissors';
    }

}


function matchChoices(userChoice) {

    if (userChoice === computerMove) {
        alert(`Your Choice is ${userChoice} and computer choice is ${computerMove} You tie  `
        )

    }
    else if (obj[userChoice] == computerMove) {
        alert(`Your Choice is ${userChoice} and computer choice is ${computerMove}.
         You won🥳 `)
        score++;
        totalScore.textContent = `Score is : ${score}`
    }
    else {
        alert(`Your Choice is ${userChoice} and computer choice is ${computerMove} You loose`)
    }
    computerChoice();

}

rock.addEventListener('click', () => {
    matchChoices('rock');
})

paper.addEventListener('click', () => {
    matchChoices('paper');
})

scissors.addEventListener('click', () => {
    matchChoices('scissors');
})


resetScore.addEventListener('click', () => {
    computerChoice();
    score = 0;
    totalScore.textContent = `Score is : ${score}`

})


computerChoice();