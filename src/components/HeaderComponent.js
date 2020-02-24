import mainComponent from "./mainComponent"
import store from "../Store/index"

export default class HeaderComponent extends mainComponent{
    constructor(anchor){
        super(
            store,
            document.querySelector('#headerWrapper')
        );
    }

    render(){
        
        this.anchor.innerHTML = `
          <p class="header">Tic-Tac-Toe!</p>
          <div id="playersWrapper">
          <span class="playerOne">
          <input type="text" id="playerOne" placeholder="Player-1">
          <button class="save" id="savePlayerOne">save</button>
          </span>
          <span class="playerTwo">
          <input type="text" id="playerTwo" placeholder="Player-2">
          <button class="save" id="savePlayerTwo">save</button>
          </span>
          </div>
          <span class="startWrapper"><button class="startGame">Start Game!</button></span>
        `

        const playerOne = this.anchor.querySelector('#playerOne');
        const playerTwo = this.anchor.querySelector('#playerTwo');
        const savePlayerOne = this.anchor.querySelector('#savePlayerOne');
        const savePlayerTwo = this.anchor.querySelector('#savePlayerTwo')

        savePlayerOne.addEventListener('click', () => store.dispatch('addPlayerOne', playerOne.value.trim()));

        playerOne.addEventListener('keypress', event => {
            if(event.key === "Enter") {
                store.dispatch('addPlayerOne', playerOne.value.trim())
            }
        });

        savePlayerTwo.addEventListener('click', () => store.dispatch('addPlayerTwo', playerTwo.value.trim()));

        playerTwo.addEventListener('keypress', event => {
            if(event.key === "Enter") {
                store.dispatch('addPlayerTwo', playerTwo.value.trim())
            }
        })
    }
}