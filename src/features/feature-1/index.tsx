import React, { useState } from 'react';
import { TaskForm } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature1 = () => {
  const [taskForm, setTaskForm] = useState<TaskForm>({
    title: '',
    description: '',
    priority: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskForm({ ...taskForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Save task to local storage
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(taskForm);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setTaskForm({ title: '', description: '', priority: '' });
  };

  return (
    <div>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={taskForm.title}
          onChange={handleInputChange}
          placeholderTítulo"
        />
        <input
          type="text"
          name="description"
          value={taskForm.description}
         ={handleInputChange}
          placeholder="Descrição"
        />
        <select
          name="priority"
          value={taskForm.priority}
          onChangehandleInputChange}
        >
          <option value="">Prioridade</option>
          <option value="alta">Alta</option>
          <option value="média">Média</option>
          <option value="baixa">Baixa</option>
        </select>
        <Button type="submit">Criar</Button>
      </form>
    </div>
  );
};

export default Feature1;