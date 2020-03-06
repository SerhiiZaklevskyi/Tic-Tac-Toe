/* eslint-disable class-methods-use-this */
import store from "../Store/index";

const DEFAULT_EMPTY_FN = () => {};

export default class mainComponent {
  constructor(anchor) {
    this.anchor = anchor;
  }

  onMount(callback = DEFAULT_EMPTY_FN) {
    store.events.subscribe("change", () => this.render());
    callback();
  }

  onDestroy() {
    store.events.unsubscribe("change", () => this.render());
  }
}
