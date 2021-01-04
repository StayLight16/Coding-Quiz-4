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

// Seconds left is 15 seconds per question:
var secondsLeft = 76;
// Variable holds interval time
var holdInterval = 0;
// Variable holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

//Timer starts when button hit & displays to user on screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up, fam!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Show the questions & choices on page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

