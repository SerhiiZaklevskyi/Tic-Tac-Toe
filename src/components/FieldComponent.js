/* eslint-disable prefer-destructuring */
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
import checkComboX from "./comboX";
import checkComboO from "./comboO";

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
    const state = store.state;
    this.anchor.innerHTML = `
      <div class="cellsWrapper">
      <div class="firstRow">
        <p class="cell" id="1">${state.cell1}</p>
        <p class="cell" id="2">${state.cell2}</p>
        <p class="cell" id="3">${state.cell3}</p>
      </div>
      <div class="secondRow">
        <p class="cell" id="4">${state.cell4}</p>
        <p class="cell" id="5">${state.cell5}</p>
        <p class="cell" id="6">${state.cell6}</p>
      </div>
      <div class="thirdRow">
        <p class="cell" id="7">${state.cell7}</p>
        <p class="cell" id="8">${state.cell8}</p>
        <p class="cell" id="9">${state.cell9}</p>
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
      .addEventListener("click", this.checkPlayerOneWin);
    this.anchor
      .querySelector(".cellsWrapper")
      .addEventListener("click", this.checkPlayerTwoWin);
  }

  checkPlayerOneWin() {
    const state = store.state;
    if (
      checkComboX(state.cell1, state.cell2, state.cell3) === true ||
      checkComboX(state.cell4, state.cell5, state.cell6) === true ||
      checkComboX(state.cell7, state.cell8, state.cell9) === true ||
      checkComboX(state.cell1, state.cell4, state.cell7) === true ||
      checkComboX(state.cell2, state.cell5, state.cell8) === true ||
      checkComboX(state.cell3, state.cell6, state.cell9) === true ||
      checkComboX(state.cell1, state.cell5, state.cell9) === true ||
      checkComboX(state.cell3, state.cell5, state.cell7) === true
    ) {
      state.firstPlayerX === true ? firstPlayerWin() : secondPlayerWin();
      clearCells();
    }
  }

  checkPlayerTwoWin() {
    const state = store.state;
    if (
      checkComboO(state.cell1, state.cell2, state.cell3) === true ||
      checkComboO(state.cell4, state.cell5, state.cell6) === true ||
      checkComboO(state.cell7, state.cell8, state.cell9) === true ||
      checkComboO(state.cell1, state.cell4, state.cell7) === true ||
      checkComboO(state.cell2, state.cell5, state.cell8) === true ||
      checkComboO(state.cell3, state.cell6, state.cell9) === true ||
      checkComboO(state.cell1, state.cell5, state.cell9) === true ||
      checkComboO(state.cell3, state.cell5, state.cell7) === true
    ) {
      state.firstPlayerX === true ? secondPlayerWin() : firstPlayerWin();
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
