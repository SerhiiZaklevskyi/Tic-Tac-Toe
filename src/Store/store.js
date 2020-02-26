import Observer from "./observer"


export default class Store {
    constructor(reducers) {
        this.reducers = reducers;
        this.state = {
            playerOne: "PlayerOne",
            playerTwo: "PlayerTwo",
                cell1: '',
                cell2: '',
                cell3: '',
                cell4: '',
                cell5: '',
                cell6: '',
                cell7: '',
                cell8: '',
                cell9: '',
            firstPlayerMove: true,
            counterOne: 0,
            counterTwo: 0,
            firstPlayerX: true
        }
        this.events = new Observer()
    }
    dispatch(action, payload) {
        if(this.reducers[action]){
            this.state = this.reducers[action](payload, this.state)
            this.events.next('change', this.state)
        }
    }
}