import React from 'react';
import { ReminderListProps } from '../models/ReminderListProps';

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((x) => (
        <li className="list-group-item" key={x.id}>
          {x.title}
          <button
            className="btn btn-danger"
            onClick={() => onRemoveReminder(x.id)}
          >
            Del
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
