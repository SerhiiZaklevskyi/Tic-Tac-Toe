/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
import mainComponent from "./MainComponent";
import store from "../Store/index";
import cellHandler from "../utils/cellHandler";
import combinations from "../utils/combinations";
import resetGame from "../utils/onVictory";
import fireAction from "../utils/action-util"

export default class FieldComponent extends mainComponent {
  constructor(ref) {
    super(ref);
    this.switchPlayer = this.switchPlayer.bind(this);
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }


  static ITEMS = [
    {
      actionName: 'changeCell',
      itemName: 'cells'
    },
    {
      actionName: 'switchPlayer',
      itemName: 'turn'
    },
    {
      actionName: 'firstPlayerChoseX',
      itemName: 'firstPlayerX'
    }
  ]

  callback() {}

  onMount() {
    super.onMount();
    window.addEventListener("click", this.callback);
    FieldComponent.ITEMS.forEach(fireAction);
  }

  onDestroy() {
    super.onDestroy();
    this.anchor.innerHTML = null;
    window.removeEventListener("event", this.callback);
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
      else if (row.every(cell => cell === "O")) {
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
        this.setItem("turn", false);
      } else if (firstPlayerMove === false && event.target.innerText === "") {
        target = {
          id: event.target.id,
          value: "O"
        };
        store.dispatch("switchPlayer", true);
        this.setItem("turn", true);
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
