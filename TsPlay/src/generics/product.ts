// Extend Generic Classes
interface Product {
  name: string;
  category: string;
  price: number;
}

class Store<T> {
  objects: T[] = [];

  add(obj: T): void {
    this.objects.push(obj);
  }

  // keyof
  find(property: keyof T, value: unknown): T | undefined {
    return this.objects.find((obj) => obj[property] === value);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
// store.add();
store.compress();

class SearchableStore<T extends { name: string }> extends Store<T> {
  findByName(name: string): T | undefined {
    return this.objects.find((obj) => obj.name === name);
  }
}

class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return this.objects.filter((obj) => obj.category === category);
  }
}

let product = new Store<Product>();
product.add({ title: '123', name: 'a', price: 1, category: 'cloth' });

store.find('name', 1);
// store.find('age', 1);
