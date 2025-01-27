class BlueButton extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
      .start-button {
        width: 322px;
        padding: 8px 0;
        background-color: #006CFC;
        border: solid 10px #001997;
        border-radius: 10px;
        color: #D8FCFC;
        font-family: "Odibee Sans", sans-serif;
        font-size: 3.5rem;
        font-weight: 400;
        letter-spacing: 5%;
        text-align: center;
        transition-property: "hover";
        transition-duration: 0.3s;
      }
      .start-button:hover {
        background-color: #398fff;
        border: solid 5px #1836cc;
      }
      @media (min-width: 1280px) {
        .start-button {
          width: 336px;
        }
      }
    `;
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.setAttribute("title", "button");
    buttonElement.classList.add("start-button");
    // Agregando el texto
    if (this.childNodes.length > 0) {
      // Obtengo el elemento de texto
      const textElement = this.childNodes[0] as HTMLParagraphElement;
      // Establezco el contenido de texto del elemento de texto al botónS
      buttonElement.textContent = textElement.textContent;
      // Eliminamos el textElement
      textElement.remove();
    }
    // Emitiendo un evento
    buttonElement.onclick = () => {
      const blueButtonPressed = new CustomEvent("bluebuttonpressed", {
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(blueButtonPressed);
    };

    // Agregando elementos al shadow
    shadow.appendChild(style);
    shadow.appendChild(buttonElement);
  }

  connectedCallback() {
    this.render();
  }
}

function registerBlueButton() {
  customElements.define("blue-button", BlueButton);
}

export { registerBlueButton };
