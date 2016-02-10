// 5 Trivia questions for the user in Y/N format

// Making a function to ask questions more easily
function ask(question) {
  this.question = question;
  var answer = prompt(question[1]).toUpperCase();
  if (answer === question[2]) {
    alert('Correct!');
    console.log(this.question[0] + ': ' + 'Answer: ' + answer);
  } else if (answer === question[3]) {
    alert('Sorry, incorrect.');
    console.log(this.question[0] + ': ' + 'Answer: ' + answer);
  } else {
    alert('Please answer in Y/N format.');
    console.log('Invalid response - Asking the question again');
    ask(this.question);
  }
}

// Arrays are in this format ['Name of Question', 'Question', 'Correct answer', 'Wrong answer']
var question1 = ['Question 1', 'Does Jerry want to be in a International Hotdog Eating contest?', 'N', 'Y'];
var question2 = ['Question 2', 'Is "Kanye West" one of Jerry\'s prior nicknames?', 'N', 'Y'];
var question3 = ['Question 3', 'Has Jerry met Dumbledore?', 'Y', 'N'];
var question4 = ['Question 4', 'Is Aristotle Jerry\'s father?', 'Y', 'N'];
var question5 = ['Question 5', 'Did Jerry write the description for "10 Things I Hate About You" on Netflix?', 'Y', 'N'];

confirm('You\'re about to answer some questions. Are you ready?');
alert('Your enthusiasm is infectious.');
ask(question1);
ask(question2);
ask(question3);
ask(question4);
ask(question5);
alert('Whether you got 5 correct or 0, everyone\'s a winner here. See ya ~~.');
