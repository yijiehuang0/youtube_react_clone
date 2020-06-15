import React from "react";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import { Video } from "../../components/Video/Video";
import { VideoMetadata } from "../../components/VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "../../components/VideoInfoBox/VideoInfoBox";
import { Comments } from "../Comments/Comments";
import { Divider } from "semantic-ui-react";
export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="TiT-mG53Baw" />
        <VideoMetadata viewCount={1000} />
        <VideoInfoBox className="video-info-box" />
        <Divider />
        <Comments />
        <RelatedVideos className="relatedVideos" />
      </div>
    );
  }
}
export default Watch;

// when to use div? to wrap everything that you want, so that it is easy to specifiy using css
// className is used specifiy the class name
// we specify that the sytle here is a dictionary of width, height, and background
