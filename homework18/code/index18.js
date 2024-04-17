function printChoice() {
    let userNumber = null;

    for (let i = 0; i < 10; i++) {

        userNumber = prompt('Please enter a number greater than 100');
        if (userNumber === null || isNaN(userNumber)) {
            alert("Invalid input.Please, enter a number");
            return;
        }
        userNumber = parseInt(userNumber);
        if (userNumber > 100) {
            alert(`Congrats! Your number: ${userNumber}`);
            return;
        }
        alert("Number entered is not greater than 100. Please try again.");
    }
    alert("Maximum number of iterations. Please, try again later");
}

printChoice();
