import Moves from "./moves";

interface GameInfoProps {
  history: Array<Array<string>>;
  jumpTo(nextMove: number): void;
  ascendingHistory: boolean;
  setAscendingHistory: React.Dispatch<React.SetStateAction<boolean>>;
}

function GameInfo(props: GameInfoProps) {
  return (
    <div className="game-info">
      <ol>
        <Moves
          history={props.history}
          jumpTo={props.jumpTo}
          ascendingHistory={props.ascendingHistory}
        />
      </ol>
      <button
        onClick={() => props.setAscendingHistory(!props.ascendingHistory)}
      >
        Set history to
        {props.ascendingHistory === true ? " descending" : " ascending"}
      </button>
    </div>
  );
}

export default GameInfo;
