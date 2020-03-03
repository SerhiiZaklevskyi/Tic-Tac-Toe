/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-unresolved
import mainComponent from "./MainComponent";
import store from "../Store/index";
import saveName from "./SaveName";

export default class HeaderComponent extends mainComponent {
  constructor() {
    super(store, document.querySelector("#headerWrapper"));
  }

  render() {
    this.anchor.innerHTML = `
          <p class="header">Tic-Tac-Toe!</p>
          <div id="playersWrapper">
             <span class="playerOne">
               <input type="text" id="playerOne" placeholder="Player-1 Name">
               <button class="save" id="savePlayerOne">save</button>
             </span>
             <span class="playerTwo">
                <input type="text" id="playerTwo" placeholder="Player-2 Name">
                <button class="save" id="savePlayerTwo">save</button>
             </span>
          </div>
             <span class="startWrapper">
               <button class="resetGame">ResetGame</button>
             </span>
        `;
    this.setUpListeners();
  }

  setUpListeners() {
    const playerOne = this.anchor.querySelector("#playerOne");
    const playerTwo = this.anchor.querySelector("#playerTwo");
    const chooseSymbol = document.querySelector(".chooseSymbol");

    this.anchor
      .querySelector("#savePlayerOne")
      .addEventListener("click", () => {
        saveName("addPlayerOne", "PlayerOneName", playerOne.value);
      });

    playerOne.addEventListener("keypress", event => {
      event.key === "Enter" &&
        saveName("addPlayerOne", "PlayerOneName", playerOne.value);
    });

    this.anchor
      .querySelector("#savePlayerTwo")
      .addEventListener(
        "click",
        saveName("addPlayerTwo", "PlayerTwoName", playerTwo.value)
      );

    playerTwo.addEventListener(
      "keypress",
      event =>
        event.key === "Enter" &&
        saveName("addPlayerTwo", "PlayerTwoName", playerTwo.value)
    );

    this.anchor.querySelector(".resetGame").addEventListener("click", () => {
      const cells = Array(9).fill(null);
      localStorage.clear();
      document.querySelector("#winner").innerText = "";
      store.dispatch("restartGame", cells);
    });

    document.querySelector(".x-button").addEventListener("click", () => {
      chooseSymbol.classList.remove("invis-off");
    });

    document.querySelector(".o-button").addEventListener("click", () => {
      chooseSymbol.classList.remove("invis-off");
      store.dispatch("switchPlayer", false);
      store.dispatch("firstPlayerChoseX", false);
      localStorage.setItem("firstPlayerX", JSON.stringify(false));
    });
  }
}
