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
var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

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
document.querySelector('.dice').style.display = 'none';

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
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';


// Anonymous function is a function that doesn't have a name

document.querySelector('.btn-roll').addEventListener('click', function() {
    // First you need a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display the result using the jpg images
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
        // Changing the image of the element
    diceDOM.src = 'dice-' + dice + '.png';

    // Update the round score IF the rolled number was !== 1


});



