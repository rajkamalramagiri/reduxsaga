import { all } from "redux-saga/effects";
import countSaga from "./sagas/countSagas";

function* rootSaga() {
  yield all([
    ...countSaga,
  ]);
}

// exports
export default rootSaga;
