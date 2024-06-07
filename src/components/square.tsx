type onSquareClickType = (squareNum: number) => void;

interface SquareProps {
  value: string;
  num: number;
  onSquareClick: onSquareClickType;
}

function Square(props: SquareProps) {
  return (
    <button
      className="square"
      onClick={() => {
        props.onSquareClick(props.num);
      }}
    >
      {props.value}
    </button>
  );
}

export default Square;
