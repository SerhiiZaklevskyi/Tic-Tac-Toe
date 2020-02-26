import store from "../Store/index"


export function secondPlayerWin() {
    document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`;
    store.state.counterTwo++
    localStorage.setItem('counterTwo', store.state.counterTwo)
    store.dispatch('resetGame', false)
}