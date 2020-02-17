/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

////////////////// CHALLENGE INSTRUCTIONS ///////////////////////
// 1. A player looses its ENTIRE score when it rolls two 6 in a row. 
// After that, it's the next player's turn. 
// (Hint: always save the previous dice roll in a separate variable).

// 2. Add an input field to the html where players can set the winning score, 
// so that they can change the predefined score of 100. 
// (Hint: you can read that value with the .value property in the JavaScript. 
// This is a good opportunity to use google to figure this out

// 3. Add another dice to the game, so there are two dices. 
// The players looses its current score when ONE of them is a 1. 
// (Hint: you will need CSS to position the second dice, 
// so take a look at the CSS code for the first one). 

var scores, roundScore, activePlayer, gamePlaying, previousDice, winnerScore;

init();

// Event Listner for clicking the button to roll the dice
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // Creates random numbers for the dice
        var dice = Math.floor(Math.random() * 6) + 1;
        //var dice = 6;

        // Displays the result using the jpg images
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        // Changing the image of the element
        diceDOM.src = 'dice-' + dice + '.png';

        if(dice === 6 && previousDice === 6) {
            scores[activePlayer] = 0; 
            document.querySelector('#score-' + activePlayer).textContent = '0';
            alert("Two 6 in a row! Sorry, you just lost all your points.");
            nextPlayer();
        } else if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            nextPlayer();
        }
        previousDice = dice; 
    }
});

// Creating a button so users can set their own winner score from the GUI

document.querySelector('.btn-winner-score').addEventListener('click', function() {
    winnerScore = parseInt(prompt("Set a new number for the winner score", "For example, 20"));
});


// Event Listner for clicking the button to hold the number

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
     // Adds 'current' score to 'global' score
        scores[activePlayer] += roundScore; 
     // Updates the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Changing the active player if the other press the hold button
     // Checks if player won the game
        if (scores[activePlayer] >= winnerScore) {
         // Displaying "Winner" as a text
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        // Removing the dice from the game
            document.querySelector('.dice').style.display = 'none';
        // Adding the "winner" style from CSS to the active player
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }

});

// Implementing a "next player function" that can be repeated in both functions
    function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

// Implementing a "new game" button
document.querySelector('.btn-new').addEventListener('click', init);



// Creating a initilization function 
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; 
    winnerScore = 100;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Removing the winner class from both players
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // Removing the active class from both players
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // Set the first player as the active player (because the game is being initilized again)
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
