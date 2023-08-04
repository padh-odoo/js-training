/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
  static template = "owl_playground.counter";
  state = useState({ value: 0 });

  increment() {
    this.state.value++;
  }
  decrement() {
    if (this.state.value > 0) {
      this.state.value--;
    }
    else {
      alert("Value is already 0");
    }
  }
}