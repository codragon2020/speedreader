# speedreader

This project is a speed reading utility. I found myself compelled to work on it, because speed reading has always been an interest of mine. At one point, I took a speed reading course from the University of Richmond.

## Description

This app was built with html, css, and javascript. This project helped me learn how to leverage the DOM by creating and styling elements with javascript. I also learned how to utilize a timer to create a countdown for visual effect. 

The user is engaged through a prompt that will ask for a specific input measured by milliseconds. This input is passed as an argument into the speedRead function. 

There are two functions making the app possible. First is a countdown timer, called 'prepareReader', that prepares the reader for what is about to happen. The second is a function called, called 'speedRead', and it is 'called' when the first countdown expires in which case the split string (i.e. the quote presented) will be passed into the DOM one word at a time. 

Based on the input provided by the user, the quote will pass the words at pace set by the value in milliseconds. Conversion: 1000ms = 1s. Ex. if the user input is '1000' that will equate to 1 sec interval in between words being passed. 

## Link to the site

https://codragon2020.github.io/speedreader/

This site was made with:

![alt text tech stack](./images/html-css-js.png)

