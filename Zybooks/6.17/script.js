// Your solution goes here 



function playGuessingGame(numToGuess, totalGuesses=10){
    let count = 0

    number = prompt("Enter a number between 1 and 100.")
    count++
    while(number != numToGuess && count < totalGuesses+1){
        console.log(number)
        if(number == null){ 
            return 0;
        }
        else if(isNaN(number)){
            number = prompt(`Please enter a number.`);
        }
        else if(number < numToGuess){
            number = prompt(`${number} is too small. Guess a larger number.`); count++;
        }
        else if(number > numToGuess){
            number = prompt(`${number} is too large. Guess a smaller number.`); count++;
        }
    
    }

    if(number != numToGuess){
        return 0
    }

    return count;
}
