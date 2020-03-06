/* eslint-disable no-unused-expressions */
import store from "../Store";

const getItem = key => JSON.parse(localStorage.getItem(key));

const fireAction = ({ actionName, itemName }) => {
  const entity = getItem(itemName);
  entity !== null && store.dispatch(actionName, entity);
};

export default fireAction;
