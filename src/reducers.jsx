import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actions';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.taskId ? action.payload.updatedTask : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;