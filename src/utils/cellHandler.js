import store from "../Store/index";

const cellHandler = (id, value) => {
  const cells = store.state.cells.slice();
  cells[id] = value;
  store.dispatch("changeCell", cells);
  localStorage.setItem("cells", JSON.stringify(cells));
};
export default cellHandler;
