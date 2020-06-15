import { createAction } from "./index";
export const YOUTUBE_LIBRARY_LOADED = "YOUTUBE_LIBRARY_LOADED";
export const youtubeLibraryLoaded = createAction.bind(
  null,
  YOUTUBE_LIBRARY_LOADED
);

// here we bind some string here in this case it is CAPS: youtube libarary loaded and we bind that to
// action here that is null
