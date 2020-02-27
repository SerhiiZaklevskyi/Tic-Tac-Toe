import store from "../Store/index";

const triggerAction = (value, actionType, cellName) => {
  store.dispatch(actionType, value);
  localStorage.setItem(cellName, value);
};

const cellHandler = {
  1: value => triggerAction(value, "changeCellOne", "cellOne"),
  2: value => triggerAction(value, "changeCellTwo", "cellTwo"),
  3: value => triggerAction(value, "changeCellThree", "cellThree"),
  4: value => triggerAction(value, "changeCellFour", "cellFive"),
  5: value => triggerAction(value, "changeCellFive", "cellFive"),
  6: value => triggerAction(value, "changeCellSix", "cellSix"),
  7: value => triggerAction(value, "changeCellSeven", "cellSeven"),
  8: value => triggerAction(value, "changeCellEight", "cellEight"),
  9: value => triggerAction(value, "changeCellNine", "cellNine")
};
export default cellHandler;
