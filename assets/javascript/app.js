$(document).ready(function() {
    var timer = 25;
    var questions = [ {

        question: "Which of these is not a primary color?",
        answerChoices: ["red", "yellow", "green", "blue"],
        answer: 2 

    }, {
        question: "What was the fox's name in the movie, The Fox and the Hound?",
        answerChoices: ["Tod", "Copper", "Fox", "Willow"],
        answer: 0

    }, {
        question: "What year was I born in?",
        answerChoices: ["1990", "1992", "1994", "1996"],
        answer: 2

    }, { 
        question: "Which of these is not a composite number?",
        answerChoices: ["4", "6", "8", "11"],
        answer: 3

    }, {
        question: "What is the world's longest river?",
        answerChoices: ["Yangtze", "Amazon River", "Nile", "Congo"],
        answer: 1

    }, {
        question: "In the movie, 'Scarface', Tony had an addiction to...",
        answerChoices: ["Cocaine", "Weed", "Acid", "Alcohol"],
        answer: 0

    }, {
        question: "Who is Michael Jackson referring to in his song called, 'Ben'?",
        answerChoices: ["cousin", "pet rat", "brother", "son"],
        answer: 1

    }, {
        question: "What is the boiling point of water in celcius?",
        answerChoices: ["95", "98", "99", "100"],
        answer: 3

    }, {
        question: "How many continents are there in the world?",
        answerChoices: ["3", "4", "6", "7"],
        answer: 3

    }, {
        question: "Which of these is a vegan friendly dish?",
        answerChoices: ["broccoli", "salmon", "chicken", "turkey"],
        answer: 0

    }];
    // console.log(questions)

    var currentQuestion;
    var correctAnswers;
    var incorrectAnswers;
    var unanswered;
    // var userInput;
    // var time;
    // var seconds;
    var answerPicked;
    var countDown
  
    var intervalId;


    var gifs = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7", "question 8", "question 9", "question 10"];
    var message = {
        correct: "Great job, I am unbelievably proud in you",
        incorrect: "Are you kidding me? Go study more!!!!!",
        timesUp: "Why'd it take you so long?",
        end: "For the moment of truth..."
    }

    function startGame() {

        correctAnswers = 0;
        incorectAnswers = 0;
        unanswered = 0


    }

    

function answer() {
    $(".triviaChoice").on("click", function() {
        // index++;
        $("#choice1").text('');
        $("#choice2").text('');
        $("#choice3").text('');
        $("#choice4").text('');


        function myFunction() {
            var buttons = document.getElementById("wrapper");
            if (buttons.style.display === "none") {
                buttons.style.display = "block";

            } else {
                buttons.style.display = "none";
            }
        }
        // if ($(".triviaChoice").style.display == "none") {
            //         $(".triviaChoice").style.display == "blocked");
            //     }
            //     else {
            //         ($(".triviaChoice").style.display = "none")
            //     }
    })
    }
    
    // function correctChoice() {
    //     correct++;
    //     alert("Great job, I am unbelievably proud in you")
    //     console.log("correct");
    // }
    
    // function incorrectChoice() {
    //     incorrect++;
    //     alert("Are you kidding me? Go study more!!!!!");
    //     console.log("incorrect");
    // }
    
    
    
    
    
    $("#start").on("click", run);
   
function run() {
    intervalId = setInterval(decrement, 1000);
    clearInterval(intervalId);
    
}

function correctChoice() {
    correct++;
    alert("Great job, I am unbelievably proud in you")
    console.log("correct");
}

function incorrectChoice() {
    incorrect++;
    alert("Are you kidding me? Go study more!!!!!");
    console.log("incorrect");
}


function decrement() {
    timer --;

    $("#show-number").html("<h2>" + number + "</h2>");
    console.log(timer)

    if (timer === 0) {
        // stop();
        // alert("Time Up!");
        stop();
       
        
    }
}

function stop() {
    clearInterval(intervalId);
}
            $(".triviaChoice").on("click", function() {
          if(this.id === "choice1") {
            answerPicked = "1";
    
          } else if (this.id === "choice2") {
              answerPicked = "2";
    
          } else if (this.id === "choice3") {
              answerPicked = "3";
    
          } else if (this.id === "choice4") {
              answerPicked = "4";
          }
    
          //can't even remember what I was trying to do now in this situation but the letter i is not defined anywhere.................
          if ((answerPicked === "1") && (questions[i].answerChoices[0] === true)) {
              correctChoice();
    
          } else if (answerPicked === "1") {
              incorrectChoice();
          }
      
          if ((answerPicked === "2") && (questions[i].answerChoices[1] === true)) {
            correctChoice();
    
        } else if (answerPicked === "2") {
            incorrectChoice();
        }
    
        if ((answerPicked === "3") && (questions[i].answerChoices[2] === true)) {
            correctChoice();
    
        } else if (answerPicked === "3") {
            incorrectChoice();
        }
    
        if ((answerPicked === "4") && (questions[i].answerChoices[3] === true)) {
            correctChoice();
    
        } else if (answerPicked === "4") {
            incorrectChoice();
        }
    })

    // function play() {
    //     $("#start").on("click", function() {

    //         $(this).hide();
    //         newRound();
    //         // console.log("#start")
    // });


    // }
        
    

    });

// newRound();


// // need a start game function
