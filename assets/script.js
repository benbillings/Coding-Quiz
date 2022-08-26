var exitBtn = document.querySelector("#exit-btn");
var startBtn = document.querySelector("#start-btn");
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount = 60;






// on exit button click, the page closes
exitBtn.addEventListener("click", exitPage);

function exitPage() {
    console.log(window.close());
}

// on start button click, the timer begins counting down and the quiz starts
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startTimer();
    hideButtons();
}

function startTimer() {
    timer = setInterval(function() {
        timerCount --;
        timerElement.textContent = timerCount;
        // if time runs out, display game over message
        if (timerCount <= 0) {
            alert("Time's up. Game over!");
            gameOver();
            clearInterval(timer);
        }
    }, 1000);
}

function hideButtons() {
    exitBtn.style.display = "none";
    startBtn.style.display = "none";
    
    var quizBox = document.querySelectorAll(".quiz-box");
    quizBox.style.display = "none";
}

function gameOver () {

}