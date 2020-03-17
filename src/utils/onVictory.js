/* eslint-disable no-unused-expressions */
import store from "../Store/index";

const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const firstPlayerWon = () => {
  store.dispatch("showWinner", store.state.playerOne);
  store.dispatch("changeCounterOne", 1);
  setItem("counterOne", store.state.counterOne);
};

const secondPlayerWon = () => {
  store.dispatch("showWinner", store.state.playerTwo);
  store.dispatch("changeCounterTwo", 1);
  setItem("counterTwo", store.state.counterTwo);
};

const clearCells = () => {
  const cells = Array(9).fill(null);
  localStorage.removeItem("cells");
  store.dispatch("resetGame", { cells, value: !!store.state.firstPlayerX });
};

const onVictory = (symbol, firstPlayerX) => {
  if (!symbol) return;
  if (symbol === "X") {
    firstPlayerX ? firstPlayerWon() : secondPlayerWon();
  } else {
    firstPlayerX ? secondPlayerWon() : firstPlayerWon();
  }
  clearCells();
  setItem("turn", !!firstPlayerX);
};
export default onVictory;
