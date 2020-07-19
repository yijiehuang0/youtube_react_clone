import {
  createAction,
  createRequestType,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "./index";

export const MOST_POPULAR = createRequestType("MOST_POPULAR");
// creates list of request types, success, request, failure instances of mostpopular

export const mostPopular = {
  request: (amount, loadDescription, nextPageToken) =>
    createAction(MOST_POPULAR[REQUEST], {
      amount,
      loadDescription,
      nextPageToken,
    }),
  success: (response) => createAction(MOST_POPULAR[SUCCESS], { response }),
  failure: (response) => createAction(MOST_POPULAR[FAILURE], { response }),
};

// mostPopular simply is a list of functions in order to create these actions

// generally actions(responses) -> create action with response types
