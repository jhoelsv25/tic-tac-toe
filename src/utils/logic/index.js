import { WIN_COMBINATIONS } from "../../constants";

export const checkWinner = (boarToCheck) => {
  for (const combo of WIN_COMBINATIONS) {
    const [a, b, c] = combo;
    if (
      boarToCheck[a] &&
      boarToCheck[a] === boarToCheck[b] &&
      boarToCheck[a] === boarToCheck[c]
    ) {
      return boarToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
}