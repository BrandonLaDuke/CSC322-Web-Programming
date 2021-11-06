// Get three numbers and convert to an int and save in vars.
var firstNumber = parseInt(prompt("I'm going to ask you for three numbers. \n\nWhat is your first Number?"));
var secondNumber = parseInt(prompt("Thanks! \n\nWhat is your second number?"));
var thirdNumber = parseInt(prompt("Thank you! \n\nFinally, what is your third number?"));

// Report back largest number
var largestNumber = Math.max(firstNumber, secondNumber, thirdNumber);

// Place largest number in the DOM
document.getElementById("result").innerHTML = largestNumber;
