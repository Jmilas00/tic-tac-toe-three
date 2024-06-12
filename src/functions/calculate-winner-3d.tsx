import { lines } from "../assets/winning-lines-3d";

interface calculateWinnerProps {
  squares: Array<string>;
}

const calculateWinner3D = (props: calculateWinnerProps) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      props.squares[a] &&
      props.squares[a] === props.squares[b] &&
      props.squares[a] === props.squares[c]
    ) {
      return { winner: props.squares[a], winningSquares: [a, b, c] };
    }
  }
  if (props.squares.filter((square) => square === null).length === 0) {
    return { winner: "tie", winningSquares: [] };
  }
  return null;
};

export default calculateWinner3D;
