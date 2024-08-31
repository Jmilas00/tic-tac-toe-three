import Moves from "./moves";
import { useState } from "react";

interface GameInfoProps {
  history: Array<Array<string>>;
  jumpTo(nextMove: number): void;
}

function GameInfo(props: GameInfoProps) {
  const [ascendingHistory, setAscendingHistory] = useState<boolean>(false);
  return (
    <div className="game-info">
      <ol>
        <Moves
          history={props.history}
          jumpTo={props.jumpTo}
          ascendingHistory={ascendingHistory}
        />
      </ol>
      <button onClick={() => setAscendingHistory(!ascendingHistory)}>
        Set history to
        {ascendingHistory === true ? " descending" : " ascending"}
      </button>
    </div>
  );
}

export default GameInfo;
