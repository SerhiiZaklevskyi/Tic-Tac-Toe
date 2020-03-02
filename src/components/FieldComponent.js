/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
import mainComponent from "./MainComponent";
import store from "../Store/index";
import cellHandler from "./СellHandler";
import combinations from "./Combinations";
import resetGame from "./ResetGame";

export default class FieldComponent extends mainComponent {
  constructor() {
    super(store, document.querySelector("#gameField"));
    this.onInit();
  }

  onInit() {
    const cells = JSON.parse(localStorage.getItem("cells"));
    if (cells) {
      store.dispatch("changeCell", cells);
    }
  }

  render() {
    this.anchor.innerHTML = `
      <div class="cellsWrapper">
      ${store.state.cells
        .map((cell, index) =>
          cell
            ? `<p class="cell" id="${index}">${cell}</p>`
            : `<p class="cell" id="${index}"></p>`
        )
        .join("")}
      </div>
      `;
    this.setupListeners();
  }

  checkWinner() {
    const { firstPlayerX, playerOne, playerTwo } = store.state;
    combinations().forEach(row => {
      if (row.every(cell => cell === "X")) {
        firstPlayerX
          ? resetGame(playerOne, "changeCounterOne")
          : resetGame(playerTwo, "changeCounterTwo");
      }
    });
    combinations().forEach(row => {
      if (row.every(cell => cell === "O")) {
        firstPlayerX
          ? resetGame(playerTwo, "changeCounterTwo")
          : resetGame(playerOne, "changeCounterOne");
      }
    });
  }

  switchPlayer(event) {
    const { firstPlayerMove } = store.state;
    if (event.target.classList.contains("cell")) {
      let target;
      if (firstPlayerMove === true && event.target.innerText === "") {
        target = {
          id: event.target.id,
          value: "X"
        };
        store.dispatch("switchPlayer", false);
      } else if (firstPlayerMove === false && event.target.innerText === "") {
        target = {
          id: event.target.id,
          value: "O"
        };
        store.dispatch("switchPlayer", true);
      } else return;
      cellHandler(target.id, target.value);
    }
  }

  setupListeners() {
    this.anchor
      .querySelector(".cellsWrapper")
      .addEventListener("click", this.switchPlayer);
    this.anchor
      .querySelector(".cellsWrapper")
      .addEventListener("click", this.checkWinner);
  }
}
