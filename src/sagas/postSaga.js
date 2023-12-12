// src/sagas/postSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from '../actions/postActions';
// import api from '../api';
import { fetchPosts } from '../api'


function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}
