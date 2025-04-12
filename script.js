'use strict';
// document.querySelector('.number').textContent = 37;
// document.querySelector('.guess').value = 45;
// console.log(document.querySelector('.guess').value);
const messageFunction = function (message) {
  document.querySelector('.message').textContent = message;
};
let secretNo = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = secretNo;
document.querySelector('.check').addEventListener('click', function () {
  const userInput = Number(document.querySelector('.guess').value);
  console.log(userInput);
  // invalid
  if (!userInput) {
    messageFunction('Enter a Number 🙂');
    //document.querySelector('.message').textContent = 'Enter a Number 🙂';
    // correct number
  } else if (userInput === secretNo) {
    messageFunction('Correct Number 😉');
    //document.querySelector('.message').textContent = 'Correct Number 😉';
    // highscore condition.
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNo;
    document.querySelector('body').style.backgroundColor = '#55DD33';
    document.querySelector('.number').style.width = '30rem';
  }
  // wrong number
  else if (userInput !== secretNo) {
    if (score > 1) {
      messageFunction(
        userInput > secretNo
          ? 'Enter a lower Number 🥲'
          : 'Enter a higher Number 🥲'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageFunction('You lost the Game! 🥹');
      //document.querySelector('.message').textContent = 'You lost the Game! 🥹';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   } else if (userInput < secretNo) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Enter a higher number 🥲';
//       score--;
//       document.querySelector('.score').textContent = score;
//       //score = document.querySelector('.score').textContent;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game! 🥹';
//       document.querySelector('.score').textContent = 0;
//     }
//     // high number
//   } else if (userInput > secretNo) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Enter a lower Number 🥲';
//       score--;
//       document.querySelector('.score').textContent = score;
//       //score = document.querySelector('.score').textContent;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game! 🥹';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// again btn functionalities.
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.highscore').textContent = highscore;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  secretNo = Math.trunc(Math.random() * 20 + 1);
});
