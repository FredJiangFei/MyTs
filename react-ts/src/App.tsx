import React, { useState, useEffect } from 'react';
import './App.css';
import { Reminder } from './models/Reminder';
import ReminderList from './components/ReminderList';
import reminderService from './services/reminderService';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    getReminders();
  }, []);

  const getReminders = async () => {
    const data = await reminderService.getReminders();
    setReminders(data);
  };

  const removeReminder = (id: number) => {
    setReminders((rs) => rs.filter((x) => x.id != id));
  };

  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
