const userBirthDay = prompt('Будь ласка, введіть ваш вік. \n (Наприклад: 28 років)'); 

if (userBirthDay === null || userBirthDay === '' || userBirthDay === '0') {
    alert('Вік не грає ролі ))');
} else {
    alert(`Вам ${userBirthDay}`);
}

const userLocation = prompt('Будь ласка, введіть ваше теперішнє місце проживання:');

if (!userLocation) {
    alert('Ми дотримуємося правил політики конфіденційності ;))');
} else {
    switch(userLocation) {
        case 'Лондон':
        case 'Вашингтон':
        case 'Київ': {
            alert(`Ви живете у столиці ${userLocation}`);
            break;
        }
        default: {
            alert(`Ви живете у місті ${userLocation}`);
        }
    };
}

const userFavouriteSport = prompt('Вкажіть ваш улюблений вид спорту: \n 1)Футбол; \n 2)Легка атлетика; \n 3)Бокс;');

switch(userFavouriteSport) {
    case 'Футбол': {
        alert('Круто! Мрієте стати Андрієм Шевченко?')
        break;
    }
    case 'Легка атлетика': {
        alert('Круто! Мрієте стати Ярославою Магучіх?')
        break;
    }
    case 'Бокс': {
        alert('Круто! Mpієте стати Олександром Усик?')
        break;
    }
};

if (userBirthDay === null || userLocation === null || userFavouriteSport === null) {
    let message = 'Шкода, що Ви не захотіли ввести свій';
    if (userBirthDay === null) {
        message += ' дату народження';
    }
    if (userLocation === null) {
        message += ' місто проживання';
    }
    if (userFavouriteSport === null) {
        message += ' улюблений вид спорту';
    }
    message += '.';
    alert(message);
} else {
    alert('Дякуємо, що пройшли опитування!')
}


