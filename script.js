'use strict';
let i = 0;
let score = 0;
let hightScore = Number(document.querySelector('.highscore').textContent);
console.log(`hight score= ${hightScore}`);
console.log(document.querySelector('.number').textContent);
let randNumber = Math.floor(Math.random() * 100);
console.log('Rand number', randNumber);

document.querySelector('.again').addEventListener('click', function () {
  randNumber = Math.floor(Math.random() * 100);
  console.log('Rand number', randNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = `---`;
  score = 0;
  hightScore = Number(document.querySelector('.highscore').textContent);
  i = 0;
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please input number';
    return;
  }
  if (Number(guess) === randNumber) {
    document.querySelector('.message').textContent = ' Correct Number!';
    document.querySelector('.number').textContent = randNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (i < 100) {
      document.querySelector(`.score`).textContent = 100 - i;
    } else {
      document.querySelector(`.score`).textContent = 0;
    }
    score = document.querySelector('.label-score').textContent;

    console.log('-------', hightScore);
    console.log(score, typeof score);
    let core = score.split(' ');
    console.log(core);
    if (hightScore < Number(core[2])) {
      document.querySelector('.highscore').textContent = core[2];
    }
  } else if (Number(guess) >= randNumber) {
    document.querySelector('.message').textContent = 'to hight';
    i++;
  } else {
    document.querySelector('.message').textContent = 'to low';
    i++;
  }
});
