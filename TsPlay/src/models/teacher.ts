import { Person } from './person';

export class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}
