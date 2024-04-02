const userNameData = prompt('You must log in to continue. Please answer this question: \n 1) What is your name?');

const userSurnameData = prompt('2) What is your surname?');

const userBirthDay = prompt('3) When is your birthday?');

const userEmailData = prompt('4) Please, type your email:');

const greetingUser = alert(`Congratulations ${userSurnameData} ${userNameData}. \n You are successfully log in! ;)) \n Your birthday - ${userBirthDay} \n Your email - ${userEmailData}`);

