import { State } from "../../interfaces";
import { addListener } from "../../stateManager";

class ResultStar extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    // Estilos
    const style = document.createElement("style");
    style.textContent = `
    * {
      margin: 0;
      padding: 0;
    }
    .star {
      width: 363px;
      height: 362px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .svg {
      width: 363px;
      height: 362px;
    }
    .star-win svg path {
      fill: #6CB46C;
    }
    .star-lose svg path {
      fill: #DC5B49;
    }
    .star-tie svg path {
      fill:rgb(158, 158, 158);
    }
    .text-container {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      color: #ffffff;
      font-family: "Odibee Sans", sans-serif;
      font-size: 55px;
      font-weight: 400;
      text-align: center;
      letter-spacing: 5px;
    }
    `;

    // Elemento de contenedor
    const container = document.createElement("div");
    container.className = "star";
    container.innerHTML = `
    <svg class="svg" width="363" height="362" viewBox="0 0 363 362" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M209.795 62.6461L320.673 41.945L299.972 152.823L299.646 154.571L300.496 156.132L354.447 255.187L242.599 269.762L240.836 269.992L239.614 271.283L162.079 353.203L113.654 251.333L112.891 249.727L111.285 248.964L9.41472 200.539L91.3348 123.005L92.6262 121.782L92.8559 120.019L107.431 8.17082L206.486 62.122L208.047 62.9724L209.795 62.6461Z"
        fill="#6CB46C"
        stroke="black"
        stroke-width="10"
      />
    </svg>
    `;

    // Elemento de estrella vectorial
    const star = container.querySelector(".svg");

    // Elemento contenedor de texto
    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

    // Elemento de texto
    const textEl = document.createElement("p");
    textEl.className = "text";

    // Agregando texto al contenedor de texto
    textContainer.appendChild(textEl);
    // Agregando los elementos al contenedor
    container.appendChild(textContainer);
    // Agregando los elementos al shadow dom
    shadow.appendChild(style);
    shadow.appendChild(container);

    // Agrego un oyente al estado
    addListener({
      id: "result-star",
      function: (state: State) => {
        const lastResult = state.game.result;
        if (lastResult) {
          if (lastResult == "win") {
            textEl.textContent = "Ganaste";
            if (star) {
              container.className = "star star-win";
            }
          } else if (lastResult == "lose") {
            textEl.textContent = "Perdiste";
            if (star) {
              container.className = "star star-lose";
            }
          } else {
            textEl.textContent = "Empataste";
            if (star) {
              container.className = "star star-tie";
            }
          }
        }
      },
    });
  }

  connectedCallback() {
    this.render();
  }
}

function registerResultStart() {
  customElements.define("result-star", ResultStar);
}

export { registerResultStart };
