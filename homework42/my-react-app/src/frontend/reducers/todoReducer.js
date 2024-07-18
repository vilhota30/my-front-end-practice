import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  CLEAR_TODOS_SUCCESS,
} from "../actions/todoActions.js";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload, loading: false };
    case ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload], loading: false };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo._id === action.payload._id ? action.payload : todo)),
        loading: false,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
        loading: false,
      };
    case CLEAR_TODOS_SUCCESS:
      return { ...state, todos: [], loading: false };
    default:
      return state;
  }
};

export default todoReducer;
