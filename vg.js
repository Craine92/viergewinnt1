document.addEventListener("DOMContentLoaded", function (){

    let current = 0;
    const players = ["rot", "gelb"];
    const hint = document.getElementById("hint");
    const gameboard = document.getElementById("gameboard");

        function markField(e) {
            const field = e.target;
            field.setAttribute("aria-label", players[current]);
            field.setAttribute("disabled", "disabled");
            field.classList.add(players[current]);
            current = 1 - current;
            hint.innerText = "Spieler " + players[current] + " ist am Zug";
        }


  gameboard.addEventListener("click", markField);
});