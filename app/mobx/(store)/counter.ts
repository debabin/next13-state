import { action, computed, makeObservable, observable } from "mobx";

export class Counter {
  value;

  constructor(value: any) {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
    });
    this.value = value;
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }
}

export const globalServerCounter = new Counter(0);
