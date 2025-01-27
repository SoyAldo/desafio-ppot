function e(e){return e&&e.__esModule?e.default:e}var t,n=globalThis,a={},s={},i=n.parcelRequire94c2;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},n.parcelRequire94c2=i),(0,i.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,a=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)a.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["hvItV","index.c836f392.js","3mNOk","paper.d83397f1.svg","2HYBq","rock.6c4f4789.svg","bQb7J","shears.3817db3b.svg","5h9CN","index.99d657f3.css"]'));class r extends HTMLElement{constructor(){super()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=`
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
    `;let n=document.createElement("button");if(n.setAttribute("type","button"),n.setAttribute("title","button"),n.classList.add("start-button"),this.childNodes.length>0){let e=this.childNodes[0];n.textContent=e.textContent,e.remove()}n.onclick=()=>{let e=new CustomEvent("bluebuttonpressed",{bubbles:!0,composed:!0});this.dispatchEvent(e)},e.appendChild(t),e.appendChild(n)}connectedCallback(){this.render()}}class o extends HTMLElement{constructor(){super(),this.counter=3}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=`
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
    `;let n=document.createElement("p");n.className="counter",n.textContent=this.counter+"",e.appendChild(t),e.appendChild(n);let a=setInterval(()=>{if(this.counter--,n.textContent=this.counter+"",0==this.counter){let e=new CustomEvent("counterended",{detail:{name:this.name},bubbles:!0});this.dispatchEvent(e),this.removeOnEnd&&this.remove(),clearInterval(a)}},1e3)}connectedCallback(){this.name=this.getAttribute("name"),this.removeOnEnd=this.hasAttribute("removeOnEnd"),this.render()}}var d=[];function l(e){t=e,d.forEach(e=>{e.function(t)}),localStorage.setItem("statistics",JSON.stringify(t.statistics))}function c(e){var t;(t=e.id,d.find(e=>e.id==t)?0:1)?d.push(e):d=d.map(t=>t.id==e.id?e:t)}function p(e){let n=t;l({...n,hand:{player:e,opponent:n.hand.opponent}})}function h(e){let n=t;l({...n,game:{stage:n.game.stage,result:e}})}function m(e){let n=t;l({...n,game:{stage:e,result:n.game.result}})}var u={};u=new URL("paper.d83397f1.svg",import.meta.url).toString();class f extends HTMLElement{constructor(){super(),this.type="paper"}render(){let t=this.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=`
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
    `;let a=document.createElement("img");a.className="hand",a.src=e(u),a.addEventListener("click",()=>{this.dummy||p(this.type)}),c({id:this.opponent?this.type+"-hand-opponent":this.type+"-hand",function:e=>{let t=e.game.stage;if(this.opponent&&"finishing"==t&&e.hand.opponent==this.type&&(a.className="hand hand__selected-opponent"),!this.dummy){let n=e.hand.player;"selecting"==t?n?n==this.type?a.className="hand hand__active":a.className="hand hand__inactive":a.className="hand":"finishing"==t&&(n==this.type?a.className="hand hand__selected":a.className="hand hand__no-selected")}}}),t.appendChild(n),t.appendChild(a)}connectedCallback(){this.dummy=this.hasAttribute("dummy"),this.opponent=this.hasAttribute("opponent"),this.render()}}class g extends HTMLElement{constructor(){super()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=`
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
    `;let n=document.createElement("div");n.className="score";let a=document.createElement("h2");a.className="score__title",a.textContent="Puntaje";let s=document.createElement("div");s.className="score__details";let i=document.createElement("p");i.className="score__datail",i.textContent="Vos: 0";let r=document.createElement("p");r.className="score__datail",r.textContent="Máquina: 0",c({id:"result-information",function:e=>{i.textContent="Vos: "+e.statistics.wins,r.textContent="Máquina: "+e.statistics.losses}}),s.appendChild(i),s.appendChild(r),n.appendChild(a),n.appendChild(s),e.appendChild(t),e.appendChild(n)}connectedCallback(){this.render()}}class _ extends HTMLElement{constructor(){super()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=`
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
    `;let n=document.createElement("div");n.className="star",n.innerHTML=`
    <svg class="svg" width="363" height="362" viewBox="0 0 363 362" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M209.795 62.6461L320.673 41.945L299.972 152.823L299.646 154.571L300.496 156.132L354.447 255.187L242.599 269.762L240.836 269.992L239.614 271.283L162.079 353.203L113.654 251.333L112.891 249.727L111.285 248.964L9.41472 200.539L91.3348 123.005L92.6262 121.782L92.8559 120.019L107.431 8.17082L206.486 62.122L208.047 62.9724L209.795 62.6461Z"
        fill="#6CB46C"
        stroke="black"
        stroke-width="10"
      />
    </svg>
    `;let a=n.querySelector(".svg"),s=document.createElement("div");s.className="text-container";let i=document.createElement("p");i.className="text",s.appendChild(i),n.appendChild(s),e.appendChild(t),e.appendChild(n),c({id:"result-star",function:e=>{let t=e.game.result;t&&("win"==t?(i.textContent="Ganaste",a&&(n.className="star star-win")):"lose"==t?(i.textContent="Perdiste",a&&(n.className="star star-lose")):(i.textContent="Empataste",a&&(n.className="star star-tie")))}})}connectedCallback(){this.render()}}var v={};v=new URL("rock.6c4f4789.svg",import.meta.url).toString();class x extends HTMLElement{constructor(){super(),this.type="rock"}render(){let t=this.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=`
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
    `;let a=document.createElement("img");a.className="hand",a.src=e(v),a.addEventListener("click",()=>{this.dummy||p(this.type)}),c({id:this.opponent?this.type+"-hand-opponent":this.type+"-hand",function:e=>{let t=e.game.stage;if(this.opponent&&"finishing"==t&&e.hand.opponent==this.type&&(a.className="hand hand__selected-opponent"),!this.dummy){let n=e.hand.player;"selecting"==t?n?n==this.type?a.className="hand hand__active":a.className="hand hand__inactive":a.className="hand":"finishing"==t&&(n==this.type?a.className="hand hand__selected":a.className="hand hand__no-selected")}}}),t.appendChild(n),t.appendChild(a)}connectedCallback(){this.dummy=this.hasAttribute("dummy"),this.opponent=this.hasAttribute("opponent"),this.render()}}var b={};b=new URL("shears.3817db3b.svg",import.meta.url).toString();class y extends HTMLElement{constructor(){super(),this.type="shears"}render(){let t=this.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=`
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
    `;let a=document.createElement("img");a.className="hand",a.src=e(b),a.addEventListener("click",()=>{this.dummy||p(this.type)}),c({id:this.opponent?this.type+"-hand-opponent":this.type+"-hand",function:e=>{let t=e.game.stage;if(this.opponent&&"finishing"==t&&e.hand.opponent==this.type&&(a.className="hand hand__selected-opponent"),!this.dummy){let n=e.hand.player;"selecting"==t?n?n==this.type?a.className="hand hand__active":a.className="hand hand__inactive":a.className="hand":"finishing"==t&&(n==this.type?a.className="hand hand__selected":a.className="hand hand__no-selected")}}}),t.appendChild(n),t.appendChild(a)}connectedCallback(){this.dummy=this.hasAttribute("dummy"),this.opponent=this.hasAttribute("opponent"),this.render()}}function C({goTo:e}){let t=document.createElement("div");return t.classList.add("container-home"),t.innerHTML=` 
    <h1 class="title">Piedra Papel <span>\xf3</span> Tijera</h1>

    <blue-button>Empezar</blue-button>

    <div class="hands">
      <shears-hand dummy></shears-hand>
      <rock-hand dummy></rock-hand>
      <paper-hand dummy></paper-hand>
    </div>
  `,t.addEventListener("bluebuttonpressed",()=>e("/play")),t}const E=[{path:/^\/$/,getComponent:C},{path:/^\/play$/,getComponent:function({goTo:e}){let t=document.createElement("div");return t.classList.add("container-play"),t.innerHTML=`
    <h1 class="title">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>

    <blue-button>\xa1Jugar!</blue-button>

    <div class="hands">
      <shears-hand dummy></shears-hand>
      <rock-hand dummy></rock-hand>
      <paper-hand dummy></paper-hand>
    </div>
  `,t.addEventListener("bluebuttonpressed",()=>{e("/playing")}),t}},{path:/^\/playing$/,getComponent:function({goTo:e}){let n=document.createElement("div");n.classList.add("playing-container"),n.innerHTML=`
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
  `;let a=n.querySelector(".result-modal");return a.addEventListener("bluebuttonpressed",()=>{l({...t,hand:{player:void 0,opponent:void 0},game:{stage:"waiting",result:void 0}}),e("/")}),n.addEventListener("counterended",()=>{var e,n;!function(e){let n=t;l({...n,hand:{player:n.hand.player,opponent:e}})}({0:"rock",1:"paper",2:"shears"}[Math.floor(3*Math.random())]);let s=(e=t.hand.player,n=t.hand.opponent,e&&n?({rockrock:"tie",rockpaper:"lose",rockshears:"win",paperrock:"win",paperpaper:"tie",papershears:"lose",shearsrock:"lose",shearspaper:"win",shearsshears:"tie"})[e+n]:"lose");"win"==s?(function(){let e=t;l({...e,statistics:{wins:e.statistics.wins+1,losses:e.statistics.losses}})}(),h("win")):"lose"==s?(function(){let e=t;l({...e,statistics:{wins:e.statistics.wins,losses:e.statistics.losses+1}})}(),h("lose")):h("tie"),m("finishing"),setTimeout(()=>{a.className="result-modal result-modal__active",m("finished")},1e3)}),m("selecting"),n}}];!function(){!function(){t={statistics:{wins:0,losses:0},hand:{player:void 0,opponent:void 0},game:{stage:"waiting",result:void 0}};let e=localStorage.getItem("statistics");if(e){let n=JSON.parse(e);t.statistics=n}}(),customElements.define("blue-button",r),customElements.define("rock-hand",x),customElements.define("paper-hand",f),customElements.define("shears-hand",y),customElements.define("result-star",_),customElements.define("result-information",g),customElements.define("counter-black",o);let e=document.getElementById("app");e&&function(e){function t(e){history.pushState({},"",e),n(e)}function n(n){let a;for(let e of E)if(e.path.test(n)){a=e.getComponent({goTo:t});break}a||(a=C({goTo:t})),e.firstChild&&e.firstChild.remove(),e.appendChild(a)}n(function(){let e="/desafio-ppot",t=location.pathname;if(!t.startsWith(e))return t;{let n=t.replace(e,"");return""==n?"/":n}}())}(e)}();
//# sourceMappingURL=index.c836f392.js.map
