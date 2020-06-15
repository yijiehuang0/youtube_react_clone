import { all } from "redux-saga";
export default function* () {
  yield all([]);
}

// sages will take care of the asychronous actions that are dispathcehd
// to create a store we bundle all our sages into one single saga, the root saga
// this is comparable to combining reducers in Redux
