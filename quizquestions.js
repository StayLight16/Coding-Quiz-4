//Setting up var with array and object for quiz questions

var questions = [ 
    {
        title:"Commonly used data types DO NOT include",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "all of the above"
    },
    {
        title: "Arrays in Javascript can be used to store ____",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    }, 
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    }, 
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"

    },

];

//Declaring variables for use

var score = 0;
var questionIndex = 0;

//Declaring variables & DOM method stuff
var wrapper = document.querySelector("#wrapper");
var questionsDiv = document.querySelector("#questionsDiv");
var timer = document.querySelector("#startTime");
var currentTime = document.querySelector("#currentTime");





