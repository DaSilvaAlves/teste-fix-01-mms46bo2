import React, { useState } from 'react';
import Task } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature3 = () => {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

  const handleCompletedChange = (task: Task) => {
    const updatedTasks =.map((t) => {
      if (t.id === task.id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h2>Marcar como Concluída</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
 <Button onClick={() => handleCompletedChange(task)}>
              {task.completed ? 'Desmarcar' : 'Marcar'}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feature3;