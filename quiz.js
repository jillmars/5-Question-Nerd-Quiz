function print(message) {
  document.write(message);
}
var questions = [
  ["What is the answer to Life, The Universe, and Everything?", "42"],
  ["Finish this starfleet serial number:  NCC- ", "1701"],
  ["In what does Dr. Who travel?", "tardis"],
  ["Are these the driods we're looking for?", "no"],
  ["Complete the name of Dr. Sheldon Cooper's web series: Fun With ... ", "flags"]
];

var userAnswer;
var correctNum = 0;
var incorrectNum = 0;
var correctLog = '';
var incorrectLog= '';

for (var i = 0; i < questions.length; i +=1 ) {
 userAnswer = prompt(questions[i][0]);
 if (questions[i][1] === userAnswer.toLowerCase()) {
  correctNum +=1;
  correctLog += ((i + 1) + ". " + questions[i][0] + "  " + userAnswer + "<br>");
 } else { 
  incorrectNum +=1;
  incorrectLog += ((i + 1) + ". " + questions[i][0]+ "  " + userAnswer + " The correct answer was " + questions[i][1] + "<br>")
        }
}

document.write("<h2>You answered " + correctNum + "/" + questions.length + " questions correctly<h2>");
document.write(correctLog);
document.write("<h2> and " + incorrectNum + " incorrectly<h2>");
document.write(incorrectLog);