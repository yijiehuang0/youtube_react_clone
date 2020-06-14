import React from "react";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
export class Watch extends React.Component {
  render() {
    return <RelatedVideos />;
  }
}
export default Watch;
