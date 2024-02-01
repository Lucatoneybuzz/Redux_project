export const ADD_TASK = 'ADD_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    description,
    isDone: false,
  },
});

export const filterTasks = (filterType) => ({
  type: FILTER_TASKS,
  payload: filterType,
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});
