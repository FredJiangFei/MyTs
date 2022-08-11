// 如果类没有任何逻辑或子类可重用的代码，只有一堆声明，用interface，否则用abstract calss

// abstract class Calendar {
//   constructor(public name: string) {}
//   addEvent() {}
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {}

class GoogleCalendar implements Calendar {
  name: string;
  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}
