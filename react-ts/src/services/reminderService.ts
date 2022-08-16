import { Reminder } from './../models/Reminder';
import axios from 'axios';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  async getReminders() {
    const res = await this.http.get<Reminder[]>('/todos');
    return res.data;
  }
}

export default new ReminderService();
