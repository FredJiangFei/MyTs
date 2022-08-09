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

// Type narrowing

// Nullable types

// The unknown type

// The never type
