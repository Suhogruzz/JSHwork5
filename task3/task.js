var holes = document.querySelectorAll('.hole');
var dead = 0;
var miss = 0;

function whackAMole() {
    holes.forEach(hole => {
        hole.addEventListener("click", () => {
            if (hole.classList.contains('hole_has-mole')) {
                    dead++;
                    document.getElementById('dead').textContent = dead;
                    if (dead >= 10) {
                        alert("Вы выиграли");
                        window.location.reload();
                    }
            }
            else {
                miss++;
                document.getElementById('lost').textContent = miss;
                if (miss >= 5) {
                    alert("Вы проиграли");
                    window.location.reload();
                }
            }
        })
    })
}


whackAMole();