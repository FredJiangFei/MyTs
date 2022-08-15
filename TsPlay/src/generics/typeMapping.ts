interface Phone {
  name: string;
  price: number;
}

interface ReadOnlyPhone {
  readonly name: string;
  readonly price: number;
}

type ReadOnlyPhoneMap = {
  readonly [K in keyof Phone]: Phone[K];
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// google: typescript utility types
