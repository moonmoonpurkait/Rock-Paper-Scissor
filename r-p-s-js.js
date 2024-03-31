let userscore = 0;
let computerscore = 0;
let choice = ["rock", "paper", "scissors"];

const choices = document.querySelectorAll(".choice");

const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random()*3);
    return choice[randomIndex];
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);        
    });
});
//accessing object
const message = document.querySelector("#message");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
//function
const showWinner = (userWin , userchoice , computerChoice ) =>{
    if(userWin)
    {
        console.log("You Win!");
        message.innerText = `You Win! Your ${userchoice} beats ${computerChoice}`;
        userscore += 1;
        userScore.innerText = userscore;
        message.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose.");
        message.innerText = `You Lose. ${computerChoice} beats your ${userchoice}`;
        computerscore += 1;
        computerScore.innerText = computerscore;
        message.style.backgroundColor = "red";
    }
};
const showDraw = () =>{
    console.log("Game was Draw.")
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "rgb(3, 3, 43)";
};
const playGame = (userchoice) => {
    console.log(userchoice);
    const computerChoice = generateComputerChoice();
    console.log(computerChoice);
    if( userchoice === computerChoice )
    {
        showDraw();
    }
    else 
    {
        let userWin = true;
        if( userchoice === "rock" )
        { //paper , scissors
            userWin = computerChoice === "paper" ? false : true ;
        }
        else if( userchoice === "paper" )
        { //rock , scissors
            userWin = computerChoice === "scissors" ? false : true ;
        }
        else 
        { //rock , paper
            userWin = computerChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userchoice , computerChoice);
    }
};
