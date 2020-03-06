/* eslint-disable no-unused-expressions */
import store from "../Store/index";

const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const clearCells = () => {
  const cells = Array(9).fill(null);
  localStorage.removeItem("cells");
  store.dispatch("resetGame", { cells, value: !!store.state.firstPlayerX });
  setItem("turn", !!store.state.firstPlayerX);
};
const resetGame = (player, counter) => {
  clearCells();
  document.querySelector("#winner").innerText = `${player} WON!`;
  store.dispatch(counter, 1);
  setItem("counterOne", store.state.counterOne);
  setItem("counterTwo", store.state.counterTwo);
};

export default resetGame;
