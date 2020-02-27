import store from "../Store/index"


export function secondPlayerWin() {
    document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`;
    store.state.counterTwo++
    localStorage.setItem('counterTwo', store.state.counterTwo)
    if(store.state.firstPlayerX === false) {
        store.dispatch('resetGame', false)
    }
    else store.dispatch('resetGame', true)
}