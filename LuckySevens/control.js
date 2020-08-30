var startingBet;
var totalRolls = 0;
var highestAmount = 0;
var rollCount = 0;

function verifyBet() {
    var amount = document.forms["sevens"]["bet"].value;
    if (amount == "" || isNaN(amount) || amount <= 0) {
        alert("Starting bet must be a positive number.");
        document.forms["sevens"]["bet"].focus();
        return false;
    }
    startingBet = amount;
    highestAmount = amount;
    playGame(amount);
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again";
    document.getElementById("startingBet").innerText = startingBet;
    document.getElementById("totalRolls").innerText = totalRolls;
    document.getElementById("highestAmount").innerText = highestAmount;
    document.getElementById("rollCount").innerText = rollCount;
    return false;
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame(amount) {
    while(amount > 0) {
        var roll1 = rollDice();
        var roll2 = rollDice();
        totalRolls++;

        if (roll1 + roll2 == 7) {
            amount += 4;
        } else {
            amount -= 1;
        }

        if (amount > highestAmount) {
            highestAmount = amount;
            rollCount = totalRolls;
        }
    }
}