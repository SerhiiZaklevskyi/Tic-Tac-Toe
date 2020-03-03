import store from "../Store/index";

const symbolListeners = () => {
  const chooseSymbol = document.querySelector(".chooseSymbol");
  document.querySelector(".x-button").addEventListener("click", () => {
    chooseSymbol.classList.remove("invis-off");
  });

  document.querySelector(".o-button").addEventListener("click", () => {
    chooseSymbol.classList.remove("invis-off");
    store.dispatch("switchPlayer", false);
    store.dispatch("firstPlayerChoseX", false);
    localStorage.setItem("firstPlayerX", JSON.stringify(false));
  });
};

export default symbolListeners;
