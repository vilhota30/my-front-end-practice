let userPostIndex = '';

while (userPostIndex.length !== 5 || isNaN(userPostIndex)) {
    userPostIndex = prompt('Please, enter your 5-digit zip code:');
};

const modifiedPostIndex = userPostIndex.split('').join(' ');


alert(`Thank you. Your zip code is -  ${modifiedPostIndex}`);
