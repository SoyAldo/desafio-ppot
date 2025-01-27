import { registerBlueButton } from "./components/blueButtonComponent";
import { registerCounterBlack } from "./components/counterComponent";
import { registerPaperHand } from "./components/paperHandComponent";
import { registerResultInformation } from "./components/resultInformationComponent";
import { registerResultStart } from "./components/resultStarComponent";
import { registerRockHand } from "./components/rockHandComponent";
import { registerShearsHand } from "./components/shearsHandComponent";
import { initRouter } from "./routeManager";
import { initState } from "./stateManager";

function main() {
  // Inicializar el estado
  initState();
  // Registrando todos los componentes
  registerBlueButton();
  registerRockHand();
  registerPaperHand();
  registerShearsHand();
  registerResultStart();
  registerResultInformation();
  registerCounterBlack();
  // Obteniendo el contenedor de la app
  const appElement = document.getElementById("app");
  // Si el contenedor de la app es válido
  if (appElement) {
    // Iniciando el router
    initRouter(appElement);
  }
}

main();
