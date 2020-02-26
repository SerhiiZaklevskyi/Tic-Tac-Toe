import store from "../Store/index"


export function firstPlayerWin() {
    document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`;
    store.state.counterOne++
    localStorage.setItem('counterOne', store.state.counterOne)
    if(store.state.firstPlayerX === false) {
        store.dispatch('resetGame', false)
    }
    else store.dispatch('resetGame', true)

}