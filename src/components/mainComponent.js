/* eslint-disable class-methods-use-this */
import store from "../Store/index";

export default class MainComponent {
  constructor(anchor) {
    this.anchor = anchor;
  }

  onMount() {
    store.events.subscribe("change", this.render);
  }

  onDestroy() {
    store.events.unsubscribe("change", this.render);
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  addListeners({ event, callback }) {
    window.addEventListener(event, callback);
  }

  removeListeners({ event, callback }) {
    window.removeEventListener(event, callback);
  }
}
