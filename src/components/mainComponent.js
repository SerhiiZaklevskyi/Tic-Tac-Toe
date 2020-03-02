export default class mainComponent {
  constructor(store, anchor) {
    this.anchor = anchor;
    store.events.subscribe("change", () => this.render());
  }
}
