// Quote by Marianne Williamson
var quote = "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our Light, not our Darkness, that most frightens us."
var words = quote.split(" ");

// Variables to utilize the elements by Id in html
var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0; 

// This prompt is used to take the input and set a countdown between words
var msPerWord = prompt("How many milliseconds between words would you like?");

// Added a countdown so the reader knows when the speed reader will occur
function prepareReader() {
    var timeLeft = 4;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = (timeLeft - 1) + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }

// Main function getting called after the countdown expires
// This function will pass the words from the quote, one at a time, into the main element of the DOM
// Each word will be passed in at the rate of the user's input into the prompt
function speedRead() {
    mainEl.append(bodyEl);
  
    var quoteInterval = setInterval(function() {
      if (words[i] === undefined) {
        clearInterval(quoteInterval);
      } else {
        mainEl.textContent = words[i];
        i++;
      }
  
    }, msPerWord);
  }
  
  prepareReader();