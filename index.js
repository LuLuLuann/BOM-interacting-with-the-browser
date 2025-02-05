// retrieve html element "app" and assign it to "app"
const app = document.getElementById("app");
// retrieve html element "guesses" and assign it to "guessContainer"
const guessContainer = document.getElementById("guesses");

// create a table, append to "app"
const table = app.appendChild(document.createElement("table"));

// makes the table with a 10 * 10 grid
// loops 10 times to create 10 tr elements
// inside each row loops 10 times to create 10 td elements
// each td is assigned a unique id from 1 to 100
// text content set to it's number
for (let i = 0; i < 10; i++) {
  const tr = table.appendChild(document.createElement("tr"));
  for (let j = 1; j <= 10; j++) {
    const td = tr.appendChild(document.createElement("td"));
    td.setAttribute("id", "guess" + (i * 10 + j));
    td.textContent = i * 10 + j;
  }
}

// //prompt runs when user clicks on "start game" button
// document.getElementById("startButton").addEventListener("click", askForGuess);

// function askForGuess() {
//     let guess = prompt("Guess a number between 1 and 100!");
//     if (guess !== null) {
//       alert(`You entered: ${guess}`);
//     } else {
//       alert("You canceled the game.");
//     }
//   }

//declare number variable "ans" - set to a random number between 1 and 100
const ans = Math.round(Math.random() * 100) + 1;
// declare amount of guesses allowed variable
let count =  10;
// updates guess container with the initial guess count
guessContainer.textContent = count;

// declare guess variable, number defined by user
let guess;

setTimeout(() => {
    // prompt users for their input (guesses) from 1 to 100
    // converts user input into a number
    // calls the check function to check the number
  guess = Number(window.prompt("Guess a number between 1 and 100!"));
  check();
  // delays execution by 500ms using set timeout
}, 500);

//compare winning number to inputted number
function check() {
    // Validate input
  guess = parseInt(guess, 10);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    askForGuess(); // Recursively ask again
    return;
  }
    // checks if guess is between 1 and 100 and if they have any guesses left and if it's not the answer
  if (guess && guess <= 100 && guess >= 1 && count > 0 && guess !== ans) {
    // is the number higher or lower than the answer number
    const op = guess < ans ? "higher" : "lower";
    // calls change background to update the background color of table cells
    changeBG(guess, op);
    // calls next after 500ms if incorrect guess
   setTimeout(next, 500);
  } else {
    // if guess is correct, background of answer is green and user is alerted
    if (guess === ans) {
      changeBG(guess, null);
      alert("Nice job! You guessed correctly!");
    } else {
        // if out of guess attempts, it tells the user the correct answer
      alert(`The answer was ${ans}.`);
    }
  }
}

//compare winning number to inputted number
// determines if higher or lower
function next() {
  const op = guess < ans ? "higher" : "lower";
  guess = Number(
    //prompt user with feedback
    prompt(`Try again, it's ${op} than ${guess}.
  You have ${count} guesses left!`)
  );
// decreases the remaining guess count
  count--;
  // updates guess count in guess container
  guessContainer.textContent = count;
  // calls check function to evaluate the new guess
  check();
}

// changes the background of table cells 
function changeBG(num, op) {
  if (op === "higher") {
    // if guess is too low, the numbers from 1 to guess turn red
    for (let i = 1; i <= num; i++) {
      document.getElementById("guess" + i).style.backgroundColor = "red";
    }
  } else if (op === "lower") {
    // if guess is too high, the numbers from guess to 100 turn red
    for (let i = 100; i >= num; i--) {
      document.getElementById("guess" + i).style.backgroundColor = "red";
    }
  } else {
    // if guess is correct, it turns the correct cell green
    document.getElementById("guess" + num).style.backgroundColor = "limegreen";
  }
}




// Create your game here!



// prompt users for their input (guesses) 
// windows.prompt("Please write a number between 1 and 10"); // add input to this
// let UserGuess = g;

// input -  

//if/else statement
// decrease amount of guesses each round
// if number correct - you win // break? or return to say winner won? -- return or break
// if no more guesses - you lose
// if number incorrect:
// nested if/else
//if inputted number < winning number, log "number is higher than inputted number" 
// if inputted number > winning number, log "number is lower than inputted number"
// try again -- window.alert  or window.prompt saying higher or lower subtract the amount of attempts 

// if it's not a number -- too high or too low

// while loop -- while guess is wrong, decrease amount of guesses, prompt user for new number



// quit button = if user wants to exit the game and you have a button that lets them exit, then you would use break

// EX from Ali: 
// Example this is what I have for user winning the game

// Example:

// for (let i = 0; i < 5; i++) { 
//     if (i === 2) { 
//     continue;   / Skip the rest of the loop when i is 2
//      } 
//     console.log(i);   // This will log all numbers except 2 }
    
//     Result would be:
//     0 1 3 4

// if (userGuess === secretNumber) { alert("🎉 Congratulations! You guessed the right number!"); 
// return;

// FEEDBACK FROM ABRAHAM: 
// if/else statement? 
// 10 tries to guess a number 1 to 100
// store the number in a variable (global scope) 
// store in another variable -- amount of guesses 
// prompt the users as long as the user has more than 0 guess
// reach 0 = game over
// execute a block of code multiple times
// while loop or for loop
// while number of guesses is > 0, run the while loop, decrease the number of guesses
// try logic with 2 guesses to test it out to see if you can get out of the while loop
// prompt -- function
// code snippet given 
// while loop to loop over 10 times and check the number of guesses, compare to target number
// after tested make the number come up as a random math.random * 100 + 1 (?)
// ex: random number between 1 and 100
