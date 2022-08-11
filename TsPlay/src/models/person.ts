// Method overriding, Polymorphism
export class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  wals() {
    console.log('Walking');
  }
}

export class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

export class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}
