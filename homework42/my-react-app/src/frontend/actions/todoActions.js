export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";
export const CLEAR_TODOS_REQUEST = "CLEAR_TODOS_REQUEST";
export const CLEAR_TODOS_SUCCESS = "CLEAR_TODOS_SUCCESS";
export const CLEAR_TODOS_FAILURE = "CLEAR_TODOS_FAILURE";

export const fetchTodos = () => ({ type: FETCH_TODOS_REQUEST });
export const addTodo = (title, description) => ({ type: ADD_TODO_REQUEST, payload: { title, description } });
export const updateTodo = (id, updates) => ({ type: UPDATE_TODO_REQUEST, payload: { id, updates } });
export const deleteTodo = (id) => ({ type: DELETE_TODO_REQUEST, payload: id});
export const clearTodos = () => ({ type: CLEAR_TODOS_REQUEST });

