let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const drawGame = () =>{
    console.log("Game was draw!");
}

const genCompChoice = ()=>{
    const option = ["rock" ,"paper","scissors"];
     const randomIdx = Math.floor(Math.random()*3);
     return option[randomIdx];   
}





const playGame = (userChoice) =>{
    console.log("user Choices =" , userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice =" , compChoice);
    if(userChoice === compChoice){

    }
}










choices.forEach((choice) =>{
   choice.addEventListener("click" , ()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
   })
})
