import { getHome } from "./pages/home";
import { getPlay } from "./pages/play";
import { getPlayingPage } from "./pages/playing";

const basePath = "/desafio-ppot";

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

function getCleanPathName(path: string): string {
  const fullPath = path;

  if (fullPath.startsWith(basePath)) {
    const replacedPath = fullPath.replace(basePath, "");
    if (replacedPath == "") {
      return "/";
    } else {
      return replacedPath;
    }
  } else {
    return fullPath;
  }
}

function getRealPathName(path: string): string {
  return basePath + path;
}

// Función que inicializa el componente de rutas
function initRouter(container: Element) {
  function goTo(path: string) {
    // Realizo el cambio en el historial para actualizar el path en la url del navegador
    history.pushState({}, "", getRealPathName(path));
    // Llamo al handleRoute para que realice el cambio del contenido
    handleRoute(path);
  }

  function handleRoute(route: string) {
    const cleanPathName = getCleanPathName(route);
    let foundedRoute;
    // Itero en las rutas para ver si alguna coincide con la ruta recibida
    for (const routeFromRoutes of routes) {
      // Si el la ruta coincide
      if (routeFromRoutes.path.test(cleanPathName)) {
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
