let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generating a random Target
function generateTarget()
{
    return Math.floor(Math.random()*10);
}

updateScore = winner => winner==='human'?humanScore+=0.5:computerScore+=0.5;

calculateDistance = (a,b) => Math.abs(a-b);

console.log(calculateDistance(2,9));

function compareGuesses(human,computer,target)
{
    if(human>9||human<0)
    alert('Invalid Input');
    if(calculateDistance(target,computer)<calculateDistance(target,human))
   { 
       console.log('C');
       updateScore('computer');
       return false;
   }
    else 
    {
        console.log('H');
        updateScore('human');
        return true;
    }
}

function advanceRound()
{
    currentRoundNumber++;
}
