import { createAction } from "./index";
export const YOUTUBE_LIBRARY_LOADED = "YOUTUBE_LIBRARY_LOADED";
export const youtubeLibraryLoaded = createAction.bind(
  null,
  YOUTUBE_LIBRARY_LOADED
);

// action here is null, the payload is the string
// bind here allows for "this" to be attached to this action now, and it becomes operable
// ex var button = myButton.click.bind(myButton)
