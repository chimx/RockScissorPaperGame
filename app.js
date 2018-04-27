let rsp = {
    //Declare Global Variable
    numTried: 0, 
    computerScore: 0,
    playerScore: 0,
    msg: '',
    
    //Rock function if the player picks rock
    rock: function(computerChoice){        
        if(computerChoice===0){
            return this.msg = "You're Tired! The Computer Played: ROCK. ";
        }
        else if(computerChoice===1){
            this.playerScore++;
           return this.msg = 'You WON! The Computer Played: SCISSOR';
        }
        else if(computerChoice === 2){
            this.computerScore++;
           return this.msg = 'You LOST! The Computer Played: PAPER';
        }
    },
    
    //Scissor function if the player picks rock
    scissor: function(computerChoice){        
        if(computerChoice===0){
            this.playerScore++;
           return this.msg = 'You LOST! The Computer Played: ROCK';
        }
        else if(computerChoice===1){
            return this.msg = "You're Tired! The Computer Played: SCISSOR";
        }
        else if(computerChoice === 2){
            this.computerScore++;
           return this.msg = 'You WON! The Computer Played: PAPER';
        }
    },
    
    //Paper function if the player picks rock
    paper: function(computerChoice){        
        if(computerChoice===0){
            this.playerScore++;
           return this.msg = 'You WON! The Computer Played: ROCK';
        }
        else if(computerChoice === 1){
            this.computerScore++;
           return this.msg = 'You LOST! The Computer Played: SCISSOR';
        }
        else if(computerChoice===2){
            return this.msg = "You're Tired! The Computer Played: PAPER";
        }
    }    
}

//Listern for a click event
let rockbtn = document.getElementById("rockbtn");
let scissorbtn = document.getElementById("scissorbtn");
let paperbtn = document.getElementById("paperbtn");

function printmsg(){
    let balAttempt = 5 - rsp.numTried;
    document.getElementById("computerscore").innerHTML = "Computer: " + rsp.computerScore;
    document.getElementById("playerscore").innerHTML = "Player: " + rsp.playerScore;
    document.getElementById("result").innerHTML = rsp.msg;
     
    if(balAttempt > 1){
         document.getElementById("turnsleft").innerHTML = "Your Have " + balAttempt + " Attempts left!";
     }  
    else if(balAttempt === 1){
         document.getElementById("turnsleft").innerHTML = "Your Have " + balAttempt + " Attempt left!";        
    }
    else{
         document.getElementById("turnsleft").innerHTML = "Your Have NO Attempts left!";
    }
    
}
//Listern for a click event on rock
rockbtn.addEventListener('click',function(){
    if(rsp.numTried > 5){
       document.getElementById("result").innerHTML = "You've Tried 5 times please Reset and start again!"
    }
    else{
        let compChoice =Math.floor(Math.random() * 3);
        rsp.rock(compChoice);
        rsp.numTried++;
        printmsg();
    }
});
//Listern for a click event on Scissor
scissorbtn.addEventListener('click',function(){
    if(rsp.numTried > 5){
       document.getElementById("result").innerHTML = "You've Tried 5 times please Reset and start again!"
    }
    else{
        let compChoice =Math.floor(Math.random() * 3);
        rsp.scissor(compChoice);
        rsp.numTried++;
        printmsg();
    }
});
//Listern for a click event on paper
paperbtn.addEventListener('click',function(){
    if(rsp.numTried > 5){
       document.getElementById("result").innerHTML = "You've Tried 5 times please Reset and start again!"
    }
    else{
        let compChoice =Math.floor(Math.random() * 3);
        rsp.paper(compChoice);
        rsp.numTried++;
        printmsg();
    }
});

