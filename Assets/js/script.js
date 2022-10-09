var timerEl = document.querySelector("#timer")
var secondsLeft = 75;

var highScoreEl = document.querySelector("#highscorebutton");
var mainPageEl = document.querySelector(`#mainpage`);

mainPageEl.addEventListener('click', handlePageClick);
highScoreEl.addEventListener('click',handlePageClick);

//set a default time
timerEl.textContent = "0";
createStartPage();

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

function clearElement(element)
{
    Array.from(element.children).forEach(child => element.removeChild(child));
}


function createStartPage()
{
    clearElement(mainPageEl);
    //create the title
    var header = document.createElement("h1");
    header.setAttribute('Id', "mainheader");
    header.textContent = "Quiz Questions";
    //create the text 
    var section = document.createElement('p')
    section.setAttribute('id','regulartext');
    section.textContent = `Try to answer the following javascript \
    related coding questions. Keep in mind correct answers will\ 
    reduce the time left.`
    //create the button
    var button = document.createElement("h2");
    button.textContent = "Start Quiz";
    button.setAttribute('class', 'buttonstyling button' );
    button.setAttribute('id', 'startquizbutton');

    mainPageEl.appendChild(header);
    mainPageEl.appendChild(section);
    mainPageEl.appendChild(button);

}

var questionIndex = 0;

function startQuiz()
{
    questionIndex = 0;
    clearElement(mainPageEl);
    createQuizLayout();

}

var question;
var answers;

function createQuizLayout()
{
    console.log("creating quiz layout");
    question = document.createElement("h2");
    answers = document.createElement("ul");
    
    console.log(question);
    console.log(answers);
    mainPageEl.appendChild(question);
    mainPageEl.appendChild(answers);
    console.log(allJSQuestions[questionIndex]);
    updateQuizContent(allJSQuestions[questionIndex]);


}

function updateQuizContent(nextQuestion)
{
    clearElement(answers);
    console.log("starting question  " + nextQuestion);
    console.log(nextQuestion.questionText);
    question.TextContent = nextQuestion.questionText;
    for(var i = 0; i < nextQuestion.questionAnswers.length; i++)
    {
        var listItem = document.createElement('li');
        listItem.setAttribute('class', 'button buttonstyling, quizanswer')
        listItem.textContent = nextQuestion.questionAnswers[i];
        answers.appendChild(li);
    }

    questionIndex++;
    if(questionIndex == allJSQuestions.length )
    {
        //go to the highscores page
    }
}



function handlePageClick(event)
{
    event.stopPropogation();
  if(event.target.matches("#highscorebutton"))
  {
    console.log("hit high score button");
    //load the high score page
  }
  if(event.target.matches('#startquizbutton'))
  {
    console.log("hit start quiz button");
    startQuiz();
  }
  if(event.target.matches(".quizanswer"))
  {
    console.log("quiz answer selected");
  }
  if(event.target.matches("#mainScreenButton"))
  {
    console.log("hit main screen button");
    createStartPage();
  }
}











/*
//this object will hold the data for each question
var QuizQuestion =  {
    questionText: "",
    //this array will hold QuizAnswer objects
    questionAnswers: [],

}*/
//constructor for quizQuestion is declared outside the 
//object definition ???
class QuizQuestion {
    constructor(text, answers) {
        this.questionText = text;
        this.questionAnswers = answers;
    }
}
/*
//this object will hold the possible Answer text
//and whether that answer is right or wrong
var QuizAnswer = {
    answerText: "",
    answerCorrect: false
}
*/

//this comes from the quick actions converting
/*
    function QuizAnswer(answer,isCorrect)
    {
        this.answerText = answer;
        this.answerCorrect = isCorrect;
    }
*/
class QuizAnswer {
    constructor(answer, isCorrect) {
        this.answerText = answer;
        this.answerCorrect = isCorrect;
    }
}
/*
this array will hold all of the javaScript Questions
Questions copied from W3 Schools
    https://www.w3shools.com/quiztest/quiztest.asp?qtest=JS
*/
var allJSQuestions = [
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
            new QuizAnswer(`False`, true)
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

 