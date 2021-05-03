'use strict';
console.log(document.querySelector('.between'));

// const guessNo = () => {
//   let guessNo = Math.trunc(Math.random() * 20);
//   console.log(guessNo);
//   return guessNo;
// };

// document.querySelector('.btn check').addEventListener('click', () => {

//   if ( === number) {
//     document.querySelector('message').textContent = 'correct';
//   }
//   if ()
// });
// document.querySelector('.btn').addEventListener('click', () => {

// });

// document.querySelector('.check').addEventListener('click', () => {
//   const inputValue = Number(document.querySelector('.guess').value);

//   console.log(inputValue, typeof inputValue);

//   let guessNo = Math.trunc(Math.random() * 20);

//   let number = (document.querySelector('.number').value = guessNo);

//   if (inputValue === number) {
//     document.querySelector('.message').textContent = 'correct';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//   }

//   if (inputValue < number) {
//     document.querySelector('.message').textContent = 'low';
//     document.querySelector('body').style.backgroundColor = 'blue';
//   }

//   if (inputValue > number) {
//     document.querySelector('.message').textContent = 'high';
//     document.querySelector('body').style.backgroundColor = 'red';
//   }
// });

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
// });

// use JavaScript TODO

const submit = () => {
  const inputNumber = Number(document.querySelector('.guess').value);
  var guessNo = (document.querySelector('.number').value = Math.trunc(
    Math.random() * 20
  ));

  console.log('input No', inputNumber);

  console.log('? No', guessNo);




  if (inputNumber === guessNo) {
    document.querySelector('.message').textContent = 'correct';
    document.querySelector('body').style.backgroundColor = 'green';
  }
  if (inputNumber < guessNo) {
    document.querySelector('.message').textContent = 'low';
    document.querySelector('body').style.backgroundColor = 'blue';
  }

  if (inputNumber > guessNo) {
    document.querySelector('.message').textContent = 'high';
    document.querySelector('body').style.backgroundColor = 'red';
  }
};