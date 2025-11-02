//exercise 1 try two ways- 
function guessNumber() {
    const randomNumber= Math.floor(Math.random() * 10) + 1;

let guess = null;

  while (guess !== randomNumber) {
    // Ask user for their guess
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    // Check if the guess is valid
    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Please enter a valid number between 1 and 10!");
      continue;
    }

    // Give feedback
    if (guess < randomNumber) {
      alert("Too low! Try again.");
    } else if (guess > randomNumber) {
      alert("Too high! Try again.");
    } else {
      alert("Correct! You guessed the number!");
    }
  }
}
  guessNumber();


/*let userInput  
let randomNumber = getRandomNumber(1, 10);

do {
    //parse the string to number.
    userInput = Number(prompt("Enter a number between 1 and 10"));
    //Generate random number and validate it with user input.
    if (randomNumber === userInput) {
        console.log(`you guessed correct number: ${randomNumber}`);
    }
    else {
        console.log(`Wrong! number entered : ${userInput} was not correct guess. Try again`);
    }
}
//continue the loop until userInput number matches the random number.
while (userInput !== randomNumber);*/
 

