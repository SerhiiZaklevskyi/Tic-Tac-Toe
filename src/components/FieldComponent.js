import mainComponent from "./mainComponent"
import store from "../Store/index"
import {ticTacToeGrid} from "./tic-tac-toe-grid"
import {clearCells} from "./clearCells"
import {cellHandler} from "./cellHandler"
import {firstPlayerWin} from "./firstPlayerWIn"
import {secondPlayerWin} from "./secondPlayerWin"
export default class FieldComponent extends mainComponent{
    constructor(anchor){
        super(
            store,
            document.querySelector('#gameField')
        );
    }
    onInit(){
      ticTacToeGrid.forEach(item => {
        if(item.value !== null) {
          store.dispatch(item.field, item.value)
        }
      })
    }

    render(){
      this.anchor.innerHTML = `
      <div class="cellsWrapper">
      <div class="firstRow">
        <p class="cell" id="1">${store.state.cell1}</p>
        <p class="cell" id="2">${store.state.cell2}</p>
        <p class="cell" id="3">${store.state.cell3}</p>
      </div>
      <div class="secondRow">
        <p class="cell" id="4">${store.state.cell4}</p>
        <p class="cell" id="5">${store.state.cell5}</p>
        <p class="cell" id="6">${store.state.cell6}</p>
      </div>
      <div class="thirdRow">
        <p class="cell" id="7">${store.state.cell7}</p>
        <p class="cell" id="8">${store.state.cell8}</p>
        <p class="cell" id="9">${store.state.cell9}</p>
      </div>
      </div>
      `

        function switching(event) {
          if(event.target.classList.contains('cell')){
            let target;
            if(store.state.firstPlayerMove === true && event.target.innerText == '') {
              target = {
                id: event.target.id,
                value: 'X'
              };
              store.dispatch('switchPlayer', false)
            }
            else if (store.state.firstPlayerMove === false && event.target.innerText == ''){
              target = {
                id: event.target.id,
                value: 'O'
              };
              store.dispatch('switchPlayer', true)
            }
            else return;
            cellHandler[target.id](target.value)
          }
        }


        function checkWinner() {
          const firstRow = []
          firstRow.push(store.state.cell1, store.state.cell2, store.state.cell3)
          const secondRow =[]
          secondRow.push(store.state.cell4, store.state.cell5, store.state.cell6)
          const thirdRow =[]
          thirdRow.push(store.state.cell7, store.state.cell8, store.state.cell9)
          const forthRow = []
          forthRow.push(store.state.cell1, store.state.cell4, store.state.cell7)
          const fifthRow = []
          fifthRow.push(store.state.cell2, store.state.cell5, store.state.cell8)
          const sixthRow =[]
          sixthRow.push(store.state.cell3, store.state.cell6, store.state.cell9)
          const seventhRow =[]
          seventhRow.push(store.state.cell1, store.state.cell5, store.state.cell9)
          const eightRow = []
          eightRow.push(store.state.cell3, store.state.cell5, store.state.cell7)

          if(firstRow.every(item => item == 'X') ||
             secondRow.every(item => item == 'X') ||
             thirdRow.every(item => item == 'X') ||
             forthRow.every(item => item == 'X') ||
             fifthRow.every(item => item == 'X') ||
             sixthRow.every(item => item == 'X') ||
             seventhRow.every(item => item == 'X') ||
             eightRow.every(item => item == 'X')
            ){
                store.state.firstPlayerX === true ? firstPlayerWin() : secondPlayerWin();
                clearCells()
          }
          else if(
            firstRow.every(item => item == 'O') ||
             secondRow.every(item => item == 'O') ||
             thirdRow.every(item => item == 'O') ||
             forthRow.every(item => item == 'O') ||
             fifthRow.every(item => item == 'O') ||
             sixthRow.every(item => item == 'O') ||
             seventhRow.every(item => item == 'O') ||
             eightRow.every(item => item == 'O')     
          ){      
            store.state.firstPlayerX === true ? secondPlayerWin() : firstPlayerWin();      
            clearCells()
          }
        }

        this.anchor.querySelector('.cellsWrapper').addEventListener('click', switching)
        this.anchor.querySelector('.cellsWrapper').addEventListener('click', checkWinner)
        
    }
}