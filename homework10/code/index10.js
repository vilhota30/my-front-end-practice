let result = [];

const userName = prompt('Вітаємо! Будь лaска, введіть своє імя:');

alert(`Добрий день, ${userName}, сьогоднійшній курс валют: \n 1$ = 26грн; \n 1£ = 32грн. \n Бажаєте перейти до операцій купівлі/продажу валюти?`);

const userValutaChoise = prompt('Будь ласка, оберіть валюту: \n 1)USA; \n 2)Британський фунт;');

const userValutaType = prompt('Будь ласка, вкажіть суму, яку вам неохідно купити. \n  До прикладу 10, 20, 30...');

switch (userValutaChoise) {
    case 'USA': {
        if(userValutaType) {
            result.push(userValutaType * 26)
            alert(`Ваша сума: ${userValutaType}$ = ${result}грн`)
        }
        break;
    }
    case 'Британський фунт': {
        if(userValutaType) {
            result.push(userValutaType * 32)
            alert(`Ваша сума: ${userValutaType}£ = ${result}грн`)
        }
        break;
    }
    default: {
        "Дякуємо, що скористалися нашою послугою!"
    }
};

