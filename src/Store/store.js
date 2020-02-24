import Observer from "./observer"


export default class Store {
    constructor(reducers) {
        this.reducers = reducers;
        this.state = {
            playerOne: "",
            playerTwo: ""
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