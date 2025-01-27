// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3sN7K":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0cf78e626b815632";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kuM8f":[function(require,module,exports,__globalThis) {
var _blueButtonComponent = require("./components/blueButtonComponent");
var _counterComponent = require("./components/counterComponent");
var _paperHandComponent = require("./components/paperHandComponent");
var _resultInformationComponent = require("./components/resultInformationComponent");
var _resultStarComponent = require("./components/resultStarComponent");
var _rockHandComponent = require("./components/rockHandComponent");
var _shearsHandComponent = require("./components/shearsHandComponent");
var _routeManager = require("./routeManager");
var _stateManager = require("./stateManager");
function main() {
    // Inicializar el estado
    (0, _stateManager.initState)();
    // Registrando todos los componentes
    (0, _blueButtonComponent.registerBlueButton)();
    (0, _rockHandComponent.registerRockHand)();
    (0, _paperHandComponent.registerPaperHand)();
    (0, _shearsHandComponent.registerShearsHand)();
    (0, _resultStarComponent.registerResultStart)();
    (0, _resultInformationComponent.registerResultInformation)();
    (0, _counterComponent.registerCounterBlack)();
    // Obteniendo el contenedor de la app
    const appElement = document.getElementById("app");
    // Si el contenedor de la app es válido
    if (appElement) // Iniciando el router
    (0, _routeManager.initRouter)(appElement);
}
main();

},{"./routeManager":"k7IYA","./components/blueButtonComponent":"3yDPk","./stateManager":"dXYp2","./components/paperHandComponent":"hEjuK","./components/resultInformationComponent":"5s0Sh","./components/resultStarComponent":"1CqXt","./components/rockHandComponent":"5nsPr","./components/shearsHandComponent":"8CpFz","./components/counterComponent":"cRZ1N"}],"k7IYA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _home = require("./pages/home");
var _play = require("./pages/play");
var _playing = require("./pages/playing");
// Rutas disponibles
const routes = [
    {
        path: /^\/$/,
        getComponent: (0, _home.getHome)
    },
    {
        path: /^\/play$/,
        getComponent: (0, _play.getPlay)
    },
    {
        path: /^\/playing$/,
        getComponent: (0, _playing.getPlayingPage)
    }
];
// Función que inicializa el componente de rutas
function initRouter(container) {
    function goTo(path) {
        // Realizo el cambio en el historial para actualizar el path en la url del navegador
        history.pushState({}, "", path);
        // Llamo al handleRoute para que realice el cambio del contenido
        handleRoute(path);
    }
    function handleRoute(route) {
        let foundedRoute;
        // Itero en las rutas para ver si alguna coincide con la ruta recibida
        for (const routeFromRoutes of routes)// Si el la ruta coincide
        if (routeFromRoutes.path.test(route)) {
            // Obtengo el componente de la ruta
            foundedRoute = routeFromRoutes.getComponent({
                goTo: goTo
            });
            break;
        }
        // Si se encontro la ruta
        if (!foundedRoute) foundedRoute = (0, _home.getHome)({
            goTo
        });
        // Verifico si el contenedor contiene algún elemento
        if (container.firstChild) // Elimino el primer elemento del contenedor
        container.firstChild.remove();
        // Agrego el componente al contenedor
        container.appendChild(foundedRoute);
    }
    // Llamo al handleRoute por primera vez
    handleRoute(location.pathname);
}

},{"./pages/home":"l5Ogl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/play":"hbEIY","./pages/playing":"dnrJt"}],"l5Ogl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHome", ()=>getHome);
var _homeCss = require("./home.css");
function getHome({ goTo }) {
    const container = document.createElement("div");
    // Agrego la clase al contenedor
    container.classList.add("container-home");
    // Agrego el contenido al contenedor
    container.innerHTML = ` 
    <h1 class="title">Piedra Papel <span>\xf3</span> Tijera</h1>

    <blue-button>Empezar</blue-button>

    <div class="hands">
      <shears-hand dummy></shears-hand>
      <rock-hand dummy></rock-hand>
      <paper-hand dummy></paper-hand>
    </div>
  `;
    // Escuchando cuando el botón es presionado
    container.addEventListener("bluebuttonpressed", ()=>goTo("/play"));
    // Devuelvo el contenedor
    return container;
}

},{"./home.css":"9Z9Ej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Z9Ej":[function() {},{}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hbEIY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPlay", ()=>getPlay);
var _playCss = require("./play.css");
function getPlay({ goTo }) {
    const container = document.createElement("div");
    container.classList.add("container-play");
    container.innerHTML = `
    <h1 class="title">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>

    <blue-button>\xa1Jugar!</blue-button>

    <div class="hands">
      <shears-hand dummy></shears-hand>
      <rock-hand dummy></rock-hand>
      <paper-hand dummy></paper-hand>
    </div>
  `;
    // Escuchando cuando el botón es presionado
    container.addEventListener("bluebuttonpressed", ()=>{
        // Voy a la página de jugando
        goTo("/playing");
    });
    // Devuelvo el contenedor
    return container;
}

},{"./play.css":"jrTjw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jrTjw":[function() {},{}],"dnrJt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPlayingPage", ()=>getPlayingPage);
var _playingCss = require("./playing.css");
var _stateManager = require("../../stateManager");
var _util = require("../../util");
function getPlayingPage({ goTo }) {
    const containerEl = document.createElement("div");
    containerEl.classList.add("playing-container");
    containerEl.innerHTML = `
    <counter-black name="main-counter" removeOnEnd></counter-black>
    <div class="hand-opponent">
      <shears-hand dummy opponent></shears-hand>
      <rock-hand dummy opponent></rock-hand>
      <paper-hand dummy opponent></paper-hand>
    </div>
    <div class="hands">
      <shears-hand></shears-hand>
      <rock-hand></rock-hand>
      <paper-hand></paper-hand>
    </div>
    <div class="result-modal">
      <result-star></result-star>
      <result-information></result-information>
      <div class="button">
        <blue-button>Volver a Jugar</blue-button>
      </div>
    </div>
  `;
    const modalEl = containerEl.querySelector(".result-modal");
    // Escuchar el evento del botón
    modalEl.addEventListener("bluebuttonpressed", ()=>{
        // Limpiar resultados
        (0, _stateManager.clearGame)();
        // Volver al inicio
        goTo("/");
    });
    // Escucho el evento de finalización del contador
    containerEl.addEventListener("counterended", ()=>{
        // Elegir de forma aleatoría la elección del oponente
        (0, _stateManager.setOpponentChose)((0, _util.getRandomChose)());
        // Obtener el resultado
        const result = (0, _util.hasPlayerWin)((0, _stateManager.getPlayerChose)(), (0, _stateManager.getOpponentChose)());
        // Incrementamos las estadísticas dependiendo del resultado
        if (result == "win") {
            (0, _stateManager.increaseWins)();
            (0, _stateManager.setGameResult)("win");
        } else if (result == "lose") {
            (0, _stateManager.increaseLosses)();
            (0, _stateManager.setGameResult)("lose");
        } else (0, _stateManager.setGameResult)("tie");
        (0, _stateManager.setGameStage)("finishing");
        // Mostrar el modal despues de 3 segundos
        setTimeout(()=>{
            showModal(modalEl);
            (0, _stateManager.setGameStage)("finished");
        }, 1000);
    });
    // Cambiar el estado del juego a seleccionando
    (0, _stateManager.setGameStage)("selecting");
    // Devuelvo el contenedor
    return containerEl;
}
function showModal(modal) {
    modal.className = "result-modal result-modal__active";
}

},{"../../stateManager":"dXYp2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./playing.css":"laglX","../../util":"j2NOL"}],"dXYp2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initState", ()=>initState);
parcelHelpers.export(exports, "getState", ()=>getState);
parcelHelpers.export(exports, "setState", ()=>setState);
parcelHelpers.export(exports, "hasListener", ()=>hasListener);
parcelHelpers.export(exports, "addListener", ()=>addListener);
parcelHelpers.export(exports, "removeListener", ()=>removeListener);
parcelHelpers.export(exports, "setPlayerChose", ()=>setPlayerChose);
parcelHelpers.export(exports, "getPlayerChose", ()=>getPlayerChose);
parcelHelpers.export(exports, "setOpponentChose", ()=>setOpponentChose);
parcelHelpers.export(exports, "getOpponentChose", ()=>getOpponentChose);
parcelHelpers.export(exports, "increaseLosses", ()=>increaseLosses);
parcelHelpers.export(exports, "increaseWins", ()=>increaseWins);
parcelHelpers.export(exports, "getGameResult", ()=>getGameResult);
parcelHelpers.export(exports, "setGameResult", ()=>setGameResult);
parcelHelpers.export(exports, "clearGame", ()=>clearGame);
parcelHelpers.export(exports, "getGameStage", ()=>getGameStage);
parcelHelpers.export(exports, "setGameStage", ()=>setGameStage);
var state;
var listeners = [];
function initState() {
    state = {
        statistics: {
            wins: 0,
            losses: 0
        },
        hand: {
            player: undefined,
            opponent: undefined
        },
        game: {
            stage: "waiting",
            result: undefined
        }
    };
    // Obtengo las estadisticas
    const statistics = localStorage.getItem("statistics");
    if (statistics) {
        const parsedStatistics = JSON.parse(statistics);
        state["statistics"] = parsedStatistics;
    }
}
function getState() {
    // Devuelvo el estado actual
    return state;
}
function setState(newState) {
    // Actualizo el estado
    state = newState;
    // Notificar a todos los oyentes del cambio
    listeners.forEach((listener)=>{
        listener.function(state);
    });
    // Persistir en el almacenamiento
    localStorage.setItem("statistics", JSON.stringify(state.statistics));
}
function hasListener(id) {
    const foundedListener = listeners.find((listener)=>listener.id == id);
    if (foundedListener) return true;
    else return false;
}
function addListener(listener) {
    if (hasListener(listener.id)) listeners = listeners.map((mapListener)=>{
        if (mapListener.id == listener.id) return listener;
        else return mapListener;
    });
    else listeners.push(listener);
}
function removeListener(id) {
    listeners = listeners.filter((listener)=>listener.id != id);
}
function setPlayerChose(chose) {
    const lastState = getState();
    setState({
        ...lastState,
        hand: {
            player: chose,
            opponent: lastState.hand.opponent
        }
    });
}
function getPlayerChose() {
    const lastState = getState();
    return lastState.hand.player;
}
function setOpponentChose(chose) {
    const lastState = getState();
    setState({
        ...lastState,
        hand: {
            player: lastState.hand.player,
            opponent: chose
        }
    });
}
function getOpponentChose() {
    const lastState = getState();
    return lastState.hand.opponent;
}
function increaseWins() {
    const lastState = getState();
    setState({
        ...lastState,
        statistics: {
            wins: lastState.statistics.wins + 1,
            losses: lastState.statistics.losses
        }
    });
}
function increaseLosses() {
    const lastState = getState();
    setState({
        ...lastState,
        statistics: {
            wins: lastState.statistics.wins,
            losses: lastState.statistics.losses + 1
        }
    });
}
function getGameResult() {
    const lastState = getState();
    return lastState.game.result;
}
function setGameResult(newResult) {
    const lastState = getState();
    setState({
        ...lastState,
        game: {
            stage: lastState.game.stage,
            result: newResult
        }
    });
}
function clearGame() {
    const lastState = getState();
    setState({
        ...lastState,
        hand: {
            player: undefined,
            opponent: undefined
        },
        game: {
            stage: "waiting",
            result: undefined
        }
    });
}
function getGameStage() {
    const lastState = getState();
    return lastState.game.stage;
}
function setGameStage(newStage) {
    const lastState = getState();
    setState({
        ...lastState,
        game: {
            stage: newStage,
            result: lastState.game.result
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laglX":[function() {},{}],"j2NOL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasPlayerWin", ()=>hasPlayerWin);
parcelHelpers.export(exports, "getRandomChose", ()=>getRandomChose);
function getRandomChose() {
    // Posibles opciones
    const optionsOrdinal = {
        0: "rock",
        1: "paper",
        2: "shears"
    };
    // Obtengo un número aleatorio del 0 al 2
    const randomOrdinal = Math.floor(Math.random() * 3);
    // Devuelvo una selección acorde al número
    return optionsOrdinal[randomOrdinal];
}
function hasPlayerWin(playerChose, opponentChose) {
    // Posibles combinaciones
    const combinations = {
        rockrock: "tie",
        rockpaper: "lose",
        rockshears: "win",
        paperrock: "win",
        paperpaper: "tie",
        papershears: "lose",
        shearsrock: "lose",
        shearspaper: "win",
        shearsshears: "tie"
    };
    // Si ambas selecciones son validas
    if (playerChose && opponentChose) // Retorno el resultado correspondiente para ambas selecciones
    return combinations[playerChose + opponentChose];
    else // De lo contrario devuelvo que perdio
    return "lose";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3yDPk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerBlueButton", ()=>registerBlueButton);
class BlueButton extends HTMLElement {
    constructor(){
        super();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
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
            const textElement = this.childNodes[0];
            // Establezco el contenido de texto del elemento de texto al botónS
            buttonElement.textContent = textElement.textContent;
            // Eliminamos el textElement
            textElement.remove();
        }
        // Emitiendo un evento
        buttonElement.onclick = ()=>{
            const blueButtonPressed = new CustomEvent("bluebuttonpressed", {
                bubbles: true,
                composed: true
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hEjuK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerPaperHand", ()=>registerPaperHand);
var _stateManager = require("../../stateManager");
var _paperSvg = require("../../images/paper.svg");
var _paperSvgDefault = parcelHelpers.interopDefault(_paperSvg);
class PaperHand extends HTMLElement {
    constructor(){
        super(), this.type = "paper";
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
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
      transform: translate(-85%, -90px) scale(1.5);
    }
    .hand__no-selected {
      transform: translate(0, 256px);
    }
    .hand__selected-opponent {
      transform: translate(-85%, -285px) scale(1.5);
    }
    `;
        // Elemento del contenedor
        const container = document.createElement("img");
        container.className = "hand";
        container.src = (0, _paperSvgDefault.default);
        // Evento al hacer clic en la mano
        container.addEventListener("click", ()=>{
            // Si la mano no es un muñeco no hacer nada
            if (!this.dummy) // Cuando hacen clic cambio la selección del jugador
            (0, _stateManager.setPlayerChose)(this.type);
        });
        // Oyente al cambio del estado
        (0, _stateManager.addListener)({
            id: this.opponent ? this.type + "-hand-opponent" : this.type + "-hand",
            function: (state)=>{
                const gameStage = state.game.stage;
                if (this.opponent) {
                    if (gameStage == "finishing") {
                        const opponentChose = state.hand.opponent;
                        if (opponentChose == this.type) container.className = "hand hand__selected-opponent";
                    }
                }
                // Si la mano es un muñeco no hacer nada
                if (!this.dummy) {
                    const playerChose = state.hand.player;
                    if (gameStage == "selecting") {
                        if (playerChose) {
                            if (playerChose == this.type) container.className = "hand hand__active";
                            else container.className = "hand hand__inactive";
                        } else container.className = "hand";
                    } else if (gameStage == "finishing") {
                        if (playerChose == this.type) container.className = "hand hand__selected";
                        else container.className = "hand hand__no-selected";
                    }
                }
            }
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
function registerPaperHand() {
    customElements.define("paper-hand", PaperHand);
}

},{"../../stateManager":"dXYp2","../../images/paper.svg":"3elHx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3elHx":[function(require,module,exports,__globalThis) {
module.exports = require("177feddc0d7a68ab").getBundleURL('171qT') + "paper.1a02f93b.svg" + "?" + Date.now();

},{"177feddc0d7a68ab":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5s0Sh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerResultInformation", ()=>registerResultInformation);
var _stateManager = require("../../stateManager");
class ResultInformation extends HTMLElement {
    constructor(){
        super();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
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
        opponentDetail.textContent = "M\xe1quina: 0";
        // Agregando oyente del estado
        (0, _stateManager.addListener)({
            id: "result-information",
            function: (state)=>{
                playerDetail.textContent = "Vos: " + state.statistics.wins;
                opponentDetail.textContent = "M\xe1quina: " + state.statistics.losses;
            }
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

},{"../../stateManager":"dXYp2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CqXt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerResultStart", ()=>registerResultStart);
var _stateManager = require("../../stateManager");
class ResultStar extends HTMLElement {
    constructor(){
        super();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
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
        (0, _stateManager.addListener)({
            id: "result-star",
            function: (state)=>{
                const lastResult = state.game.result;
                if (lastResult) {
                    if (lastResult == "win") {
                        textEl.textContent = "Ganaste";
                        if (star) container.className = "star star-win";
                    } else if (lastResult == "lose") {
                        textEl.textContent = "Perdiste";
                        if (star) container.className = "star star-lose";
                    } else {
                        textEl.textContent = "Empataste";
                        if (star) container.className = "star star-tie";
                    }
                }
            }
        });
    }
    connectedCallback() {
        this.render();
    }
}
function registerResultStart() {
    customElements.define("result-star", ResultStar);
}

},{"../../stateManager":"dXYp2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5nsPr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerRockHand", ()=>registerRockHand);
var _stateManager = require("../../stateManager");
var _rockSvg = require("../../images/rock.svg");
var _rockSvgDefault = parcelHelpers.interopDefault(_rockSvg);
class RockHand extends HTMLElement {
    constructor(){
        super(), this.type = "rock";
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
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
      transform: translate(10%, -80px) scale(1.5);
    }
    .hand__no-selected {
      transform: translate(0, 256px);
    }
    .hand__selected-opponent {
      transform: translate(10%, -275px) scale(1.5);
    }
    `;
        // Elemento del contenedor
        const container = document.createElement("img");
        container.className = "hand";
        container.src = (0, _rockSvgDefault.default);
        // Evento al hacer clic en la mano
        container.addEventListener("click", ()=>{
            // Si la mano no es un muñeco no hacer nada
            if (!this.dummy) // Cuando hacen clic cambio la selección del jugador
            (0, _stateManager.setPlayerChose)(this.type);
        });
        // Oyente al cambio del estado
        (0, _stateManager.addListener)({
            id: this.opponent ? this.type + "-hand-opponent" : this.type + "-hand",
            function: (state)=>{
                const gameStage = state.game.stage;
                if (this.opponent) {
                    if (gameStage == "finishing") {
                        const opponentChose = state.hand.opponent;
                        if (opponentChose == this.type) container.className = "hand hand__selected-opponent";
                    }
                }
                // Si la mano es un muñeco no hacer nada
                if (!this.dummy) {
                    const playerChose = state.hand.player;
                    if (gameStage == "selecting") {
                        if (playerChose) {
                            if (playerChose == this.type) container.className = "hand hand__active";
                            else container.className = "hand hand__inactive";
                        } else container.className = "hand";
                    } else if (gameStage == "finishing") {
                        if (playerChose == this.type) container.className = "hand hand__selected";
                        else container.className = "hand hand__no-selected";
                    }
                }
            }
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
function registerRockHand() {
    customElements.define("rock-hand", RockHand);
}

},{"../../stateManager":"dXYp2","../../images/rock.svg":"eI9xH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eI9xH":[function(require,module,exports,__globalThis) {
module.exports = require("cb5303b0217f5af6").getBundleURL('171qT') + "rock.43825614.svg" + "?" + Date.now();

},{"cb5303b0217f5af6":"lgJ39"}],"8CpFz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerShearsHand", ()=>registerShearsHand);
var _stateManager = require("../../stateManager");
var _shearsSvg = require("../../images/shears.svg");
var _shearsSvgDefault = parcelHelpers.interopDefault(_shearsSvg);
class ShearsHand extends HTMLElement {
    constructor(){
        super(), this.type = "shears";
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
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
        container.src = (0, _shearsSvgDefault.default);
        // Evento al hacer clic en la mano
        container.addEventListener("click", ()=>{
            // Si la mano no es un muñeco no hacer nada
            if (!this.dummy) // Cuando hacen clic cambio la selección del jugador
            (0, _stateManager.setPlayerChose)(this.type);
        });
        // Oyente al cambio del estado
        (0, _stateManager.addListener)({
            id: this.opponent ? this.type + "-hand-opponent" : this.type + "-hand",
            function: (state)=>{
                const gameStage = state.game.stage;
                if (this.opponent) {
                    if (gameStage == "finishing") {
                        const opponentChose = state.hand.opponent;
                        if (opponentChose == this.type) container.className = "hand hand__selected-opponent";
                    }
                }
                // Si la mano es un muñeco no hacer nada
                if (!this.dummy) {
                    const playerChose = state.hand.player;
                    if (gameStage == "selecting") {
                        if (playerChose) {
                            if (playerChose == this.type) container.className = "hand hand__active";
                            else container.className = "hand hand__inactive";
                        } else container.className = "hand";
                    } else if (gameStage == "finishing") {
                        if (playerChose == this.type) container.className = "hand hand__selected";
                        else container.className = "hand hand__no-selected";
                    }
                }
            }
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

},{"../../stateManager":"dXYp2","../../images/shears.svg":"c27K0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c27K0":[function(require,module,exports,__globalThis) {
module.exports = require("b1ad9085c743f8e7").getBundleURL('171qT') + "shears.3b7d0121.svg" + "?" + Date.now();

},{"b1ad9085c743f8e7":"lgJ39"}],"cRZ1N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerCounterBlack", ()=>registerCounterBlack);
class CounterBlack extends HTMLElement {
    constructor(){
        super(), this.counter = 3;
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
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
        let intervalId = setInterval(()=>{
            // Disminuyo el contador
            this.counter--;
            // Actualizo el contador
            text.textContent = this.counter + "";
            // Si el contador es igual a 0
            if (this.counter == 0) {
                // Emitir evento al finalizar el contador
                const counterEndedEvent = new CustomEvent("counterended", {
                    detail: {
                        name: this.name
                    },
                    bubbles: true
                });
                this.dispatchEvent(counterEndedEvent);
                // Eliminar el contador si se debe eliminar al finalizar
                if (this.removeOnEnd) this.remove();
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3sN7K","kuM8f"], "kuM8f", "parcelRequire94c2")

//# sourceMappingURL=index.6b815632.js.map
