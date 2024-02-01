// Task.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../actions';
import '../App.css'; // Import your styles

const Task = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(task.id, editedTask));
    setEditMode(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{task.description}</div>
        {!editMode && (
          <button className="edit-button" onClick={() => setEditMode(true)}>
            Edit
          </button>
        )}
      </div>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className="save-button" onClick={handleEdit}>
            Save
          </button>
        </div>
      ) : (
        <div className="card-body">{task.description}</div>
      )}
    </div>
  );
};

export default Task;
