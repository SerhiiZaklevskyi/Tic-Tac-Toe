/* eslint-disable no-unused-expressions */
import store from "../Store/index";

const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const clearCells = () => {
  const cells = Array(9).fill(null);
  localStorage.removeItem("cells");
  if (store.state.firstPlayerX) {
    store.dispatch("resetGame", { cells, value: true });
    setItem("turn", true);
  } else {
    store.dispatch("resetGame", { cells, value: false });
    setItem("turn", false);
  }
};

const resetGame = (player, counter) => {
  clearCells();
  document.querySelector("#winner").innerText = `${player} WON!`;
  store.dispatch(counter, 1);
  setItem("counterOne", store.state.counterOne);
  setItem("counterTwo", store.state.counterTwo);
};

export default resetGame;
