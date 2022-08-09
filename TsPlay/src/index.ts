import { Account } from './models/account';

//Object-Oriented
let account = new Account(1, 'Fred', 0);
account.deposit(100);
account.balance = 150;
console.log(account.balance);
