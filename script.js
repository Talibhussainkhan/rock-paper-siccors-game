let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")
const drawGame = () =>{
    // console.log("Game was draw!");
    msg.innerText = "Game was Draw! Play again"
    msg.style.backgroundColor = "#081b31";
    
}
   const showWinner =(userWin, userChoice,compChoice)=>{
   if(userWin){
    userScore ++;
    userScorePara.innerText = userScore;
    // console.log("you Win!");
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
    
    
   }else{
    compScore ++;
    compScorePara.innerText = compScore
    // console.log("You lose");
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
   
   } 
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
        drawGame();

    }else{
        let userWin = true;
      if(userChoice === "rock"){
       userWin =  compChoice === "paper"? false : true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors"? true:false;
    }else{
        userWin = compChoice === "rock"? false : true;
    }  
    showWinner(userWin , userChoice, compChoice); 
 }
}
choices.forEach((choice) =>{
   choice.addEventListener("click" , ()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
   })
})
