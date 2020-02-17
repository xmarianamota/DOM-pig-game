# DOM-pig-game
DOM-pig-game training in JS


GAME RULES:

- The game has 2 players, playing in rounds
- In each turn a player rolls a dice as many times as she whishes. Each result get added to her ROUND score.
- If the player rolls a 1, all her ROUND score gets lost. After that it's the next player's turn.
- The player can choose to 'Hold', which means that her ROUND score gets added to her GLOBAL score. After that, it's the next player's turn to play.
- The first player to reach 100 points on GLOBAL score wins the game

### Additional challenges

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
