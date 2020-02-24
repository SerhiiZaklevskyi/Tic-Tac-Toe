import mainComponent from "./mainComponent"
import store from "../Store/index"

export default class ScoreComponent extends mainComponent{
    constructor(anchor){
        super(
            store,
            document.querySelector('#score')
        );
    }

    render(){
        if(store.state.playerOne.length == 0 && store.state.playerTwo.length == 0) {
            this.anchor.innerHTML = `
            <p id="firstPlayer">Player one: 0</p>
            <p id="secondPlayer">Player two : 0 </p>`
        }
        else
        this.anchor.innerHTML = `
        <p id="firstPlayer">${store.state.playerOne}: 0</p>
        <p id="secondPlayer">${store.state.playerTwo} : 0 </p>
        `
    }
}