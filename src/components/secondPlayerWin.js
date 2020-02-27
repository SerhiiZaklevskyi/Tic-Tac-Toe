import store from "../Store/index";

function secondPlayerWin() {
  document.querySelector("#winner").innerText = `${store.state.playerTwo} WON!`;
  store.state.counterTwo += 1;
  localStorage.setItem("counterTwo", store.state.counterTwo);
  if (store.state.firstPlayerX === false) {
    store.dispatch("resetGame", false);
  } else store.dispatch("resetGame", true);
}

export default secondPlayerWin;
