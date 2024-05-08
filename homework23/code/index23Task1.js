const btnDiv = document.getElementById('btnContainer');
let url = null;

btnDiv.addEventListener('click', event => {
    if (event.target.className === 'btn-primary') {
        let currentUrl = prompt('Please, enter correct URL below:');
        if (isValidURL(currentUrl)) {
            url = currentUrl;
        } else {
            alert('Invalid URL! Please enter a correct URL.');
        }
    }
    if (event.target.className === 'btn-secondary') {
        if (url) {
            window.location = url;
        } else {
            alert('Please enter a URL first!');
        }
    }
});


function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}



