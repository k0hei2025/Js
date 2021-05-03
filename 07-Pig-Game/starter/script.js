'use strict';
const player1FinalScore = document.querySelector('#score--0');
const player2FinalScore = document.querySelector('#score--1');
const initalPlayer1Score = document.querySelector('#current--0');
const initalPlayer2Score = document.querySelector('#current--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
var bool;








// rolling dice function
const rollDiceHandler = () => {

               switch (bool) {

                              case 0: {

                                             var randomNo1 = Math.trunc(Math.random() * 6 + 1);
                                             console.log(`clicked ${randomNo1}`);
                                             var randomDice = `dice-${randomNo1}.png`;
                                             diceImg.src = randomDice;
                                             initalPlayer1Score.textContent =
                                                            initalPlayer1Score.value += randomNo1;

                              }
                              break;

               case 1: {

                              var randomNo2 = Math.trunc(Math.random() * 6 + 1);
                              console.log(`clicked ${randomNo2}`);
                              var randomDice = `dice-${randomNo2}.png`;
                              diceImg.src = randomDice;
                              initalPlayer2Score.textContent =
                                             initalPlayer2Score.value += randomNo2;


               }
               break;
               }

}

// to change the player
const holdDiceHandler = () => {
               console.log("clicked hold handler")

               // checking where the bool is 1 or 0

               if (bool === 0) {
                              bool = 1;
                              console.log(bool);
                              player1FinalScore.textContent = initalPlayer1Score.value;
                              initalPlayer1Score.textContent = 0;

               } else {

                              bool = 0;
                              player2FinalScore.textContent = initalPlayer2Score.value;
                              initalPlayer2Score.textContent = 0;

                              console.log(bool)
               }

}

// to start new game
const newGameHandler = () => {

               bool = 0;


               // reset all values

               initalPlayer1Score.textContent = 0;
               initalPlayer1Score.value = 0;
               player1FinalScore.textContent = 0;
               player1FinalScore.value = 0;

               player2FinalScore.value = 0;
               player2FinalScore.textContent = 0;
               initalPlayer2Score.value = 0;
               initalPlayer2Score.textContent = 0;

}