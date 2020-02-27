/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
import mainComponent from "./mainComponent";
import store from "../Store/index";
import ticTacToeGrid from "./tic-tac-toe-grid";
import clearCells from "./clearCells";
import cellHandler from "./cellHandler";
// eslint-disable-next-line import/no-named-as-default
import firstPlayerWin from "./firstPlayerWIn";
import secondPlayerWin from "./secondPlayerWin";

export default class FieldComponent extends mainComponent {
  constructor() {
    super(store, document.querySelector("#gameField"));
  }

  onInit() {
    ticTacToeGrid.forEach(item => {
      if (item.value !== null) {
        store.dispatch(item.field, item.value);
      }
    });
  }

  render() {
    this.anchor.innerHTML = `
      <div class="cellsWrapper">
      <div class="firstRow">
        <p class="cell" id="1">${store.state.cell1}</p>
        <p class="cell" id="2">${store.state.cell2}</p>
        <p class="cell" id="3">${store.state.cell3}</p>
      </div>
      <div class="secondRow">
        <p class="cell" id="4">${store.state.cell4}</p>
        <p class="cell" id="5">${store.state.cell5}</p>
        <p class="cell" id="6">${store.state.cell6}</p>
      </div>
      <div class="thirdRow">
        <p class="cell" id="7">${store.state.cell7}</p>
        <p class="cell" id="8">${store.state.cell8}</p>
        <p class="cell" id="9">${store.state.cell9}</p>
      </div>
      </div>
      `;
    this.setupListeners();
  }

  setupListeners() {
    this.anchor
      .querySelector(".cellsWrapper")
      .addEventListener("click", this.switching);
    this.anchor
      .querySelector(".cellsWrapper")
      .addEventListener("click", this.checkWinner);
  }

  checkWinner() {
    const checkEveryX = item => item === "X";
    const checkEveryO = item => item === "O";
    const firstRow = [];
    firstRow.push(store.state.cell1, store.state.cell2, store.state.cell3);
    const secondRow = [];
    secondRow.push(store.state.cell4, store.state.cell5, store.state.cell6);
    const thirdRow = [];
    thirdRow.push(store.state.cell7, store.state.cell8, store.state.cell9);
    const forthRow = [];
    forthRow.push(store.state.cell1, store.state.cell4, store.state.cell7);
    const fifthRow = [];
    fifthRow.push(store.state.cell2, store.state.cell5, store.state.cell8);
    const sixthRow = [];
    sixthRow.push(store.state.cell3, store.state.cell6, store.state.cell9);
    const seventhRow = [];
    seventhRow.push(store.state.cell1, store.state.cell5, store.state.cell9);
    const eightRow = [];
    eightRow.push(store.state.cell3, store.state.cell5, store.state.cell7);

    if (
      firstRow.every(checkEveryX) ||
      secondRow.every(checkEveryX) ||
      thirdRow.every(checkEveryX) ||
      forthRow.every(checkEveryX) ||
      fifthRow.every(checkEveryX) ||
      sixthRow.every(checkEveryX) ||
      seventhRow.every(checkEveryX) ||
      eightRow.every(checkEveryX)
    ) {
      store.state.firstPlayerX === true ? firstPlayerWin() : secondPlayerWin();
      clearCells();
    } else if (
      firstRow.every(checkEveryO) ||
      secondRow.every(checkEveryO) ||
      thirdRow.every(checkEveryO) ||
      forthRow.every(checkEveryO) ||
      fifthRow.every(checkEveryO) ||
      sixthRow.every(checkEveryO) ||
      seventhRow.every(checkEveryO) ||
      eightRow.every(checkEveryO)
    ) {
      store.state.firstPlayerX === true ? secondPlayerWin() : firstPlayerWin();
      clearCells();
    }
  }

  switching(event) {
    if (event.target.classList.contains("cell")) {
      let target;
      if (
        store.state.firstPlayerMove === true &&
        event.target.innerText === ""
      ) {
        target = {
          id: event.target.id,
          value: "X"
        };
        store.dispatch("switchPlayer", false);
      } else if (
        store.state.firstPlayerMove === false &&
        event.target.innerText === ""
      ) {
        target = {
          id: event.target.id,
          value: "O"
        };
        store.dispatch("switchPlayer", true);
      } else return;
      cellHandler[target.id](target.value);
    }
  }
}
