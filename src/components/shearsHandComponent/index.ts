import { Chose, State } from "../../interfaces";
import { addListener, setPlayerChose } from "../../stateManager";
import handImage from "../../images/shears.svg";

class ShearsHand extends HTMLElement {
  type: Chose = "shears";
  dummy: boolean;
  opponent: boolean;
  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
    .hand {
      transform: translate(0, 0);
      transition: transform 0.6s ease;
    }
    .hand__active {
      transform: translate(0, -50px);
    }
    .hand__inactive { 
      transform: translate(0, 40px);
      opacity: 0.5;
    }
    .hand__selected {
      transform: translate(120%, -80px) scale(1.5);
    }
    .hand__no-selected {
      transform: translate(0, 256px);
    }
    .hand__selected-opponent {
      transform: translate(120%, -275px) scale(1.5);
    }
    `;
    // Elemento del contenedor
    const container = document.createElement("img");
    container.className = "hand";
    container.src = handImage;

    // Evento al hacer clic en la mano
    container.addEventListener("click", () => {
      // Si la mano no es un muñeco no hacer nada
      if (!this.dummy) {
        // Cuando hacen clic cambio la selección del jugador
        setPlayerChose(this.type);
      }
    });

    // Oyente al cambio del estado
    addListener({
      id: this.opponent ? this.type + "-hand-opponent" : this.type + "-hand",
      function: (state: State) => {
        const gameStage = state.game.stage;
        if (this.opponent) {
          if (gameStage == "finishing") {
            const opponentChose = state.hand.opponent;
            if (opponentChose == this.type) {
              container.className = "hand hand__selected-opponent";
            }
          }
        }
        // Si la mano es un muñeco no hacer nada
        if (!this.dummy) {
          const playerChose = state.hand.player;
          if (gameStage == "selecting") {
            if (playerChose) {
              if (playerChose == this.type) {
                container.className = "hand hand__active";
              } else {
                container.className = "hand hand__inactive";
              }
            } else {
              container.className = "hand";
            }
          } else if (gameStage == "finishing") {
            if (playerChose == this.type) {
              container.className = "hand hand__selected";
            } else {
              container.className = "hand hand__no-selected";
            }
          }
        }
      },
    });

    // Agregando elementos al shadow dom
    shadow.appendChild(style);
    shadow.appendChild(container);
  }

  connectedCallback() {
    this.dummy = this.hasAttribute("dummy");
    this.opponent = this.hasAttribute("opponent");
    this.render();
  }
}

function registerShearsHand() {
  customElements.define("shears-hand", ShearsHand);
}

export { registerShearsHand };
