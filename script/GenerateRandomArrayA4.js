//exercise 2
function generateRandomArray(length) {

    const randomArray = [];

    for (let i = 0; i < length; i++) {
        //generate random number from 1 to 100.
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        // Add item to array.
        randomArray.push(randomNumber); // add item to array.
    }
    return randomArray;
}

 const userInput = prompt("Enter the length of the array");

// convert to number
 const length = Number(userInput);
 const result = generateRandomArray(length);
 console.log("Generated random array based upon the user input:", result);

 /*Check for user input number.
//if (!isNaN(length) && length > 0) {
    const result = generateRandomArray(length);
    console.log("Generated random array based upon the user input:", result);
    
} else {
    console.log("Please enter a valid positive number greater than 0!");
}*/