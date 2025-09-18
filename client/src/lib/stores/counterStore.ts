import { makeObservable } from "mobx";

export default class CounterStore {
  title = "Counter store";
  count = 42;
  event: string[] = [`Initialized with count: ${this.count}`];
  constructor() {
    makeObservable(this);
  }

  increment = (amount = 1) => {
    this.count += amount;
    this.event.push(`Incremented by ${amount}, count is now: ${this.count}`);
  };

  decrement = (amount = 1) => {
    this.count -= amount;
    this.event.push(`Decremented by ${amount}, count is now: ${this.count}`);
  };

  get eventCount() {
    return this.event.length;
  }
}
