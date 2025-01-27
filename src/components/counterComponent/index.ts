class CounterBlack extends HTMLElement {
  name: string | null;
  removeOnEnd: boolean;
  counter: number = 3;
  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    // Elemento de estilos
    const style = document.createElement("style");
    style.textContent = `
    * {
      margin: 0;
      padding: 0;
    }
    .counter {
      width: 300px;
      height: 300px;
      border: 23px solid #000000;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
      margin-top: 120px;

      font-family: "Kanit", sans-serif;
      font-size: 8rem;
      font-weight: 700;
    }
    `;
    // Elemento de texto
    const text = document.createElement("p");
    text.className = "counter";
    text.textContent = this.counter + "";

    // Agregando elementos al shadow dom
    shadow.appendChild(style);
    shadow.appendChild(text);

    // Emitir evento al finalizar el contador
    let intervalId = setInterval(() => {
      // Disminuyo el contador
      this.counter--;
      // Actualizo el contador
      text.textContent = this.counter + "";
      // Si el contador es igual a 0
      if (this.counter == 0) {
        // Emitir evento al finalizar el contador
        const counterEndedEvent = new CustomEvent("counterended", {
          detail: {
            name: this.name,
          },
          bubbles: true,
        });
        this.dispatchEvent(counterEndedEvent);
        // Eliminar el contador si se debe eliminar al finalizar
        if (this.removeOnEnd) {
          this.remove();
        }
        // Parar el intervalo
        clearInterval(intervalId);
      }
    }, 1000);
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.removeOnEnd = this.hasAttribute("removeOnEnd");
    this.render();
  }
}

function registerCounterBlack() {
  customElements.define("counter-black", CounterBlack);
}

export { registerCounterBlack };
