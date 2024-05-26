
let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
    score = scoreStr ? JSON.parse(scoreStr) :  {
         win : '0',
         lost : '0',
         tie : '0',
     };

score.displayScore = function(){
    return`No. of Matches Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`
};
showResult();
}
 

let computerChoice;

function generateComputerChoice(){
let randomNumber = Math.random() *3;
if(randomNumber > 0 && randomNumber <=1){
computerChoice = 'Bat';
// console.log('Computer choice is Bat');
} else if(randomNumber > 1 && randomNumber <=2){
 computerChoice = 'Ball';
//  console.log('Computer choice is Ball');
}
else if(randomNumber > 2 && randomNumber <=3){
computerChoice = 'Stump';
// console.log('Computer choice is Stump');
}
return computerChoice;
}

function getResult(userMove,computerMove){
if(userMove === 'Bat'){
    if(computerMove === 'Ball'){
        score.win++;
    return 'You win';
    }else if(computerMove === 'Bat'){
    score.tie++;
    return 'its a Tie';
    }else if(computerMove === 'Stump'){
        score.lost++;
    return 'Computer Win';
    
}

}else if(userMove === 'Ball'){
    if(computerMove === 'Ball'){
        score.tie++
    return  'its a tie';
    }else if(computerMove === 'Bat'){
        score.lost++;
    return  'Computer Win';
    }else if(computerMove === 'Stump'){
        score.win++;
    return  'You Win';
    }
}else if(userMove === 'Stump'){
    if(computerMove === 'Ball'){
        score.lost++;
        return 'Computer Win';
    }else if(computerMove === 'Bat'){
        score.win++;
    return 'You Win';
    }else if(computerMove === 'Stump'){
        score.tie++
    return'its a tie';
    }
}
}

function showResult(userchoice,computerAns,finalAns){
localStorage.setItem('Score',JSON.stringify(score));
document.querySelector('#user_move').innerText = userchoice ? userchoice : '';
document.querySelector('#computer_move').innerText = computerAns ? computerAns : '';
document.querySelector('#result').innerText = finalAns ? finalAns : '';
document.querySelector('#score').innerText = score.displayScore();

}