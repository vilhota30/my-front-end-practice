import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  CLEAR_TODOS_REQUEST,
  CLEAR_TODOS_SUCCESS,
  CLEAR_TODOS_FAILURE,
} from "../actions/todoActions.js";

const apiUrl = "http://localhost:5000/api/todos";

function* fetchTodos() {
  try {
    const response = yield call(axios.get, apiUrl);
    yield put({ type: FETCH_TODOS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_TODOS_FAILURE, payload: error.message });
  }
}

function* addTodo(action) {
  try {
    const response = yield call(axios.post, apiUrl, { 
      title: action.payload.title, 
      description: action.payload.description 
    });
    yield put({ type: ADD_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_TODO_FAILURE, payload: error.message });
  }
}

function* updateTodo(action) {
  try {
    const response = yield call(axios.put, `${apiUrl}/${action.payload.id}`, action.payload.updates);
    yield put({ type: UPDATE_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_TODO_FAILURE, payload: error.message });
  }
}

function* deleteTodo(action) {
  try {
    yield call(axios.delete, `${apiUrl}/${action.payload}`);
    yield put({ type: DELETE_TODO_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({ type: DELETE_TODO_FAILURE, payload: error.message });
  }
}

function* clearTodos() {
  try {
    yield call(axios.delete, apiUrl);
    yield put({ type: CLEAR_TODOS_SUCCESS });
  } catch (error) {
    yield put({ type: CLEAR_TODOS_FAILURE, payload: error.message });
  }
}

function* todoSagas() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
  yield takeEvery(ADD_TODO_REQUEST, addTodo);
  yield takeEvery(UPDATE_TODO_REQUEST, updateTodo);
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodo);
  yield takeEvery(CLEAR_TODOS_REQUEST, clearTodos);
}

export default todoSagas;
