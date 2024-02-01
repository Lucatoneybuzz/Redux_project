import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
