//Para que sea más legible el códgo
const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;

//flujo de control 
let modoJuego = prompt("ELIGE UNA DE LAS SIGUIENTES OPCIONES:\n1 para: Jugada de la PC en forma aleatoria\n2 para: Elección de la jugada de la PC")

if (modoJuego == 1) {
    singlePlayer();
} else if (modoJuego == 2) {
    twoPlayers();
}



//Jugada de la PC en forma aleatoria
function singlePlayer() {
    // 1 es piedra | 2 es papel | 3 es tijera
    let player = prompt("Elije: 1 para ✊ | 2 para 🧻 | 3 para ✂️");
    let pc = Math.floor(Math.random() * 3) + 1;

    //llamada de la función combate
    combate(player, pc);
}



//Elección de la jugada de la PC
function twoPlayers() {
    // 1 es piedra | 2 es papel | 3 es tijera;
    let player = prompt("Player\nElije: 1 para ✊ | 2 para 🧻 | 3 para ✂️");
    let pc = prompt("Pc\nElije: 1 para ✊ | 2 para 🧻 | 3 para ✂️");

    //llamada de la función combate
    combate(player, pc);
}


function combate(player, pc) {

    // muestra la elección
    if (player == PIEDRA) {
        alert("Elejiste ✊")
    } else if (player == PAPEL) {
        alert("Elejiste 🧻")
    } else if (player == TIJERA) {
        alert("Elejiste ✂️")
    } else {
        alert("Elejiste PERDER")
    }

    if (pc == PIEDRA) {
        alert("pc elige ✊")
    } else if (pc == PAPEL) {
        alert("pc elige 🧻")
    } else if (pc == TIJERA) {
        alert("pc elige ✂️")
    }

    // COMBATE
    if (player == PIEDRA) {

        if (player == PIEDRA && pc == PIEDRA) {
            alert("Empate")

        } else if (player == PIEDRA && pc == PAPEL) {
            alert("Gana PC")

        } else if (player == PIEDRA && pc == TIJERA) {
            alert("Gana Player")

        }

    } else if (player == PAPEL) {

        if (player == PAPEL && pc == PIEDRA) {
            alert("Gana Player")

        } else if (player == PAPEL && pc == PAPEL) {
            alert("Empate")

        } else if (player == PAPEL && pc == TIJERA) {
            alert("Gana PC")
        }

    } else if (player == TIJERA) {

        if (player == TIJERA && pc == PIEDRA) {
            alert("Gana PC")

        } else if (player == TIJERA && pc == PAPEL) {
            alert("Gana player")

        } else if (player == TIJERA && pc == TIJERA) {
            alert("Empate")
        }
    }

}
