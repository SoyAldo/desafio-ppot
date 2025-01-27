import { Chose, Result } from "../interfaces";

function getRandomChose(): Chose {
  // Posibles opciones
  const optionsOrdinal = {
    0: "rock",
    1: "paper",
    2: "shears",
  };
  // Obtengo un número aleatorio del 0 al 2
  const randomOrdinal = Math.floor(Math.random() * 3);
  // Devuelvo una selección acorde al número
  return optionsOrdinal[randomOrdinal];
}

function hasPlayerWin(playerChose: Chose, opponentChose: Chose): Result {
  // Posibles combinaciones
  const combinations = {
    rockrock: "tie",
    rockpaper: "lose",
    rockshears: "win",
    paperrock: "win",
    paperpaper: "tie",
    papershears: "lose",
    shearsrock: "lose",
    shearspaper: "win",
    shearsshears: "tie",
  };
  // Si ambas selecciones son validas
  if (playerChose && opponentChose) {
    // Retorno el resultado correspondiente para ambas selecciones
    return combinations[playerChose + opponentChose];
  } else {
    // De lo contrario devuelvo que perdio
    return "lose";
  }
}

export { hasPlayerWin, getRandomChose };
