import MainComponent from "./MainComponent";
import store from "../Store/index";
import cellHandler from "../utils/cellHandler";
import combinations from "../utils/combinations";
import onVictory from "../utils/onVictory";
import fireAction from "../utils/action-util";
import handleCellsView from "../utils/handleCellsView";

export default class FieldComponent extends MainComponent {
  constructor(ref) {
    super(ref);
    this.render = this.render.bind(this);
    this.render();
    this.onMount();
  }

  static ITEMS = [
    {
      actionName: "changeCell",
      itemName: "cells"
    },
    {
      actionName: "switchPlayer",
      itemName: "turn"
    },
    {
      actionName: "firstPlayerChoseX",
      itemName: "firstPlayerX"
    }
  ];

  callback = event => {
    this.switchPlayer(event);
    this.checkWinner(event);
    this.defaultSymbol(event);
  };

  onMount() {
    super.onMount();
    window.addEventListener("click", this.callback);
    FieldComponent.ITEMS.forEach(fireAction);
  }

  onDestroy() {
    super.onDestroy();
    this.anchor.innerHTML = null;
    window.removeEventListener("click", this.callback);
  }

  render() {
    this.anchor.innerHTML = `
    <div id="winner">Winner : ${store.state.winner}</div>
      <div class="cellsWrapper">
      ${store.state.cells.map(handleCellsView).join("")}
      </div>
      `;
  }

  checkWinner() {
    onVictory(combinations(), store.state.firstPlayerX);
  }

  switchPlayer({ target: { innerText, id, classList } }) {
    const {
      state: { firstPlayerMove }
    } = store;
    if (!classList.contains("cell") || innerText !== "") return;
    store.dispatch("switchPlayer", !firstPlayerMove);
    this.setItem("turn", !firstPlayerMove);
    cellHandler(id, firstPlayerMove ? "X" : "O");
  }

  defaultSymbol({ target: { classList, innerText } }) {
    if (!classList.contains("cell" || innerText !== "")) return;
    document.querySelector(".chooseSymbol").classList.add("invis-on");
    this.setItem("symbol", true);
  }
}
