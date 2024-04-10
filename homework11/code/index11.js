const userNumberN = parseInt(prompt("Будь ласка, введіть ціле число N:"));

let result = [];

for (let i = 1; i <= 100; i++) {
    
    if (i * i <= userNumberN) {
         result.push(i)
    } else {
        console.log("це число не відповідає умові");
    }
}

alert(`Введене вами число - ${userNumberN}. \n Тут всі числа, корінь яких не перевищує введене вами число: \n ${result}`);