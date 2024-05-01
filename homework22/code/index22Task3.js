const button = document.getElementById('btn');

let colorChanged = false;
let previousColor;

button.className = 'btn';
button.style.width = '180px';
button.style.height = '80px';

button.onclick = () => {
    if (!colorChanged) {

        button.style.backgroundColor = 'yellow';
        previousColor = 'green';

    } else {

        button.style.backgroundColor = previousColor;
    }
    
    colorChanged = !colorChanged;
};


