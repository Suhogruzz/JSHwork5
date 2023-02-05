var clicks = 0;
var cookie = document.getElementById('cookie');

function clicker() {
    cookie.addEventListener('mousedown',() => {
        clicks++;
        document.getElementById('clicker__counter').textContent = clicks;
        cookie.setAttribute('width', "220");
        cookie.setAttribute('height', "150");
    })
    cookie.addEventListener('mouseup',() => {
        cookie.setAttribute('width', "200");
        cookie.setAttribute('height', "");
    })
};

clicker();