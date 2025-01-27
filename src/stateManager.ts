import { Chose, Listener, Result, Stage, State } from "./interfaces";

var state: State;
var listeners: Listener[] = [];

function initState() {
  state = {
    statistics: {
      wins: 0,
      losses: 0,
    },
    hand: {
      player: undefined,
      opponent: undefined,
    },
    game: {
      stage: "waiting",
      result: undefined,
    },
  };
  // Obtengo las estadisticas
  const statistics = localStorage.getItem("statistics");
  if (statistics) {
    const parsedStatistics = JSON.parse(statistics);
    state["statistics"] = parsedStatistics;
  }
}

function getState(): State {
  // Devuelvo el estado actual
  return state;
}

function setState(newState: State) {
  // Actualizo el estado
  state = newState;
  // Notificar a todos los oyentes del cambio
  listeners.forEach((listener) => {
    listener.function(state);
  });
  // Persistir en el almacenamiento
  localStorage.setItem("statistics", JSON.stringify(state.statistics));
}

function hasListener(id: string): boolean {
  const foundedListener = listeners.find((listener) => listener.id == id);
  if (foundedListener) {
    return true;
  } else {
    return false;
  }
}

function addListener(listener: Listener) {
  if (hasListener(listener.id)) {
    listeners = listeners.map((mapListener) => {
      if (mapListener.id == listener.id) {
        return listener;
      } else {
        return mapListener;
      }
    });
  } else {
    listeners.push(listener);
  }
}

function removeListener(id: string) {
  listeners = listeners.filter((listener) => listener.id != id);
}

function setPlayerChose(chose: Chose) {
  const lastState = getState();
  setState({
    ...lastState,
    hand: {
      player: chose,
      opponent: lastState.hand.opponent,
    },
  });
}

function getPlayerChose(): Chose {
  const lastState = getState();
  return lastState.hand.player;
}

function setOpponentChose(chose: Chose) {
  const lastState = getState();
  setState({
    ...lastState,
    hand: {
      player: lastState.hand.player,
      opponent: chose,
    },
  });
}

function getOpponentChose(): Chose {
  const lastState = getState();
  return lastState.hand.opponent;
}

function increaseWins() {
  const lastState = getState();
  setState({
    ...lastState,
    statistics: {
      wins: lastState.statistics.wins + 1,
      losses: lastState.statistics.losses,
    },
  });
}

function increaseLosses() {
  const lastState = getState();
  setState({
    ...lastState,
    statistics: {
      wins: lastState.statistics.wins,
      losses: lastState.statistics.losses + 1,
    },
  });
}

function getGameResult(): Result {
  const lastState = getState();
  return lastState.game.result;
}

function setGameResult(newResult: Result) {
  const lastState = getState();
  setState({
    ...lastState,
    game: {
      stage: lastState.game.stage,
      result: newResult,
    },
  });
}

function clearGame() {
  const lastState = getState();
  setState({
    ...lastState,
    hand: {
      player: undefined,
      opponent: undefined,
    },
    game: {
      stage: "waiting",
      result: undefined,
    },
  });
}

function getGameStage(): Stage {
  const lastState = getState();
  return lastState.game.stage;
}

function setGameStage(newStage: Stage) {
  const lastState = getState();
  setState({
    ...lastState,
    game: {
      stage: newStage,
      result: lastState.game.result,
    },
  });
}

export {
  initState,
  getState,
  setState,
  hasListener,
  addListener,
  removeListener,
  setPlayerChose,
  getPlayerChose,
  setOpponentChose,
  getOpponentChose,
  increaseLosses,
  increaseWins,
  getGameResult,
  setGameResult,
  clearGame,
  getGameStage,
  setGameStage,
};
