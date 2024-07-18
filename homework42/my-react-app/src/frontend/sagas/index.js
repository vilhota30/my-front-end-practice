import { all } from "redux-saga/effects";
import todoSagas from "./todoSagas.js";

export default function* rootSaga() {
  yield all([
    todoSagas(),
  ]);
}
