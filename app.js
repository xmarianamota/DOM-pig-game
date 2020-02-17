/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
init();

// Event Listner for clicking the button to roll the dice
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // Creates random numbers for the dice
        var dice = Math.floor(Math.random() * 6) + 1;

        // Displays the result using the jpg images
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        // Changing the image of the element
        diceDOM.src = 'dice-' + dice + '.png';

        // Swaps the player if dice number equals to 1
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            nextPlayer();
        }
    }
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
        if (scores[activePlayer] >= 20) {
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
