import MainComponent from "./MainComponent";
import store from "../Store/index";
import saveName from "../utils/saveName";

export default class HeaderComponent extends MainComponent {
  constructor(ref) {
    super(ref);
    this.render = this.render.bind(this);
  }

  callback = event => {
    this.resetGame(event);
    this.handleName(event);
    this.chooseSymbol(event);
  };

  keyCallback = event => {
    this.handleKeyPress(event);
  };

  getListeners() {
    return [
      {
        event: "click",
        callback: this.callback
      },
      {
        event: "keypress",
        callback: this.keyCallback
      }
    ];
  }

  onMount() {
    super.onMount();
    this.getListeners().forEach(this.addListeners);
    const symbol = JSON.parse(localStorage.getItem("symbol"));
    symbol && document.querySelector(".chooseSymbol").classList.add("invis-on");
  }

  onDestroy() {
    super.onDestroy();
    this.anchor.innerHTML = null;
    this.getListeners().forEach(this.removeListeners);
  }

  render() {
    this.anchor.innerHTML = `
          <p class="header">Tic-Tac-Toe!</p>
          <div id="playersWrapper">
             <span id="playerOne">
               <input type="text" class="playerOne player" placeholder="Player-1 Name">
               <button class="savePlayerOne save">save</button>
             </span>
             <span id="playerTwo">
                <input type="text" class="playerTwo player" placeholder="Player-2 Name">
                <button class="savePlayerTwo save">save</button>
             </span>
          </div>
             <span class="resetWrapper">
               <button class="resetGame">ResetGame</button>
             </span>
        `;
  }

  resetGame({ target: { classList } }) {
    if (!classList.contains("resetGame")) return;
    const cells = Array(9).fill(null);
    localStorage.clear();
    store.dispatch("restartGame", cells);
    document.querySelector(".chooseSymbol").classList.remove("invis-on");
  }

  // не знаю как сделать лучше
  handleName({ target: { classList } }) {
    const playerOne = this.anchor.querySelector(".playerOne");
    const playerTwo = this.anchor.querySelector(".playerTwo");
    if (classList.contains("save")) {
      saveName(
        classList.contains("savePlayerOne")
          ? ["addPlayerOne", "PlayerOneName", playerOne.value]
          : ["addPlayerTwo", "PlayerTwoName", playerTwo.value]
      );
    }
  }

  handleKeyPress({ key, target: { classList, value } }) {
    if (key === "Enter" && classList.contains("player")) {
      saveName(
        classList.contains("playerOne")
          ? ["addPlayerOne", "PlayerOneName", value]
          : ["addPlayerTwo", "PlayerTwoName", value]
      );
    }
  }
  //........

  chooseSymbol({ target: { classList } }) {
    if (!classList.contains("symbol")) return;
    const sndButton = classList.contains("o-button");
    store.dispatch("switchPlayer", !sndButton);
    store.dispatch("firstPlayerChoseX", !sndButton);
    localStorage.setItem("firstPlayerX", !sndButton);
    this.setItem("symbol", true);
    document.querySelector(".chooseSymbol").classList.add("invis-on");
  }
}
