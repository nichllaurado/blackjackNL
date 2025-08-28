

function setBetAmt(betAmount) {
    const betDispDiv = document.getElementById("betamt-div");
    betDispDiv.innerHTML = "";


    //create element
    const betAmountText = document.createElement("div");
    //betAmountText.id = "cycle-" + i;
    betAmountText.textContent = betAmount;
}

