import { Account } from './models/account';
import { Ride } from './models/ride';
import { Person, Student, Teacher } from './models/person';
import { ProfileComponent } from './decorators/profile';
import { calTax } from './tax';
import { calBonus } from './bonus';
import { callForOf, callForIn } from './others/for';
import { start } from './others/letVar';

//Object-Oriented
let account = new Account(1, 'Fred', 0);
account.deposit(100);
account.balance = 150;
console.log(account.balance);

// static member
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);

// Method overriding
const teacher = new Teacher('Fred', 'Jiang');
console.log(teacher.fullName);

// Polymorphism
printNames([new Student(1, 'Fred', 'Jiang'), new Teacher('Tom', 'Doacny')]);

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

// decorators
const profile = new ProfileComponent();
console.log(profile);

console.log(calTax(10_000));
console.log(calBonus(10));


callForOf()
callForIn()

start()