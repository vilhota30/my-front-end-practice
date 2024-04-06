let userNumber = prompt('Please, enter Three-digit numbers to confirm your login:');

while (isNaN(userNumber) || userNumber.length !== 3) {
    userNumber = prompt('Please enter a three-digit number:');
}

const allDigitsSame = userNumber[0] === userNumber[1] && userNumber[1] === userNumber[2];

const anyDigitsSame = userNumber[0] === userNumber[1] || userNumber[1] === userNumber[2] || userNumber[0] === userNumber[2];

if (allDigitsSame || anyDigitsSame ) {
    alert('ALL numbers are The Same. \n Please enter a three-digit number in which ALL digits are Different');
} else {
    alert('Your account login has been successfully verified ;))' );
};

