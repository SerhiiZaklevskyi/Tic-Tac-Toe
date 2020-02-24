import mainComponent from "./mainComponent"
import store from "../Store/index"

export default class FieldComponent extends mainComponent{
    constructor(anchor){
        super(
            store,
            document.querySelector('#gameField')
        );
    }

    render(){
       this.anchor.innerHTML = `
        <div class="cellsWrapper">
        <div class="firstRow">
          <p class="cell" id="0"></p>
          <p class="cell" id="1"></p>
          <p class="cell" id="2"></p>
        </div>
        <div class="secondRow">
          <p class="cell" id="3"></p>
          <p class="cell" id="4"></p>
          <p class="cell" id="5"></p>
        </div>
        <div class="thirdRow">
          <p class="cell" id="6"></p>
          <p class="cell" id="7"></p>
          <p class="cell" id="8"></p>
        </div>
        </div>
        `
    }
}