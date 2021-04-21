'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let newScore = 20;
let newHighscore = 0;

const displayMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click',function(){
    newScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = newScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
})


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) 
    {
        // document.querySelector('.message').textContent = '⛔️ No Number';
        displayMessage('⛔️ No Number');
    }
    else if (guess === secretNumber) 
    {
        // document.querySelector('.message').textContent = '🎉 Correct Number';
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if(newScore > newHighscore)
        {
            newHighscore = newScore;
            document.querySelector('.highscore').textContent = newHighscore
        }
    }

    else if(guess !== secretNumber){
        if(newScore > 1){
            // document.querySelector('.message').textContent = guess>secretNumber ? '📈 Too High':'📉 Too Low';
            displayMessage(guess>secretNumber? '📈 Too High':'📉 Too Low');
            newScore--;
            document.querySelector('.score').textContent = newScore;
        }
        else {
        //   document.querySelector('.message').textContent = '🙄 Loose the game';
        displayMessage('🙄 Loose the game');
        }
    }
});
