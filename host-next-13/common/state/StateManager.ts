type Observer<T> = (d: T) => void;

class Notifier<T> {
  #observers = new Set<Observer<T>>();

  subscribe(o: Observer<T>) {
    this.#observers.add(o);
  }

  unsubscribe(o: Observer<T>) {
    this.#observers.delete(o);
  }

  protected notify(data: T) {
    this.#observers.forEach((o) => o(data));
  }
}

export class StateManager<T> extends Notifier<T> {
  #data: T;

  constructor(defaultData: T) {
    super();
    this.#data = defaultData;
  }

  get data() {
    return this.#data;
  }

  set data(d: T) {
    this.#data = d;
    this.notify(d)
  }
}
