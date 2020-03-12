import store from "../Store/index";

const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const clearCells = () => {
  const cells = Array(9).fill(null);
  localStorage.removeItem("cells");
  store.dispatch("resetGame", { cells, value: !!store.state.firstPlayerX });
  setItem("turn", !!store.state.firstPlayerX);
};

// не знаю как сделать лучше
const restartGame = (symbol, firstPlayerX) => {
  const { playerOne, playerTwo } = store.state;
  if (!symbol) return;
  if (symbol === "X") {
    store.dispatch("showWinner", firstPlayerX ? playerOne : playerTwo);
    store.dispatch(firstPlayerX ? "changeCounterOne" : "changeCounterTwo", 1);
  } else {
    store.dispatch("showWinner", firstPlayerX ? playerTwo : playerOne);
    store.dispatch(firstPlayerX ? "changeCounterTwo" : "changeCounterOne", 1);
  }
  clearCells();
  setItem("counterOne", store.state.counterOne);
  setItem("counterTwo", store.state.counterTwo);
};

export default restartGame;
