var count = document.getElementById("timer").innerHTML;
var interval = setInterval(timer, 1000);

function timer() {
    var seconds = Math.floor(count % 60);
    if (seconds < 10) {seconds = "0" + seconds};

    var minutes = Math.floor((count/60) % 60);
    if (minutes < 10) {minutes = "0" + minutes};

    var hours = Math.floor((count/(60*60)));
    if (hours < 10) {hours = "0" + hours};

    timer = `${hours} : ${minutes} : ${seconds}`
    count = count - 1;
    if (count < 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
        window.location.assign("https://musify.club/track/dl/3279731/rick-astley-never-gonna-give-you-up.mp3");
    }
    document.getElementById("timer").innerHTML = timer;
};


