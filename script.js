var quote = "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our Light, not our Darkness, that most frightens us."
var words = poem.split(" ");

// Variables to utilize the elements by Id in html
var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

// This prompt is used to take the input and set a countdown between words
var msPerWord = prompt("How many milliseconds between words would you like?");
