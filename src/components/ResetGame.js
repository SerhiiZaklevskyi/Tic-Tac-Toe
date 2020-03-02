/* eslint-disable no-unused-expressions */
import store from "../Store/index";

const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const resetGame = (player, counter) => {
  const cells = Array(9).fill(null);
  document.querySelector("#winner").innerText = `${player} WON!`;
  store.dispatch(counter, 1);
  localStorage.removeItem("cells");
  setItem("counterOne", store.state.counterOne);
  setItem("counterTwo", store.state.counterTwo);
  store.state.firstPlayerX
    ? store.dispatch("resetGame", { cells, value: true })
    : store.dispatch("resetGame", { cells, value: false });
};

export default resetGame;
