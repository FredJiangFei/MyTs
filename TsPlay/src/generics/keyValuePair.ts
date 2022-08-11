// Generic Classes
class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

class StringKeyValuePair {
  constructor(public key: string, public value: string) {}
}

class KeyValuePairGeneric<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePairGeneric<number, string>(1, 'fred');
