import mainComponent from "./mainComponent";
import store from "../Store/index";

export default class HeaderComponent extends mainComponent {
  constructor() {
    super(store, document.querySelector("#headerWrapper"));
  }

  // eslint-disable-next-line class-methods-use-this
  onInit() {}

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
          <div class="chooseSymbol">
             <p>Chose your symbol</p>
             <button class="x-button">X</button>
             <button class="o-button">O</button>
          </div>
        `;
    this.setUpListeners();
  }

  setUpListeners() {
    const playerOne = this.anchor.querySelector("#playerOne");
    const playerTwo = this.anchor.querySelector("#playerTwo");
    const savePlayerOne = this.anchor.querySelector("#savePlayerOne");
    const savePlayerTwo = this.anchor.querySelector("#savePlayerTwo");
    const reset = this.anchor.querySelector(".resetGame");
    const xButton = this.anchor.querySelector(".x-button");
    const oButton = this.anchor.querySelector(".o-button");

    savePlayerOne.addEventListener("click", () => {
      if (playerOne.value !== "") {
        store.dispatch("addPlayerOne", playerOne.value.trim());
        localStorage.setItem("PlayerOneName", playerOne.value.trim());
        this.anchor.querySelector(".chooseSymbol").style.display = "block";
      }
    });

    playerOne.addEventListener("keypress", event => {
      if (playerOne.value !== "" && event.key === "Enter") {
        store.dispatch("addPlayerOne", playerOne.value.trim());
        localStorage.setItem("PlayerOneName", playerOne.value.trim());
        this.anchor.querySelector(".chooseSymbol").style.display = "block";
      }
    });

    savePlayerTwo.addEventListener("click", () => {
      if (playerTwo.value !== "") {
        store.dispatch("addPlayerTwo", playerTwo.value.trim());
        localStorage.setItem("PlayerTwoName", playerTwo.value.trim());
      }
    });

    playerTwo.addEventListener("keypress", event => {
      if (playerTwo.value !== "" && event.key === "Enter") {
        store.dispatch("addPlayerTwo", playerTwo.value.trim());
        localStorage.setItem("PlayerTwoName", playerTwo.value.trim());
      }
    });

    reset.addEventListener("click", () => {
      localStorage.clear();
      document.querySelector("#winner").innerText = "";
      store.dispatch("restartGame", 1);
    });

    xButton.addEventListener("click", () => {
      this.anchor.querySelector(".chooseSymbol").style.display = "none";
    });

    oButton.addEventListener("click", () => {
      this.anchor.querySelector(".chooseSymbol").style.display = "none";
      store.dispatch("switchPlayer", false);
      store.dispatch("firstPlayerChoseX", false);
    });
  }
}
