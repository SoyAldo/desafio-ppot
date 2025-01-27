import "./home.css";

function getHome({ goTo }) {
  const container = document.createElement("div");
  // Agrego la clase al contenedor
  container.classList.add("container-home");
  // Agrego el contenido al contenedor
  container.innerHTML = ` 
    <h1 class="title">Piedra Papel <span>ó</span> Tijera</h1>

    <blue-button>Empezar</blue-button>

    <div class="hands">
      <shears-hand dummy></shears-hand>
      <rock-hand dummy></rock-hand>
      <paper-hand dummy></paper-hand>
    </div>
  `;
  // Escuchando cuando el botón es presionado
  container.addEventListener("bluebuttonpressed", () => goTo("/play"));
  // Devuelvo el contenedor
  return container;
}

export { getHome };
