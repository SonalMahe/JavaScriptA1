//exercise 1 try two ways- 
/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let userInput  
let randomNumber = getRandomNumber(1, 9);

do {
    //parse the string to number.
    userInput = Number(prompt("Enter a number between 1 and 9:"));
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
 

let gameNum= 3;
let userNum= prompt("Guess the number between 1 to 10");

while(userNum != gameNum){
    userNum= prompt("You entered wrong number,Guess again");
}

console.log("Congratulations ,you entered right number");