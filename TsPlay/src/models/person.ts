export class Person {
  constructor(public firstName: string, public lasttName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lasttName;
  }

  wals() {
    console.log('Walking');
  }
}
