// 5 Trivia questions for the user in Y/N format

// Making a function to ask questions more easily
function ask(question) {
  this.question = question;
  var answer = prompt(question[0]).toUpperCase();
  if (answer === question[2]) {
      console.log(this.question[1] + ": " + "Answer: " + answer);
  } else if (answer === question[3]) {
      console.log(this.question[1] + ": " + "Answer: " + answer);
  } else {
      alert("Please answer in Y/N format.");
      console.log("Invalid response - Asking the question again");
      ask(this.question);
  }
}

// Arrays are in this format ["Question", "Name of Question", "Correct answer", "Wrong answer"]
var question1 = ["Does Jerry want to be in a International Hotdog Eating contest?" , "Question 1", "N", "Y"];
var question2 = ["Is 'Kanye West' one of Jerry\'s prior nicknames?" , "Question 2", "N", "Y"];
var question3 = ["Has Jerry met Dumbledore?" , "Question 3", "Y", "N"];
var question4 = ["Is Aristotle Jerry's father?" , "Question 4", "Y", "N"];
var question5 = ["Did Jerry write the description for '10 Things I Hate About You' on Netflix?" , "Question 5", "Y", "N"];

ask(question1);
ask(question2);
ask(question3);
ask(question4);
ask(question5);
