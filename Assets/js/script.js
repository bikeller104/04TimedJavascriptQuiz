var timerEl = document.querySelector("#timer")
var secondsLeft = 75;

//set a default time
timerEl.textContent = "0";


function setTimer()
{
    var timerInterval = setInterval(startTimer, 1000);
}

function startTimer()
{
    secondsLeft--;
    timerEl.TextContent = secondsLeft;

    if(secondsLeft == 0)
    {
        clearInterval();
        //write a function 
        //to go to the high score screen
    }
}

function createStartPage()
{
    
}

















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

new QuizAnswer(answer, isCorrect)
{
    this.answerText = answer;
    this.answerCorrect = isCorrect;
}
/*
this array will hold all of the javaScript Questions
Questions copied from W3 Schools
    https://www.w3shools.com/quiztest/quiztest.asp?qtest=JS
*/
var alJSQuestions = [
    //question 1
    new QuizQuestion(
        "Inside which HTML element do we put the JavaScript?",
        [
            new QuizAnswer("<js>", false),
            new QuizAnswer("<scripting>", false),
            new QuizAnswer("<javascript>", false),
            new QuizAnswer("script", true)
        ]
    ),    
    //question 2
    new QuizQuestion(
        `What is the correct JavaScript syntax to change the content of the HTML element \n
        <p id="demo"> This is a demonstration. </p>\n ?`,
        [
            new QuizAnswer(`#demo.innerHTML = "Hello World!";`,false),
            new QuizAnswer(`document.getElementByName("p").innerHTML= "Hello World!";`,false),
            new QuizAnswer(`document.getElement("p").innerHTML = "Hello World!";`,false),
            new QuizAnswer(`document.getElementById("demo).innerHTML = "Hello World!";`)
        ]
    ),
    //question 3
    new QuizQuestion (
        `Where is the correct place to insert a JavaScript?`,
        [
            new QuizAnswer(`The <body> section`,true),
            new QuizAnswer(`Both the <head> section and the <body> section are correct`,false),
            new QuizAnswer(`The <head> section`,false)
        ]
    ),
    //question 4
    new QuizQuestion(
        `What is the correct syntax for refering to an external script called "xxx.js"?`,
        [
        new QuizAnswer(`<script href="xxx.js">`, false),
        new QuizAnswer(`<script src="xxx.js">`, true),
        new QuizAnswer(`<script name="xxx.js">`, false)
        ]
    ),
    //question 5
    new QuizQuestion(
        `The external JavaScript file must contain the <script> tag.`,
        [
            new QuizAnswer(`True`, false),
            new QuizAnswer(`False`, ture)
        ]
    ),
    //skip 6
    //question 7
    new QuizQuestion(
        `How do you create a function in JavaScript?`,
        [
            new QuizAnswer(`function:myFunction()`,false),
            new QuizAnswer(`function = myFunction()`,false),
            new QuizAnswer(`function myFunction(),`, true)
        ]
    )
]

 