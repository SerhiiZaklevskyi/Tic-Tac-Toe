import mainComponent from "./mainComponent"
import store from "../Store/index"

export default class FieldComponent extends mainComponent{
    constructor(anchor){
        super(
            store,
            document.querySelector('#gameField')
        );
    }
    onInit(){
      let cellOne = localStorage.getItem('cellOne')
      let cellTwo = localStorage.getItem('cellTwo')
      let cellThree = localStorage.getItem('cellThree')
      let cellFour = localStorage.getItem('cellFour')
      let cellFive = localStorage.getItem('cellFive')
      let cellSix= localStorage.getItem('cellSix')
      let cellSeven = localStorage.getItem('cellSeven')
      let cellEight = localStorage.getItem('cellEight')
      let cellNine= localStorage.getItem('cellNine')
      if(cellOne !== null){
        store.dispatch('changeCellOne', cellOne)
      }
      if(cellTwo !== null){
        store.dispatch('changeCellTwo', cellTwo)
      }
      if(cellThree !== null){
        store.dispatch('changeCellThree', cellThree)
      }
      if(cellFour !== null){
        store.dispatch('changeCellFour', cellFour)
      }
      if(cellFive !== null){
        store.dispatch('changeCellFive', cellFive)
      }
      if(cellSix !== null){
        store.dispatch('changeCellSix', cellSix)
      }
      if(cellSeven !== null){
        store.dispatch('changeCellSeven', cellSeven)
      }
      if(cellEight !== null){
        store.dispatch('changeCellEight', cellEight)
      }
      if(cellNine !== null){
        store.dispatch('changeCellNine', cellNine)
      }
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

            switch(target.id){
              case '1':
                store.dispatch('changeCellOne', target.value);
                localStorage.setItem('cellOne', target.value)
                break;
             case '2':
                store.dispatch('changeCellTwo', target.value);
                localStorage.setItem('cellTwo', target.value)
                break;
             case '3':
                store.dispatch('changeCellThree', target.value);
                localStorage.setItem('cellThree', target.value)
                break;
             case '4':
                store.dispatch('changeCellFour', target.value);
                localStorage.setItem('cellFour', target.value)
                break;
             case '5':
                store.dispatch('changeCellFive', target.value);
                localStorage.setItem('cellFive', target.value)
                break;
             case '6':
                store.dispatch('changeCellSix', target.value);
                localStorage.setItem('cellSix', target.value)
                break;
             case '7':
                store.dispatch('changeCellSeven', target.value);
                localStorage.setItem('cellSeven', target.value)
                break;
             case '8':
                store.dispatch('changeCellEight', target.value);
                localStorage.setItem('cellEight', target.value)
                break;
             case '9':
                store.dispatch('changeCellNine', target.value);
                localStorage.setItem('cellNine', target.value)
                break;
            }
          }
        }


        function playerOneWin() {
          if(store.state.cell1 === 'X' && store.state.cell2 === 'X' && store.state.cell3 === 'X'){
            document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`;
            store.state.counterOne++
            localStorage.setItem('counterOne', store.state.counterOne)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell4 === 'X' && store.state.cell5 === 'X' && store.state.cell6 === 'X'){
            document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`
            store.state.counterOne++
            localStorage.setItem('counterOne', store.state.counterOne)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell7 === 'X' && store.state.cell8 === 'X' && store.state.cell9 === 'X'){
            document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`
            store.state.counterOne++
            localStorage.setItem('counterOne', store.state.counterOne)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell1 === 'X' && store.state.cell4 === 'X' && store.state.cell7 === 'X'){
            document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`
            store.state.counterOne++
            localStorage.setItem('counterOne', store.state.counterOne)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell2 === 'X' && store.state.cell5 === 'X' && store.state.cell8 === 'X'){
            document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`
            store.state.counterOne++
            localStorage.setItem('counterOne', store.state.counterOne)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell3 === 'X' && store.state.cell6 === 'X' && store.state.cell9 === 'X'){
            document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`
            store.state.counterOne++
            localStorage.setItem('counterOne', store.state.counterOne)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell1 === 'X' && store.state.cell5 === 'X' && store.state.cell9 === 'X'){
            document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`
            store.state.counterOne++
            localStorage.setItem('counterOne', store.state.counterOne)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell3 === 'X' && store.state.cell5 === 'X' && store.state.cell7 === 'X'){
            document.querySelector('#winner').innerText = `${store.state.playerOne} WON!`
            store.state.counterOne++
            localStorage.setItem('counterOne', store.state.counterOne)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
        }



        function playerTwoWin() {
          if(store.state.cell1 === 'O' && store.state.cell2 === 'O' && store.state.cell3 === 'O'){
            document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`
            store.state.counterTwo++
            localStorage.setItem('counterTwo', store.state.counterTwo)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell4 === 'O' && store.state.cell5 === 'O' && store.state.cell6 === 'O'){
            document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`
            store.state.counterTwo++
            localStorage.setItem('counterTwo', store.state.counterTwo)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell7 === 'O' && store.state.cell8 === 'O' && store.state.cell9 === 'O'){
            document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`
            store.state.counterTwo++
            localStorage.setItem('counterTwo', store.state.counterTwo)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell1 === 'O' && store.state.cell4 === 'O' && store.state.cell7 === 'O'){
            document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`
            store.state.counterTwo++
            localStorage.setItem('counterTwo', store.state.counterTwo)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell2 === 'O' && store.state.cell5 === 'O' && store.state.cell8 === 'O'){
            document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`
            store.state.counterTwo++
            localStorage.setItem('counterTwo', store.state.counterTwo)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell3 === 'O' && store.state.cell6 === 'O' && store.state.cell9 === 'O'){
            document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`
            store.state.counterTwo++
            localStorage.setItem('counterTwo', store.state.counterTwo)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell1 === 'O' && store.state.cell5 === 'O' && store.state.cell9 === 'O'){
            document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`
            store.state.counterTwo++
            localStorage.setItem('counterTwo', store.state.counterTwo)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
          else if(store.state.cell3 === 'O' && store.state.cell5 === 'O' && store.state.cell7 === 'O'){
            document.querySelector('#winner').innerText = `${store.state.playerTwo} WON!`
            store.state.counterTwo++
            localStorage.setItem('counterTwo', store.state.counterTwo)
            store.dispatch('resetGame', 1)
            localStorage.removeItem('cellOne'); localStorage.removeItem('cellTwo');localStorage.removeItem('cellThree');localStorage.removeItem('cellFour');localStorage.removeItem('cellFive');localStorage.removeItem('cellSix');localStorage.removeItem('cellSeven');localStorage.removeItem('cellEight');localStorage.removeItem('cellNine');
          }
        }


        this.anchor.querySelector('.cellsWrapper').addEventListener('click', switching)
        this.anchor.querySelector('.cellsWrapper').addEventListener('click', playerOneWin)
        this.anchor.querySelector('.cellsWrapper').addEventListener('click', playerTwoWin)
        
    }
}