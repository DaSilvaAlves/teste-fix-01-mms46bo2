import React, { useState } from 'react';
import { Task } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature2 = () => {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

  const handlePriorityChange = (task: Task, priority: string) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, priority };
      }
      return t;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h2>Definir Prioridade</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <select
              value={task.priority}
              onChange={(event) => handlePriorityChange(task, event.target.value)}
            >
              <option value="">Prioridade</option>
              <option value="alta">Alta</option>
              <option value="média">Média</option>
              <option value="baixa">Baixa</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feature2;