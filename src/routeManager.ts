import { getHome } from "./pages/home";
import { getPlay } from "./pages/play";
import { getPlayingPage } from "./pages/playing";

// Interfas de ruta
interface Route {
  path: RegExp;
  getComponent: Function;
}

// Rutas disponibles
const routes: Route[] = [
  {
    path: /^\/$/,
    getComponent: getHome,
  },
  {
    path: /^\/play$/,
    getComponent: getPlay,
  },
  {
    path: /^\/playing$/,
    getComponent: getPlayingPage,
  },
];

// Función que inicializa el componente de rutas
function initRouter(container: Element) {
  function goTo(path: string) {
    // Realizo el cambio en el historial para actualizar el path en la url del navegador
    history.pushState({}, "", path);
    // Llamo al handleRoute para que realice el cambio del contenido
    handleRoute(path);
  }

  function handleRoute(route: string) {
    let foundedRoute;
    // Itero en las rutas para ver si alguna coincide con la ruta recibida
    for (const routeFromRoutes of routes) {
      // Si el la ruta coincide
      if (routeFromRoutes.path.test(route)) {
        // Obtengo el componente de la ruta
        foundedRoute = routeFromRoutes.getComponent({ goTo: goTo });
        // Freno la iteración
        break;
      }
    }
    // Si se encontro la ruta
    if (!foundedRoute) {
      foundedRoute = getHome({ goTo });
    }
    // Verifico si el contenedor contiene algún elemento
    if (container.firstChild) {
      // Elimino el primer elemento del contenedor
      container.firstChild.remove();
    }
    // Agrego el componente al contenedor
    container.appendChild(foundedRoute);
  }

  // Llamo al handleRoute por primera vez
  handleRoute(location.pathname);
}

export { initRouter };
