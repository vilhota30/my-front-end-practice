let numOrStr = prompt('Введіть число або рядок:');
console.log(numOrStr);

switch (numOrStr) {
     case null:
         console.log('Ви скасували');
         break;
     case '':
         console.log('Empty String');
         break;
     default:
        if (isNaN(+numOrStr)) {
            console.log('number is Ba_NaN');
        } else {
            console.log('OK!');
        }
}
