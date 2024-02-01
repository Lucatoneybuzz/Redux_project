import { ADD_TASK, FILTER_TASKS, EDIT_TASK } from './actions';

const initialState = {
  tasks: [],
  filter: 'all',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
