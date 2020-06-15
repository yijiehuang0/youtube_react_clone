import { YOUTUBE_LIBRARY_LOADED } from "../actions/api";

const initalState = {
  libraryLoaded: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case YOUTUBE_LIBRARY_LOADED:
      return {
        libraryLoaded: true,
      };
    default:
      return false;
  }
}

export const getYoutubeLibraryLoaded = (state) => state.api.libraryLoaded;

//reducer tells if if our action is successfully fetched from the youtube lbibrary,
// we set the libraryLoaded flag to be ture

// default action is going to be false
// and we are going to intialize the state from
