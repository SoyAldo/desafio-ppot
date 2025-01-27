import {
  clearGame,
  getOpponentChose,
  getPlayerChose,
  increaseLosses,
  increaseWins,
  setGameResult,
  setGameStage,
  setOpponentChose,
} from "../../stateManager";
import { getRandomChose, hasPlayerWin } from "../../util";

function getPlayingPage({ goTo }): HTMLDivElement {
  const containerEl = document.createElement("div");
  containerEl.classList.add("playing-container");
  containerEl.innerHTML = `
    <counter-black name="main-counter" removeOnEnd></counter-black>
    <div class="hand-opponent">
      <shears-hand dummy opponent></shears-hand>
      <rock-hand dummy opponent></rock-hand>
      <paper-hand dummy opponent></paper-hand>
    </div>
    <div class="hands">
      <shears-hand></shears-hand>
      <rock-hand></rock-hand>
      <paper-hand></paper-hand>
    </div>
    <div class="result-modal">
      <result-star></result-star>
      <result-information></result-information>
      <div class="button">
        <blue-button>Volver a Jugar</blue-button>
      </div>
    </div>
  `;
  const modalEl = containerEl.querySelector(".result-modal") as HTMLDivElement;

  // Escuchar el evento del botón
  modalEl.addEventListener("bluebuttonpressed", () => {
    // Limpiar resultados
    clearGame();
    // Volver al inicio
    goTo("/");
  });

  // Escucho el evento de finalización del contador
  containerEl.addEventListener("counterended", () => {
    // Elegir de forma aleatoría la elección del oponente
    setOpponentChose(getRandomChose());
    // Obtener el resultado
    const result = hasPlayerWin(getPlayerChose(), getOpponentChose());
    // Incrementamos las estadísticas dependiendo del resultado
    if (result == "win") {
      increaseWins();
      setGameResult("win");
    } else if (result == "lose") {
      increaseLosses();
      setGameResult("lose");
    } else {
      setGameResult("tie");
    }
    setGameStage("finishing");
    // Mostrar el modal despues de 3 segundos
    setTimeout(() => {
      showModal(modalEl);
      setGameStage("finished");
    }, 1000);
  });

  // Cambiar el estado del juego a seleccionando
  setGameStage("selecting");
  // Devuelvo el contenedor
  return containerEl;
}

function showModal(modal: HTMLDivElement) {
  modal.className = "result-modal result-modal__active";
}

export { getPlayingPage };
