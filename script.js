let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const drawGame = () =>{
    console.log("Game was draw!");
    msg.innerText = "Draw!"
    
}
   const showWinner =(userWin)=>{
   if(userWin){
    console.log("you Win!");
    msg.innerText = "You Win!";
    
   }else{
    console.log("You lose");
    msg.innerText = "You lose";
   
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
    showWinner(userWin); 
 }
}










choices.forEach((choice) =>{
   choice.addEventListener("click" , ()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
   })
})
