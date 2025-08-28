let currentChips = 1000;
let currentBetAmount = 0;


function setBetAmt(betAmount) {
    const betDispDiv = document.getElementById("betamt-div");
    betDispDiv.innerHTML = "";
    console.log("selected bet amount " + betAmount);

    //create element
    const betAmountText = document.createElement("div");
    betAmountText.id = "cycle-";
    betAmountText.textContent = betAmount;
    currentBetAmount = betAmount;
    betDispDiv.appendChild(betAmountText);
}

function deal() {
    currentChips -= currentBetAmount;
    const chipsDiv = document.getElementById("chipsDiv");
    chipsDiv.textContent = "Current chips: " + currentChips;
}

