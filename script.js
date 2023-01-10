const tries = 2
let gagne, computerNumber, attempts

function playTheGame() {
    if (!confirm("You want to participate in the games?"))
        alert("Goodbye !!!")
    else {
        let input
        attempts = 0
        gagne = false
        computerNumber = Math.floor(Math.random() * 10)
        console.log(`Computer Number: ${computerNumber}`)

        do {
            do {
                input = prompt("please enter a number between 0 and 10: ")
                if(null === input)
                    return
                if (isNaN(input))
                    alert("Sorry Not a number :(")
            } while (isNaN(input) || (!isNaN(input) && (Number(input) < 0 || Number(input) > 10)))
            attempts++
            gagne = compareNumbers(input, computerNumber)
        } while (!gagne && attempts <= tries)
    }
}

function compareNumbers(userNumber, computerNumber) {
    if (userNumber == computerNumber) {
        alert("WINNER")
        return true
    } else {
        alert(userNumber > computerNumber ? "Your number is bigger than the computer's, guess again" : "Your number is smaller than the computer's, guess again")
    }
    if (attempts > tries) {
        alert("you lost")
    }
    return false
}