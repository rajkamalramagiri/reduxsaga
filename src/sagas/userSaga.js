// src/sagas/userSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from '../actions/userActions';
// import api from '../api'
import { fetchUsers } from '../api'

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
