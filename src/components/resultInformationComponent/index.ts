import { State } from "../../interfaces";
import { addListener } from "../../stateManager";

class ResultInformation extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
    * {
      margin: 0;
      padding: 0;
    }
    .score {
      margin: 0 auto;
      width: 259px;
      background-color: #ffffff;
      border: 10px solid #000000;
      border-radius: 10px;
    }
    .score__title {
      color: #000000;
      font-family: "Odibee Sans", sans-serif;
      font-size: 55px;
      font-weight: 400;
      text-align: center;
    }
    .score__details {
      margin: 16px 30px;
    }
    .score__datail {
      color: #000000;
      font-family: "Odibee Sans", sans-serif;
      font-size: 45px;
      font-weight: 400;
      text-align: right;
    }
    `;
    // Elemento del contenedor
    const container = document.createElement("div");
    container.className = "score";
    // Elemento de título
    const title = document.createElement("h2");
    title.className = "score__title";
    title.textContent = "Puntaje";
    // Elemento de contenedor de detalles
    const details = document.createElement("div");
    details.className = "score__details";
    // Elemento de detalles del jugador
    const playerDetail = document.createElement("p");
    playerDetail.className = "score__datail";
    playerDetail.textContent = "Vos: 0";
    // Elemento de detalles del oponente
    const opponentDetail = document.createElement("p");
    opponentDetail.className = "score__datail";
    opponentDetail.textContent = "Máquina: 0";

    // Agregando oyente del estado
    addListener({
      id: "result-information",
      function: (state: State) => {
        playerDetail.textContent = "Vos: " + state.statistics.wins;
        opponentDetail.textContent = "Máquina: " + state.statistics.losses;
      },
    });

    // Agregando detalles al contenedor de detalles
    details.appendChild(playerDetail);
    details.appendChild(opponentDetail);
    // Agregando contenido al contenedor general
    container.appendChild(title);
    container.appendChild(details);
    // Agregando elementos al shadow dom
    shadow.appendChild(style);
    shadow.appendChild(container);
  }

  connectedCallback() {
    this.render();
  }
}

function registerResultInformation() {
  customElements.define("result-information", ResultInformation);
}

export { registerResultInformation };
