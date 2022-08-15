// Generic Interface
class Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

interface Product {
  title: string;
}

let result = fetch<Product>('url');
console.log(result.data);
