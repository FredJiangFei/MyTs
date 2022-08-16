import { Reminder } from './Reminder';

export interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}
