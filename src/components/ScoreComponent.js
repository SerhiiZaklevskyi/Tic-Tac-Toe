/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
import mainComponent from "./MainComponent";
import store from "../Store/index";

export default class ScoreComponent extends mainComponent {
  constructor() {
    super(store, document.querySelector("#score"));
    this.onInit();
  }

  // eslint-disable-next-line class-methods-use-this
  onInit() {
    const getItem = key => JSON.parse(localStorage.getItem(key));
    const playerOneName = getItem("PlayerOneName");
    const playerTwoName = getItem("PlayerTwoName");
    playerOneName && store.dispatch("addPlayerOne", playerOneName);
    playerTwoName && store.dispatch("addPlayerTwo", playerTwoName);

    const counterOne = getItem("counterOne");
    const counterTwo = getItem("counterTwo");
    counterOne && store.dispatch("getCounterOne", counterOne);
    counterTwo && store.dispatch("getCounterTwo", counterTwo);
  }

  render() {
    this.anchor.innerHTML = `
        <p id="firstPlayer">${store.state.playerOne}: ${store.state.counterOne}</p>
        <p id="secondPlayer">${store.state.playerTwo} : ${store.state.counterTwo} </p>
        `;
  }
}
