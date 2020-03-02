/* eslint-disable no-unused-expressions */
import store from "../Store/index";

const winner = (player, counter) => {
  const cells = Array(9).fill(null);
  document.querySelector("#winner").innerText = `${player} WON!`;
  store.dispatch(counter, 1);
  localStorage.removeItem("cells");
  store.state.firstPlayerX
    ? store.dispatch("resetGame", { cells, value: true })
    : store.dispatch("resetGame", { cells, value: false });
};

export default winner;
