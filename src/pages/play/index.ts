import "./play.css";

function getPlay({ goTo }) {
  const container = document.createElement("div");
  container.classList.add("container-play");
  container.innerHTML = `
    <h1 class="title">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>

    <blue-button>¡Jugar!</blue-button>

    <div class="hands">
      <shears-hand dummy></shears-hand>
      <rock-hand dummy></rock-hand>
      <paper-hand dummy></paper-hand>
    </div>
  `;
  // Escuchando cuando el botón es presionado
  container.addEventListener("bluebuttonpressed", () => {
    // Voy a la página de jugando
    goTo("/playing");
  });
  // Devuelvo el contenedor
  return container;
}

export { getPlay };
