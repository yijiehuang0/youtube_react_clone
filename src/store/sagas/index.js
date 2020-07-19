import { all, call, put, fork } from "redux-saga/effects";
import { watchMostPopularVideos } from "./video";
export default function* () {
  yield all([fork(watchMostPopularVideos)]);
}

export function* fetchEntity(request, entity, ...args) {
  try {
    const response = yield call(request);
    yield put(entity.success(response.result, ...args));
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}
// parameters -> request function that returns a promise
// entity object -> success, request, failure function
// if there is a cucess then it dispatches actionand result, or it puts the error instead
// function* is a generator function that yields to certain results

// sages will take care of the asychronous actions that are dispathcehd
// to create a store we bundle all our sages into one single saga, the root saga
// this is comparable to combining reducers in Redux
