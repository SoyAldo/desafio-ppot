
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
class $c0e21458271779e9$var$BlueButton extends HTMLElement {
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
function $c0e21458271779e9$export$90a89d6a62efbf7e() {
    customElements.define("blue-button", $c0e21458271779e9$var$BlueButton);
}


class $41ac92af46bd1b02$var$CounterBlack extends HTMLElement {
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
function $41ac92af46bd1b02$export$932d2bc3ee411d31() {
    customElements.define("counter-black", $41ac92af46bd1b02$var$CounterBlack);
}


var $29df163bee395f9c$var$state;
var $29df163bee395f9c$var$listeners = [];
function $29df163bee395f9c$export$f6196a6c6bb539b4() {
    $29df163bee395f9c$var$state = {
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
        $29df163bee395f9c$var$state["statistics"] = parsedStatistics;
    }
}
function $29df163bee395f9c$export$50fdfeece43146fd() {
    // Devuelvo el estado actual
    return $29df163bee395f9c$var$state;
}
function $29df163bee395f9c$export$42fffed799c298bb(newState) {
    // Actualizo el estado
    $29df163bee395f9c$var$state = newState;
    // Notificar a todos los oyentes del cambio
    $29df163bee395f9c$var$listeners.forEach((listener)=>{
        listener.function($29df163bee395f9c$var$state);
    });
    // Persistir en el almacenamiento
    localStorage.setItem("statistics", JSON.stringify($29df163bee395f9c$var$state.statistics));
}
function $29df163bee395f9c$export$19ee3f99af4f7fe9(id) {
    const foundedListener = $29df163bee395f9c$var$listeners.find((listener)=>listener.id == id);
    if (foundedListener) return true;
    else return false;
}
function $29df163bee395f9c$export$f03a6b845d3fb58b(listener) {
    if ($29df163bee395f9c$export$19ee3f99af4f7fe9(listener.id)) $29df163bee395f9c$var$listeners = $29df163bee395f9c$var$listeners.map((mapListener)=>{
        if (mapListener.id == listener.id) return listener;
        else return mapListener;
    });
    else $29df163bee395f9c$var$listeners.push(listener);
}
function $29df163bee395f9c$export$b03e9483f936dccb(id) {
    $29df163bee395f9c$var$listeners = $29df163bee395f9c$var$listeners.filter((listener)=>listener.id != id);
}
function $29df163bee395f9c$export$8a53af7937af50c5(chose) {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    $29df163bee395f9c$export$42fffed799c298bb({
        ...lastState,
        hand: {
            player: chose,
            opponent: lastState.hand.opponent
        }
    });
}
function $29df163bee395f9c$export$405cca5e540a4f94() {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    return lastState.hand.player;
}
function $29df163bee395f9c$export$494aa97a8dc951d8(chose) {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    $29df163bee395f9c$export$42fffed799c298bb({
        ...lastState,
        hand: {
            player: lastState.hand.player,
            opponent: chose
        }
    });
}
function $29df163bee395f9c$export$5da148232eb6d904() {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    return lastState.hand.opponent;
}
function $29df163bee395f9c$export$5b44276be8c12f51() {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    $29df163bee395f9c$export$42fffed799c298bb({
        ...lastState,
        statistics: {
            wins: lastState.statistics.wins + 1,
            losses: lastState.statistics.losses
        }
    });
}
function $29df163bee395f9c$export$97f621b8f4df37e4() {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    $29df163bee395f9c$export$42fffed799c298bb({
        ...lastState,
        statistics: {
            wins: lastState.statistics.wins,
            losses: lastState.statistics.losses + 1
        }
    });
}
function $29df163bee395f9c$export$f033fd4493b3d4fc() {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    return lastState.game.result;
}
function $29df163bee395f9c$export$7b5638b361cea39f(newResult) {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    $29df163bee395f9c$export$42fffed799c298bb({
        ...lastState,
        game: {
            stage: lastState.game.stage,
            result: newResult
        }
    });
}
function $29df163bee395f9c$export$823928a8a208cbf3() {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    $29df163bee395f9c$export$42fffed799c298bb({
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
function $29df163bee395f9c$export$89bcfa6dd1f75972() {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    return lastState.game.stage;
}
function $29df163bee395f9c$export$8dbaaef513bd85ea(newStage) {
    const lastState = $29df163bee395f9c$export$50fdfeece43146fd();
    $29df163bee395f9c$export$42fffed799c298bb({
        ...lastState,
        game: {
            stage: newStage,
            result: lastState.game.result
        }
    });
}


var $c3c200f6edfdbe3c$exports = {};
$c3c200f6edfdbe3c$exports = new URL("paper.bfeeb6dd.svg", import.meta.url).toString();


class $2fc289f4e6b19882$var$PaperHand extends HTMLElement {
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
        container.src = (0, (/*@__PURE__*/$parcel$interopDefault($c3c200f6edfdbe3c$exports)));
        // Evento al hacer clic en la mano
        container.addEventListener("click", ()=>{
            // Si la mano no es un muñeco no hacer nada
            if (!this.dummy) // Cuando hacen clic cambio la selección del jugador
            (0, $29df163bee395f9c$export$8a53af7937af50c5)(this.type);
        });
        // Oyente al cambio del estado
        (0, $29df163bee395f9c$export$f03a6b845d3fb58b)({
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
function $2fc289f4e6b19882$export$78bbb62fe65659fe() {
    customElements.define("paper-hand", $2fc289f4e6b19882$var$PaperHand);
}



class $cc83e9b2bfde8070$var$ResultInformation extends HTMLElement {
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
        (0, $29df163bee395f9c$export$f03a6b845d3fb58b)({
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
function $cc83e9b2bfde8070$export$869c785ff93ee5aa() {
    customElements.define("result-information", $cc83e9b2bfde8070$var$ResultInformation);
}



class $bc674be6178d6fd7$var$ResultStar extends HTMLElement {
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
        (0, $29df163bee395f9c$export$f03a6b845d3fb58b)({
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
function $bc674be6178d6fd7$export$ff08c57b75608ef4() {
    customElements.define("result-star", $bc674be6178d6fd7$var$ResultStar);
}



var $e3da1388590a7262$exports = {};
$e3da1388590a7262$exports = new URL("rock.c42fac40.svg", import.meta.url).toString();


class $be17a4e45f2cf2aa$var$RockHand extends HTMLElement {
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
        container.src = (0, (/*@__PURE__*/$parcel$interopDefault($e3da1388590a7262$exports)));
        // Evento al hacer clic en la mano
        container.addEventListener("click", ()=>{
            // Si la mano no es un muñeco no hacer nada
            if (!this.dummy) // Cuando hacen clic cambio la selección del jugador
            (0, $29df163bee395f9c$export$8a53af7937af50c5)(this.type);
        });
        // Oyente al cambio del estado
        (0, $29df163bee395f9c$export$f03a6b845d3fb58b)({
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
function $be17a4e45f2cf2aa$export$de3d7e43df27a01b() {
    customElements.define("rock-hand", $be17a4e45f2cf2aa$var$RockHand);
}



var $30fe7000e1d60d3d$exports = {};
$30fe7000e1d60d3d$exports = new URL("shears.f66935bc.svg", import.meta.url).toString();


class $10b9c74a44a6ee6f$var$ShearsHand extends HTMLElement {
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
        container.src = (0, (/*@__PURE__*/$parcel$interopDefault($30fe7000e1d60d3d$exports)));
        // Evento al hacer clic en la mano
        container.addEventListener("click", ()=>{
            // Si la mano no es un muñeco no hacer nada
            if (!this.dummy) // Cuando hacen clic cambio la selección del jugador
            (0, $29df163bee395f9c$export$8a53af7937af50c5)(this.type);
        });
        // Oyente al cambio del estado
        (0, $29df163bee395f9c$export$f03a6b845d3fb58b)({
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
function $10b9c74a44a6ee6f$export$525ad9e44225a0cd() {
    customElements.define("shears-hand", $10b9c74a44a6ee6f$var$ShearsHand);
}


function $164f4f3e4dbe12b4$export$bb1ac3c63ee0edba({ goTo: goTo }) {
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


function $5420eb1e522c4ecd$export$ed9ce0b27ba2f412({ goTo: goTo }) {
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



function $7a01227ec68604c5$export$88721388b7ec442a() {
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
function $7a01227ec68604c5$export$8e74830b66508e56(playerChose, opponentChose) {
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


function $636c0f7e7b3bd97f$export$b60a175db2594d35({ goTo: goTo }) {
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
        (0, $29df163bee395f9c$export$823928a8a208cbf3)();
        // Volver al inicio
        goTo("/");
    });
    // Escucho el evento de finalización del contador
    containerEl.addEventListener("counterended", ()=>{
        // Elegir de forma aleatoría la elección del oponente
        (0, $29df163bee395f9c$export$494aa97a8dc951d8)((0, $7a01227ec68604c5$export$88721388b7ec442a)());
        // Obtener el resultado
        const result = (0, $7a01227ec68604c5$export$8e74830b66508e56)((0, $29df163bee395f9c$export$405cca5e540a4f94)(), (0, $29df163bee395f9c$export$5da148232eb6d904)());
        // Incrementamos las estadísticas dependiendo del resultado
        if (result == "win") {
            (0, $29df163bee395f9c$export$5b44276be8c12f51)();
            (0, $29df163bee395f9c$export$7b5638b361cea39f)("win");
        } else if (result == "lose") {
            (0, $29df163bee395f9c$export$97f621b8f4df37e4)();
            (0, $29df163bee395f9c$export$7b5638b361cea39f)("lose");
        } else (0, $29df163bee395f9c$export$7b5638b361cea39f)("tie");
        (0, $29df163bee395f9c$export$8dbaaef513bd85ea)("finishing");
        // Mostrar el modal despues de 3 segundos
        setTimeout(()=>{
            $636c0f7e7b3bd97f$var$showModal(modalEl);
            (0, $29df163bee395f9c$export$8dbaaef513bd85ea)("finished");
        }, 1000);
    });
    // Cambiar el estado del juego a seleccionando
    (0, $29df163bee395f9c$export$8dbaaef513bd85ea)("selecting");
    // Devuelvo el contenedor
    return containerEl;
}
function $636c0f7e7b3bd97f$var$showModal(modal) {
    modal.className = "result-modal result-modal__active";
}


const $60311f4dbdf661c8$var$basePath = "/desafio-ppot";
// Rutas disponibles
const $60311f4dbdf661c8$var$routes = [
    {
        path: /^\/$/,
        getComponent: (0, $164f4f3e4dbe12b4$export$bb1ac3c63ee0edba)
    },
    {
        path: /^\/play$/,
        getComponent: (0, $5420eb1e522c4ecd$export$ed9ce0b27ba2f412)
    },
    {
        path: /^\/playing$/,
        getComponent: (0, $636c0f7e7b3bd97f$export$b60a175db2594d35)
    }
];
function $60311f4dbdf661c8$var$getCleanPathName(path) {
    const fullPath = location.pathname;
    if (fullPath.startsWith($60311f4dbdf661c8$var$basePath)) {
        const replacedPath = fullPath.replace($60311f4dbdf661c8$var$basePath, "");
        if (replacedPath == "") return "/";
        else return replacedPath;
    } else return fullPath;
}
// Función que inicializa el componente de rutas
function $60311f4dbdf661c8$export$cf7ee87ede64229c(container) {
    function goTo(path) {
        // Realizo el cambio en el historial para actualizar el path en la url del navegador
        history.pushState({}, "", path);
        // Llamo al handleRoute para que realice el cambio del contenido
        handleRoute(path);
    }
    function handleRoute(route) {
        const cleanPathName = $60311f4dbdf661c8$var$getCleanPathName(route);
        let foundedRoute;
        // Itero en las rutas para ver si alguna coincide con la ruta recibida
        for (const routeFromRoutes of $60311f4dbdf661c8$var$routes)// Si el la ruta coincide
        if (routeFromRoutes.path.test(cleanPathName)) {
            // Obtengo el componente de la ruta
            foundedRoute = routeFromRoutes.getComponent({
                goTo: goTo
            });
            break;
        }
        // Si se encontro la ruta
        if (!foundedRoute) foundedRoute = (0, $164f4f3e4dbe12b4$export$bb1ac3c63ee0edba)({
            goTo: goTo
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



function $d7cc58dce5eb1bb0$var$main() {
    // Inicializar el estado
    (0, $29df163bee395f9c$export$f6196a6c6bb539b4)();
    // Registrando todos los componentes
    (0, $c0e21458271779e9$export$90a89d6a62efbf7e)();
    (0, $be17a4e45f2cf2aa$export$de3d7e43df27a01b)();
    (0, $2fc289f4e6b19882$export$78bbb62fe65659fe)();
    (0, $10b9c74a44a6ee6f$export$525ad9e44225a0cd)();
    (0, $bc674be6178d6fd7$export$ff08c57b75608ef4)();
    (0, $cc83e9b2bfde8070$export$869c785ff93ee5aa)();
    (0, $41ac92af46bd1b02$export$932d2bc3ee411d31)();
    // Obteniendo el contenedor de la app
    const appElement = document.getElementById("app");
    // Si el contenedor de la app es válido
    if (appElement) // Iniciando el router
    (0, $60311f4dbdf661c8$export$cf7ee87ede64229c)(appElement);
}
$d7cc58dce5eb1bb0$var$main();


//# sourceMappingURL=index.c781a844.js.map
