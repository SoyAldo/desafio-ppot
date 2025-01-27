type Chose = "rock" | "paper" | "shears" | undefined;

type Result = "win" | "lose" | "tie" | undefined;

type Stage = "waiting" | "selecting" | "finishing" | "finished";

interface State {
  statistics: {
    wins: number;
    losses: number;
  };
  hand: {
    player: Chose;
    opponent: Chose;
  };
  game: {
    stage: Stage;
    result: Result;
  };
}

interface Listener {
  id: string;
  function: Function;
}

export type { State, Chose, Result, Listener, Stage };
