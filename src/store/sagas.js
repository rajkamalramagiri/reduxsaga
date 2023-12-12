// src/store/sagas.js
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_DATA_REQUEST,
  fetchDataSuccess,
  fetchDataFailure,
} from './actions';

// Simulated API call function
const fetchDataApi = () => {
  return new Promise((resolve, reject) => {
    // Simulate API response delay
    setTimeout(() => {
      // Simulate API success
      resolve(['data1', 'data2', 'data3']);
      // Simulate API failure
      // reject('Error fetching data');
    }, 1000);
  });
};

// Worker Saga: Handles the fetchDataRequest action
function* fetchData() {
  try {
    const data = yield call(fetchDataApi);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

// Watcher Saga: Watches for fetchDataRequest action and triggers fetchData saga
function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default function* rootSaga() {
  yield watchFetchData();
}