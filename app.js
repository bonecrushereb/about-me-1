// Prompt the use with 5 trivia questions in Y/N format

// Making a function to ask questions more easily
function ask(question) {
  var answer = prompt(question);
  console.log("The user's answer is " + answer);
}

// Assigning the questions
var q1 = "Does Jerry want to be in a International Hotdog Eating contest?";
var q2 = "Is "Kanye West" one of Jerry\'s prior nicknames?";
var q3 = "Has Jerry met Dumbledore?";
var q4 = "Is Aristotle Jerry's father?";
var q5 = "Did Jerry write the description for '10 Things I Hate About You' on Netflix?";

ask(q1);
ask(q2);
ask(q3);
ask(q4);
ask(q5);
