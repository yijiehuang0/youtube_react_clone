import { fork, take } from "redux-saga/effects";
import * as api from "../api/youtube-api";
import * as videoActions from "../actions/video";
import { REQUEST } from "../actions";
import { fetchEntity } from "./index";

// this takes in the function to take this action, and then get sht econtents and actually calls and
export function* watchMostPopularVideos() {
  while (true) {
    const { amount, loadDescription, nextPageToken } = yield take(
      videoActions.MOST_POPULAR[REQUEST]
    );
    yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
  }
}

export function* fetchMostPopularVideos(
  amount,w
  loadDescription,
  nextPageToken
) {
  const request = api.buildMostPopularVideoRequest.bind(
    null,
    amount,
    loadDescription,
    nextPageToken
  );
  yield fetchEntity(request, videoActions.mostPopular);
}
