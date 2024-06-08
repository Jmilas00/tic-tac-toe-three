type onSquareClickType = (squareNum: number) => void;

interface SquareProps {
  value: string;
  num: number;
  onSquareClick: onSquareClickType;
  winningMark: boolean;
}

function Square(props: SquareProps) {
  return (
    <button
      className={props.winningMark ? "winning-square" : "square"}
      onClick={() => {
        props.onSquareClick(props.num);
      }}
    >
      {props.value}
    </button>
  );
}

export default Square;
