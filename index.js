var readlineSync = require('readline-sync');
var chalk = require('chalk');

//List of questions
var questionSet = [
  {
    question: 'Where do Amaan live? ',
    answer: 'mumbai',
  },
  {
    question: "What is Amaan's age? ",
    answer: '23',
  },
  {
    question: "What is Amaan's favourite food? ",
    answer: 'momos',
  },
];

//Score of user
var score = 0;

var username = readlineSync.question('What is your name? ');

console.log(chalk.blue(`Welcome ${username} to DO YOU KNOW Amaan? `));

//Function of check answers
function checkAnswer(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer) {
    console.log(chalk.green('Correct Answer!'));
    score = score + 1;
  } else {
    console.log(chalk.red('Wrong Answer!'));
    score = score - 1;
  }
  console.log(chalk.yellow(`Current Score: ${score}`));
  console.log('--------------------');
}

for (var i = 0; i < questionSet.length; i++) {
  var currentQuestion = questionSet[i];
  checkAnswer(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bgWhite.black(`Your Final Score: ${score}`));
