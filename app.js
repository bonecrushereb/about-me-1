// Making a guessing game with 5 questions with different responses if they answer it correctly or not

// Assigning the questions
var q1 = "What's up?";
var q2 = "Not much?";
var q3 = "Cool. You're cool?";
var q4 = "Thanks?";

/* var questionsArray = [q1, q2, q3, q4];
var questionCount = function(var i = 0; i < questionsArray.length; i++) {
  return questionsArray[i];
}; */

// Making a function to ask the questions more easily
function ask(question) {
  var answer = prompt(question);
  console.log("The user's answer is " + answer);
}

ask(q1);
ask(q2);
ask(q3);
ask(q4);

q1;
