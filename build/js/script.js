!function(e){var l={};function t(a){if(l[a])return l[a].exports;var r=l[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=l,t.d=function(e,l,a){t.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,l){if(1&l&&(e=t(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var r in e)t.d(a,r,function(l){return e[l]}.bind(null,r));return a},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},t.p="",t(t.s=0)}([function(e,l,t){"use strict";t.r(l);class a{constructor(e,l){this.anchor=l,e.events.subscribe("change",()=>this.render()),this.onInit()}}class r{constructor(){this.subscribers={}}subscribe(e,l){this.subscribers[e]||(this.subscribers[e]=[]),this.subscribers[e].push(l)}next(e,l){this.subscribers[e]&&this.subscribers[e].forEach(e=>e(l))}}var c=new class{constructor(e){this.reducers=e,this.state={playerOne:"PlayerOne",playerTwo:"PlayerTwo",cell1:"",cell2:"",cell3:"",cell4:"",cell5:"",cell6:"",cell7:"",cell8:"",cell9:"",firstPlayerMove:!0,counterOne:0,counterTwo:0},this.events=new r}dispatch(e,l){this.reducers[e]&&(this.state=this.reducers[e](l,this.state),this.events.next("change",this.state))}}({addPlayerOne:(e,l)=>({...l,playerOne:e}),addPlayerTwo:(e,l)=>({...l,playerTwo:e}),changeCellOne:(e,l)=>({...l,cell1:e}),changeCellTwo:(e,l)=>({...l,cell2:e}),changeCellThree:(e,l)=>({...l,cell3:e}),changeCellFour:(e,l)=>({...l,cell4:e}),changeCellFive:(e,l)=>({...l,cell5:e}),changeCellSix:(e,l)=>({...l,cell6:e}),changeCellSeven:(e,l)=>({...l,cell7:e}),changeCellEight:(e,l)=>({...l,cell8:e}),changeCellNine:(e,l)=>({...l,cell9:e}),switchPlayer:(e,l)=>({...l,firstPlayerMove:e}),resetGame:(e,l)=>({...l,cell1:"",cell2:"",cell3:"",cell4:"",cell5:"",cell6:"",cell7:"",cell8:"",cell9:"",firstPlayerMove:!0}),getCounterOne:(e,l)=>({...l,counterOne:e}),getCounterTwo:(e,l)=>({...l,counterTwo:e}),restartGame:(e,l)=>({...l,playerOne:"PlayerOne",playerTwo:"PlayerTwo",cell1:"",cell2:"",cell3:"",cell4:"",cell5:"",cell6:"",cell7:"",cell8:"",cell9:"",firstPlayerMove:!0,counterOne:0,counterTwo:0})});const o=[{field:"changeCellOne",value:localStorage.getItem("cellOne")},{field:"changeCellTwo",value:localStorage.getItem("cellTwo")},{field:"changeCellThree",value:localStorage.getItem("cellThree")},{field:"changeCellFour",value:localStorage.getItem("cellFour")},{field:"changeCellFive",value:localStorage.getItem("cellFive")},{field:"changeCellSix",value:localStorage.getItem("cellSix")},{field:"changeCellSeven",value:localStorage.getItem("cellSeven")},{field:"changeCellEight",value:localStorage.getItem("cellEight")},{field:"changeCellNine",value:localStorage.getItem("cellNine")}];(new class extends a{constructor(e){super(c,document.querySelector("#headerWrapper"))}onInit(){}render(){this.anchor.innerHTML='\n          <p class="header">Tic-Tac-Toe!</p>\n          <div id="playersWrapper">\n          <span class="playerOne">\n          <input type="text" id="playerOne" placeholder="Player-1">\n          <button class="save" id="savePlayerOne">save</button>\n          </span>\n          <span class="playerTwo">\n          <input type="text" id="playerTwo" placeholder="Player-2">\n          <button class="save" id="savePlayerTwo">save</button>\n          </span>\n          </div>\n          <span class="startWrapper"><button class="startGame">ResetGame</button></span>\n          <div class="chooseSymbol">\n          <p>Chose your symbol</p>\n          <button class="x-button">X</button>\n          <button class="o-button">O</button>\n          </div>\n        ';const e=this.anchor.querySelector("#playerOne"),l=this.anchor.querySelector("#playerTwo"),t=this.anchor.querySelector("#savePlayerOne"),a=this.anchor.querySelector("#savePlayerTwo"),r=this.anchor.querySelector(".startGame"),o=this.anchor.querySelector(".x-button"),s=this.anchor.querySelector(".o-button");t.addEventListener("click",()=>{c.dispatch("addPlayerOne",e.value.trim()),localStorage.setItem("PlayerOneName",e.value.trim()),this.anchor.querySelector(".chooseSymbol").style.display="block"}),e.addEventListener("keypress",l=>{"Enter"===l.key&&(c.dispatch("addPlayerOne",e.value.trim()),localStorage.setItem("PlayerOneName",e.value.trim()),this.anchor.querySelector(".chooseSymbol").style.display="block")}),a.addEventListener("click",()=>{c.dispatch("addPlayerTwo",l.value.trim()),localStorage.setItem("PlayerTwoName",l.value.trim())}),l.addEventListener("keypress",e=>{"Enter"===e.key&&(c.dispatch("addPlayerTwo",l.value.trim()),localStorage.setItem("PlayerTwoName",l.value.trim()))}),r.addEventListener("click",()=>{localStorage.clear(),document.querySelector("#winner").innerText="",c.dispatch("restartGame",1)}),o.addEventListener("click",()=>{this.anchor.querySelector(".chooseSymbol").style.display="none"}),s.addEventListener("click",()=>{this.anchor.querySelector(".chooseSymbol").style.display="none",c.dispatch("switchPlayer",!1)})}}).render(),(new class extends a{constructor(e){super(c,document.querySelector("#gameField"))}onInit(){o.forEach(e=>{null!==e.value&&c.dispatch(e.field,e.value)})}render(){this.anchor.innerHTML=`\n      <div class="cellsWrapper">\n      <div class="firstRow">\n        <p class="cell" id="1">${c.state.cell1}</p>\n        <p class="cell" id="2">${c.state.cell2}</p>\n        <p class="cell" id="3">${c.state.cell3}</p>\n      </div>\n      <div class="secondRow">\n        <p class="cell" id="4">${c.state.cell4}</p>\n        <p class="cell" id="5">${c.state.cell5}</p>\n        <p class="cell" id="6">${c.state.cell6}</p>\n      </div>\n      <div class="thirdRow">\n        <p class="cell" id="7">${c.state.cell7}</p>\n        <p class="cell" id="8">${c.state.cell8}</p>\n        <p class="cell" id="9">${c.state.cell9}</p>\n      </div>\n      </div>\n      `,this.anchor.querySelector(".cellsWrapper").addEventListener("click",(function(e){if(e.target.classList.contains("cell")){let l;if(!0===c.state.firstPlayerMove&&""==e.target.innerText)l={id:e.target.id,value:"X"},c.dispatch("switchPlayer",!1);else{if(!1!==c.state.firstPlayerMove||""!=e.target.innerText)return;l={id:e.target.id,value:"O"},c.dispatch("switchPlayer",!0)}switch(l.id){case"1":c.dispatch("changeCellOne",l.value),localStorage.setItem("cellOne",l.value);break;case"2":c.dispatch("changeCellTwo",l.value),localStorage.setItem("cellTwo",l.value);break;case"3":c.dispatch("changeCellThree",l.value),localStorage.setItem("cellThree",l.value);break;case"4":c.dispatch("changeCellFour",l.value),localStorage.setItem("cellFour",l.value);break;case"5":c.dispatch("changeCellFive",l.value),localStorage.setItem("cellFive",l.value);break;case"6":c.dispatch("changeCellSix",l.value),localStorage.setItem("cellSix",l.value);break;case"7":c.dispatch("changeCellSeven",l.value),localStorage.setItem("cellSeven",l.value);break;case"8":c.dispatch("changeCellEight",l.value),localStorage.setItem("cellEight",l.value);break;case"9":c.dispatch("changeCellNine",l.value),localStorage.setItem("cellNine",l.value)}}})),this.anchor.querySelector(".cellsWrapper").addEventListener("click",(function(){const e=[];e.push(c.state.cell1,c.state.cell2,c.state.cell3);const l=[];l.push(c.state.cell4,c.state.cell5,c.state.cell6);const t=[];t.push(c.state.cell7,c.state.cell8,c.state.cell9);const a=[];a.push(c.state.cell1,c.state.cell4,c.state.cell7);const r=[];r.push(c.state.cell2,c.state.cell5,c.state.cell8);const o=[];o.push(c.state.cell3,c.state.cell6,c.state.cell9);const s=[];s.push(c.state.cell1,c.state.cell5,c.state.cell9);const n=[];n.push(c.state.cell3,c.state.cell5,c.state.cell7),e.every(e=>"X"==e)||l.every(e=>"X"==e)||t.every(e=>"X"==e)||a.every(e=>"X"==e)||r.every(e=>"X"==e)||o.every(e=>"X"==e)||s.every(e=>"X"==e)||n.every(e=>"X"==e)?(document.querySelector("#winner").innerText=`${c.state.playerOne} WON!`,c.state.counterOne++,localStorage.setItem("counterOne",c.state.counterOne),c.dispatch("resetGame",1),localStorage.removeItem("cellOne"),localStorage.removeItem("cellTwo"),localStorage.removeItem("cellThree"),localStorage.removeItem("cellFour"),localStorage.removeItem("cellFive"),localStorage.removeItem("cellSix"),localStorage.removeItem("cellSeven"),localStorage.removeItem("cellEight"),localStorage.removeItem("cellNine")):(e.every(e=>"O"==e)||l.every(e=>"O"==e)||t.every(e=>"O"==e)||a.every(e=>"O"==e)||r.every(e=>"O"==e)||o.every(e=>"O"==e)||s.every(e=>"O"==e)||n.every(e=>"O"==e))&&(document.querySelector("#winner").innerText=`${c.state.playerTwo} WON!`,c.state.counterTwo++,localStorage.setItem("counterTwo",c.state.counterTwo),c.dispatch("resetGame",1),localStorage.removeItem("cellOne"),localStorage.removeItem("cellTwo"),localStorage.removeItem("cellThree"),localStorage.removeItem("cellFour"),localStorage.removeItem("cellFive"),localStorage.removeItem("cellSix"),localStorage.removeItem("cellSeven"),localStorage.removeItem("cellEight"),localStorage.removeItem("cellNine"))}))}}).render(),(new class extends a{constructor(e){super(c,document.querySelector("#score"))}onInit(){let e=localStorage.getItem("PlayerOneName"),l=localStorage.getItem("PlayerTwoName");null!==e&&c.dispatch("addPlayerOne",e),null!==l&&c.dispatch("addPlayerTwo",l);let t=localStorage.getItem("counterOne"),a=localStorage.getItem("counterTwo");null!==t&&c.dispatch("getCounterOne",t),null!==a&&c.dispatch("getCounterTwo",a)}render(){this.anchor.innerHTML=`\n        <p id="firstPlayer">${c.state.playerOne}: ${c.state.counterOne}</p>\n        <p id="secondPlayer">${c.state.playerTwo} : ${c.state.counterTwo} </p>\n        `}}).render()}]);