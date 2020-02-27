/* eslint-disable no-unused-expressions */
import mainComponent from "./mainComponent";
import store from "../Store/index";

export default class ScoreComponent extends mainComponent {
  constructor() {
    super(store, document.querySelector("#score"));
  }

  // eslint-disable-next-line class-methods-use-this
  onInit() {
    const playerOneName = localStorage.getItem("PlayerOneName");
    const playerTwoName = localStorage.getItem("PlayerTwoName");
    playerOneName !== null
      ? store.dispatch("addPlayerOne", playerOneName)
      : null;
    playerTwoName !== null
      ? store.dispatch("addPlayerTwo", playerTwoName)
      : null;

    const counterOne = localStorage.getItem("counterOne");
    const counterTwo = localStorage.getItem("counterTwo");
    counterOne !== null ? store.dispatch("getCounterOne", counterOne) : null;
    counterTwo !== null ? store.dispatch("getCounterTwo", counterTwo) : null;
  }

  render() {
    this.anchor.innerHTML = `
        <p id="firstPlayer">${store.state.playerOne}: ${store.state.counterOne}</p>
        <p id="secondPlayer">${store.state.playerTwo} : ${store.state.counterTwo} </p>
        `;
  }
}
