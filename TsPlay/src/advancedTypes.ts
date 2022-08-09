// Type aliases
type Employee = {
  readonly id: number;
  name: string;
  nickname?: string;
  retire: (date: Date) => void;
};

let emp: Employee = {
  id: 1,
  name: 'Fred',
  retire: (date: Date) => console.log(date),
};

// Union type
function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number') return weight * 2.2;

  return parseInt(weight) * 2.2;
}

// Intersection Type
let weight: number & string;
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Type
type Quantity = 50 | 100;
let quan: Quantity = 50;
type Metric = 'cm' | 'inch';

// Type narrowing

// Nullable types
function greet(name: string) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hello');
}
greet(null);

// Optional Chaining
// x?.y?.z

// Nullish Coaelscng Operator ?? null or undefined
let speed: number | null = 0;
console.log(speed ?? 30);

// Type Assertions
// 1. xx as Type
// 2.<Type> xx

// The unknown type
// 编译时报错，避免调用不属于类型的方法，比 any 类型更安全，any编译时不会报错
function render(document: unknown) {
  // any
  if (typeof document === 'string') {
    document.toUpperCase();
  }

  // document.move();
  // document.fly();
}

// The never type
// 一个从来不会有返回值的函数
// 一个总是会抛出错误的函数
// "allowUnreachableCode": false
function processEvents(): never {
  while (true) {
    // Read a message
  }
}

function reject(message: string): never {
  throw new Error(message);
}

processEvents();
console.log('After processEvents');
