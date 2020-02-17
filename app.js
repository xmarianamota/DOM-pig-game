/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
///////////////////////////////////////////////
//Basic variables for the game
///////////////////////////////////////////////
// This is deleted and instead incorporated in a initilization function in the end

var scores, roundScore, activePlayer, gamePlaying;
init();

    // scores = [0, 0];
    // roundScore = 0;
    // activePlayer = 0;

///////////////////////////////////////////////
// Creating the variable for the dice
// in order to create random numbers
///////////////////////////////////////////////


// math.random gives you a random number
// between 0 and 1
// .floor methd removes the decimal part of
// a number
// math.floor(math.random() *6)
//math.floor(math.random() *6) it gives you a random number between 0 and 5
//math.floor(math.random() *6 + 1) it gives you a random number between 0 and 6

//dice = Math.floor(Math.random() * 6) + 1;

// Setter
// Query the ID element on the .html and print the 
// text using textConent
// Below alters only text content
    // document.querySelector('#current-' + activePlayer).textContent = dice; 

// Below alters both text and HTLM content (makes it italic)
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// Getter
//Query an element on the .html and stores in a variable
// var x = document.querySelector('#score-0').textContent;

// Removing the dice when starting the game
// .style = css property
// after = css value
//document.querySelector('.dice').style.display = 'none';

///////////////////////////////////////////////
//Setting up event handler
///////////////////////////////////////////////

// Setting up roll dice button

// function btn() {
//     // Do something
// }

// // Callback function

// document.querySelector('.btn-roll').addEventListener('click', btn);

//btn is a callback function in this case, which means that
// is not a function called by us, but by another function

// Selecting elements by ID
    // document.getElementById('score-0').textContent = '0';
    // document.getElementById('score-1').textContent = '0';
    // document.getElementById('current-0').textContent = '0';
    // document.getElementById('current-0').textContent = '0';


// Anonymous function is a function that doesn't have a name

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // First you need a random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // Display the result using the jpg images
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        // Changing the image of the element
        diceDOM.src = 'dice-' + dice + '.png';

///////////////////////////////////////////////
// Updating Scores and Changing the Active Player
///////////////////////////////////////////////
    // Update the round score IF the rolled number was !== 1
        if (dice !== 1) {
        // Add score
            roundScore += dice; // Same as 'roundScore = roundScore + dice;'
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            nextPlayer();
        //All below was transferred to a separate function for DRY reasons
        // // Next player
        // // Using a turnary operator to switch the player
        // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // roundScore = 0; 
        // // Same thing as:
        // // if (activePlayer === 0) {
        //     // activePlayer = 1;
        //     // } else {
        //     //     activePlayer = 0;
        //     // }

        // // Setting the current score back to 0
        // document.getElementById('current-0').textContent = '0';
        // document.getElementById('current-1').textContent = '0';
        // // Removing and adding classes to add the style of the current active player
        //     // By using remove and adding feature
        //     //document.querySelector('.player-0-panel').classList.remove('active');
        //     //document.querySelector('.player-1-panel').classList.add('active');
        // // By using toggle (toogle adds/removes a class)
        // document.querySelector('.player-0-panel').classList.toggle('active');
        // document.querySelector('.player-1-panel').classList.toggle('active');

        // //Hiding the dice when a player rolls a 1
        // document.querySelector('.dice').style.display = 'none';
        }
    }
});

///////////////////////////////////////////////
// Implementing 'Hold your points button' and the DRY (Don't repeat yourself) principle
///////////////////////////////////////////////

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
     // Add 'current' score to 'global' score
        scores[activePlayer] += roundScore; // Same as 'score[activePlayer] = score[activePlayer] + roundScore'

     // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Changing the active player if the other press the hold button
     // Check if player won the game
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

document.querySelector('.btn-new').addEventListener('click', init);

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

///////// State variable
// A state variable tells us the condition of a system,
// In this example we will use it to prevent the players to continue to hit the dice
// even though there is already a winner

