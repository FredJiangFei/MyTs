// abstract
abstract class Shape {
  constructor(public color: string) {}

  // 只有具体的形状才能render，抽象方法只能存在抽象类中
  abstract render(): void;
}

class CirCle extends Shape {
  constructor(public radius: string, color: string) {
    super(color);
  }

  override render() {
    console.log('Render a CirCle');
  }
}
