while (true) {
    let userNumber = prompt("Please, enter a number:");

    if (!isNaN(userNumber) && userNumber !== null && userNumber !== "") {
        userNumber = parseInt(userNumber);

        if (userNumber > 1) {
            let isPrimeNumber = true;

            for (let i = 2; i <= Math.sqrt(userNumber); i++) {
                if (userNumber % i === 0) {
                    isPrimeNumber = false;
                    break;
                }
            }

            if (isPrimeNumber) {
                alert(userNumber + " is a prime number.");
            } else {
                alert(userNumber + " is not a prime number.");
            }
        } else {
            alert("The entered number must be greater than 1.");
        }
    } else {
        alert("Invalid value entered. Please enter a Number.");
    }

    if (!confirm("Do you want to continue? If so, click OK")) {
        break;
    }
}

alert("The program is complete.");
