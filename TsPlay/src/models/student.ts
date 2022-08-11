import { Person } from './person';

export class Student extends Person {
  constructor(public studentId: number, firstName: string, lasttName: string) {
    super(firstName, lasttName);
  }
}
