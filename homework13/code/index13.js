let message = prompt('Enter your string');

const chars = prompt('Enter some chars for removing');

function foo(string, arr) {
    
    for (charEl of chars) {
        message = message.split(charEl).join('')
    }
    
    return message
}

const result = foo(message, chars);

alert(result);