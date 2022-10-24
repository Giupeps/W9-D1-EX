let playerOne: number = 55;
let playerTwo: number = 16;

let randomNumber: number = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNumber);

function winOrNot() {
  if (playerOne === randomNumber || playerTwo === randomNumber) {
    if (playerOne === randomNumber) {
      console.log("Il giocatore uno ha indovinato");
    } else {
      console.log("Il giocatore due ha indovinato");
    }
  } else if (
    Math.abs(randomNumber - playerOne) < Math.abs(randomNumber - playerTwo)
  ) {
    console.log("Nessuno ha indovinato ma il giocatore uno ci è andato vicino");
  } else {
    console.log("Nessuno ha indovinato ma il giocatore due ci è andato vicino");
  }
}

winOrNot();
