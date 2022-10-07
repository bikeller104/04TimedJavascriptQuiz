//this object will hold the data for each question
var QuizQuestion =  {
    questionText: "",
    //this array will hold QuizAnswer objects
    questionAnswers: [],

}
//constructor for quizQuestion is declared outside the 
//object definition ???
function QuizQuestion(text, answers)
{
    this.questionText = text;
    this.questionAnswers = answers;
}

//this object will hold the possible Answer text
//and whether that answer is right or wrong
var QuizAnswer = {
    answerText: "",
    answerCorrect: false
}

/*
This js 


*/