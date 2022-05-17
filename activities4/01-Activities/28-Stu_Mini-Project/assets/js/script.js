var startButton = document.querySelector("#start-button");
var instructions = document.querySelector("#instructions");
var container = document.querySelector("#container");
var wordArr = ["Saxophone","Eloquent","Tuxedo","Homophone"];
var timeLeft
var word;
var check;
var winCount = 0;
var lossCount = 0;


// Convert Array items to uppercase only
for (i=0; i<wordArr.length; i++) {
    wordArr[i] = wordArr[i].toUpperCase();
}

console.log(wordArr);

// This function initializes the game
function gameInit() {
    // Remove button
    startButton.style.display = "none";
    // creates instructions paragraph
    instructions.textContent = "Press a key to guess a letter.  Wrong guesses will subtract 10 seconds!";
    // select a random word from the array
    let rand = Math.random();
    let index = Math.round(rand * (wordArr.length - 1));
    word = wordArr[index];
    // Create div elements with each letter in div container
    for (i=0; i<word.length; i++) {
        const h2 = document.createElement("h2");
        h2.setAttribute("data-index", i);
        h2.setAttribute("data-letter", word[i]);
        h2.setAttribute("id", "letter")
        h2.style.borderBottom = "thick solid #000000";
        // appends the h2 element in container
        container.appendChild(h2);
    }

}

// Timer function
function timer() {
    timeLeft = 120;
    const timerEl = document.createElement("h1");
    document.body.appendChild(timerEl);
    var timeInterval = setInterval(function () {
        timeLeft--;

        if (timeLeft > 0 && check !== word){
            timerEl.textContent = `${timeLeft} seconds left.`;
            timeLeft--;
        }
        
        // winning case
        else if (check === word) {
            // update win count and display
            winCount++;
            document.getElementById("win-span").textContent = winCount;
            check = '';
            clearInterval(timeInterval);
            // remove timer content
            timerEl.remove();
            // display button again
            startButton.style.display = "block";
            // delete div container content
            const h2El = document.querySelectorAll("#letter");
            for (i=0; i<h2El.length; i++) {
                h2El[i].remove();
            }
            // Change instructions to winning congrats
            instructions.textContent = "YOU'VE WON!!!";
        }

        // Losing Case
        else {
            // update loss count and display
            lossCount++;
            document.getElementById("loss-span").textContent = lossCount;
            // remove timer content
            timerEl.remove();
            clearInterval(timeInterval);
            // display button again
            startButton.style.display = "block";
            // delete div container content
            const h2El = document.querySelectorAll("#letter");
            for (i=0; i<h2El.length; i++) {
                h2El[i].remove();
            }
            // delete instructions text content
            instructions.textContent = '';
        }
    },1000);
}



// Start button will initialize game
startButton.addEventListener("click", function(event) {
    // make sure the start button is target of event with if statement
    var element = event.target;
    if (element.matches("button") === true) {
        // call function to start game
        timer();
        gameInit();
    }
})

// Event listener for keypresses to play game
addEventListener("keydown", function(keypress) {
    let guess = keypress.key.toUpperCase();
    check = '';
    // Check if the guess is in the word string
    if (word.includes(guess)) {

        // This checks each h2 letter data to see which ones are a match
        for (i=0; i<word.length; i++) {
            let h2El = document.querySelector("#container").children[i];
            if (h2El.dataset.letter === guess) {
                h2El.textContent = h2El.dataset.letter;
                console.log(h2El);
            }
            check = check + h2El.textContent;
        }
    }
    // subtracts time for wrong guess
    else {
        timeLeft = timeLeft - 10;
    }
    
});
