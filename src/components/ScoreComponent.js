import mainComponent from "./mainComponent"
import store from "../Store/index"

export default class ScoreComponent extends mainComponent{
    constructor(anchor){
        super(
            store,
            document.querySelector('#score')
        );
    }

    onInit(){
        let playerOneName = localStorage.getItem('PlayerOneName');
        let playerTwoName = localStorage.getItem('PlayerTwoName')
        if(playerOneName !== null) {
            store.dispatch('addPlayerOne', playerOneName);
        }
        if(playerTwoName !== null) {
            store.dispatch('addPlayerTwo', playerTwoName);
        }
        let counterOne = localStorage.getItem('counterOne')
        let counterTwo = localStorage.getItem('counterTwo')
        if(counterOne !== null){
            store.dispatch('getCounterOne', counterOne);
        }
        if(counterTwo !== null){
            store.dispatch('getCounterTwo', counterTwo)
        }
    }

    render(){
        this.anchor.innerHTML = `
        <p id="firstPlayer">${store.state.playerOne}: ${store.state.counterOne}</p>
        <p id="secondPlayer">${store.state.playerTwo} : ${store.state.counterTwo} </p>
        `
    }
}