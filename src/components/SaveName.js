/* eslint-disable no-unused-expressions */
import store from "../Store/index";

const saveName = (actionType, playerName, value) => {
  if (value) {
    store.dispatch(actionType, value.trim());
    localStorage.setItem(playerName, value.trim());
    if (actionType === "addPlayerOne") {
      store.state.cells.every(cell => cell === null) &&
        document.querySelector(".chooseSymbol").classList.add("invis-off");
    }
  }
};

export default saveName;
