import store from "../Store/index";

const saveName = (...args) => {
  const [actionType, playerName, value] = args[0];
  if (value) {
    store.dispatch(actionType, value.trim());
    localStorage.setItem(playerName, JSON.stringify(value));
  }
};

export default saveName;
