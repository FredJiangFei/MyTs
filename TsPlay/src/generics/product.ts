// Extend Generic Classes
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  objects: T[] = [];

  add(obj: T): void {
    this.objects.push(obj);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
// store.add();
store.compress();

class SearchableStore<T> extends Store<T> {}
