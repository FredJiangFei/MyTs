let num: number = 123_456_789;
console.log(num);

let numbers: number[] = [];
let user: [number, string] = [1, 'Fred'];

enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Small;
console.log(mySize);

function cal(icome: number, tax: number = 2021) {
  let rate = 1.3;
  if (tax > 2022) return icome * rate;

  return icome * (rate + 0.1);
}

let employee: {
  readonly id: number;
  name: string;
  nickname?: string;
} = { id: 1, name: 'Fred' };
employee.nickname = 'LaoGanMa';
