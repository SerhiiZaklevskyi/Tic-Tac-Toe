/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
import MainComponent from "./MainComponent";
import store from "../Store/index";
import fireAction from "../utils/action-util";

export default class ScoreComponent extends MainComponent {
  constructor(ref) {
    super(ref);
    this.render = this.render.bind(this);
    this.render();
    this.onMount();
  }

  onMount() {
    super.onMount();
    ScoreComponent.ITEMS.forEach(fireAction);
  }

  static ITEMS = [
    {
      actionName: "addPlayerOne",
      itemName: "PlayerOneName"
    },
    {
      actionName: "addPlayerTwo",
      itemName: "PlayerTwoName"
    },
    {
      actionName: "getCounterOne",
      itemName: "counterOne"
    },
    {
      actionName: "getCounterTwo",
      itemName: "counterTwo"
    }
  ];

  // eslint-disable-next-line class-methods-use-this
  render() {
    this.anchor.innerHTML = `
        <p id="firstPlayer">${store.state.playerOne}: ${store.state.counterOne}</p>
        <p id="secondPlayer">${store.state.playerTwo} : ${store.state.counterTwo} </p>
        `;
  }
}
